import {useContext} from "react";
import {SelectedStudentsContext} from "../../context/SelectedStudents";
import Student from "../../components/Student/Student";

function SelectedStudents() {

    const {selectedStudents, setSelectedStudents} = useContext(SelectedStudentsContext);

    const handleUnselectOnClick = (event) => {
        setSelectedStudents(
            (selectedStudents) => selectedStudents.filter((s) => s.id != event.target.id)
        );
    }

    const selectedStudentsComponents = selectedStudents.map(s => (
        <div>
            <Student id={s.id} key={s.id} name={s.name}></Student>
            <button id={s.id} onClick={handleUnselectOnClick}>Unselect</button>
        </div>

    ))

    return (
        <div className="SelectedStudent">
            {selectedStudentsComponents}
        </div>
    )
}

export default SelectedStudents