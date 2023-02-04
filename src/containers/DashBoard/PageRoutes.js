import {Navigate, Route, Routes} from "react-router";
import Students from "../Students/Students";
import StudentDetails from "../../components/StudentDetails/StudentDetails";
import AddStudent from "../../components/AddStudent/AddStudent";
import SelectedStudents from "../SelectedStudents/SelectedStudents";


export default function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/students"}/>}></Route>
            <Route path="students" element={<Students/>}></Route>
            <Route path="students/:id" element={<StudentDetails/>}></Route>
            <Route path="add-student" element={<AddStudent/>}/>
            <Route path="selected-students" element={<SelectedStudents/>}/>
        </Routes>
    );
}


