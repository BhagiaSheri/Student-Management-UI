import './AddStudent.css';
import {useRef} from "react";
import {useNavigate} from "react-router";
import axios from "axios";

const AddStudent = () => {

    const navigate = useNavigate();
    const newStudentForm = useRef();

    const addStudent = () => {
        const form = newStudentForm.current;
        const data = {
            name: form['name'].value,
            gpa: form['gpa'].value,
            courseList: [] //no courses by default
        };

        axios.post(`http://localhost:8080/api/v1/students`, data)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error('Error while creating new student, error=', error.message);
            })
    }

    return (
        <div className="NewStudent">
            <form ref={newStudentForm}>
                <h1>Add a Student</h1>
                <label>Name</label>
                <input type="text"
                       label={'name'}
                       name={'name'}
                />
                <label>GPA</label>
                <input type="text"
                       label={'gpa'}
                       name={'gpa'}
                />
            </form>
            <button onClick={addStudent}>Add Student</button>
        </div>
    );

}

export default AddStudent;