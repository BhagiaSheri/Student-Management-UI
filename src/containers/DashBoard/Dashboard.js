import React, {useState} from 'react';
import '../Headers/Header.css'
import Header from "../Headers/Header";
import PageRoutes from "./PageRoutes";
import {SelectedStudentsContext} from "../../context/SelectedStudents";

function Dashboard() {

    const [selectedStudents, setSelectedStudents] = useState([])

    return (
        <>
            <div className='header'>
                <Header/>
            </div>
            <SelectedStudentsContext.Provider value={{selectedStudents, setSelectedStudents}}>
                <div>
                    <PageRoutes/>
                </div>
            </SelectedStudentsContext.Provider>
        </>
    )
}

export default Dashboard