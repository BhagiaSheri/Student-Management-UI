import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import Course from "../../components/Course/Course";

function Courses() {

    const params = useParams()
    const [coursesState, setCoursesState] = useState([]);
    const studentId = params.id;

    const fetchCourses = () => {
        axios.get(`http://localhost:8080/api/v1/students/${studentId}/courses`)
            .then(response => setCoursesState(response.data))
            .catch(error => console.log(`Error while fetching courses for StudentId=${studentId}, error=${error.message}`))
    }

    useEffect(() => fetchCourses(), [studentId])

    const courseComponents = coursesState.map(c =>
        <Course id={c.id} key={c.id} name={c.name}/>
    )

    return (<>
        {(courseComponents.length > 0) ? <div className="Courses">
            <h4>Courses</h4>
            <ol>{courseComponents}</ol>
        </div> : <h5>Term Status: Inactive</h5>}


    </>)

}

export default Courses