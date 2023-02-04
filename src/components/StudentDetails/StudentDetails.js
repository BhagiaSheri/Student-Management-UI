import {useNavigate, useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Courses from "../../containers/Courses/Courses";
import {Link} from "react-router-dom";
import {SelectedStudentsContext} from "../../context/SelectedStudents";


function StudentDetails() {

    const navigate = useNavigate()
    const params = useParams();
    const [studentDetailsState, setStudentDetailsState] = useState({})
    const studentId = params.id;
    const {selectedStudents, setSelectedStudents} = useContext(SelectedStudentsContext);

    const fetchStudentById = () => {
        axios.get(`http://localhost:8080/api/v1/students/${studentId}`)
            .then(response => setStudentDetailsState(response.data))
            .catch(error => console.log("Error while fetching student details, error = " + error.message))
    }

    useEffect(() => fetchStudentById(), [studentId])

    const deleteStudentById = () => {
        axios.delete(`http://localhost:8080/api/v1/students/${studentId}`)
            .then(() => navigate("/"))
            .catch(error => console.log("Error while deleting students, error = " + error.message))
    }
    const handleDeleteOnClick = () => {
        deleteStudentById();
    }

    const isAlreadySelected = () => {
        if (selectedStudents.length === 0) return false
        return selectedStudents.some(s => s.id === studentDetailsState.id)
    }

    const handleSelectionOnClick = () => {
        if (isAlreadySelected()) {
            setSelectedStudents(
                selectedStudents.filter(s => s.id !== studentDetailsState.id)
            )
        } else {
            setSelectedStudents(
                [...selectedStudents,
                    {
                        id: studentDetailsState.id,
                        name: studentDetailsState.name
                    }
                ]
            )
        }
    }

    return (
        <>
            <div className="StudentDetails">
                <h4>Student Info</h4>
                <h6>Name: {studentDetailsState.name}</h6>
                <h6>ID: {studentDetailsState.id}</h6>
                <h6>GPA: {studentDetailsState.gpa}</h6>
                <Courses/>
                <button onClick={handleDeleteOnClick}>Delete</button>
                <br/>
                <button
                    onClick={handleSelectionOnClick}>
                    {isAlreadySelected() ? "Unselect" : "Select"}</button>
                <br/>
                <Link to="/students">Back</Link>
            </div>
        </>
    )

}

export default StudentDetails