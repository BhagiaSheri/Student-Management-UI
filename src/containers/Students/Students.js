import axios from "axios";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import Student from "../../components/Student/Student";

function Students() {

    const filterDropdown = useRef(null);
    const filterInput = useRef(null);

    const [studentsState, setStudentsState] = useState([]);
    const [filterState, setFilterState] = useState(0)

    const fetchStudents = () => {
        axios.get("http://localhost:8080/api/v1/students", {
            params: {
                filter: filterDropdown.current.value,
                input: filterInput.current.value
            }
        })
            .then(response => setStudentsState(response.data))
            .catch(error => console.log("Error while fetching students, error = " + error.message))
    }

    useEffect(() => fetchStudents(), [filterState])

    const handleFilterState = () => {
        setFilterState(filterState + 1)
    }

    const studentComponents = studentsState.map(s =>
        <Link to={`${s.id}`} key={s.id}>
            <Student id={s.id} key={s.id} name={s.name}/>
        </Link>
    )

    return (
        <>
            <div>
                <label>Filter:</label>
                <select ref={filterDropdown}>
                    <option value="0">N/A</option>
                    <option value="gpa">&lt; gpa</option>
                    <option value="program">program</option>
                </select>
                <label>Input:</label>
                <input ref={filterInput} type="text" name="filter"/>
                <button onClick={handleFilterState}>Apply Filer</button>
            </div>
            <br/>
            <div className="Student">
                {studentComponents}
            </div>
        </>
    )
}

export default Students