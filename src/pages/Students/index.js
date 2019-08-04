import React, { useContext, useEffect } from 'react'
import Layout from '../../components/hoc/Layout';
import StudentContext from '../../context/StudentContext';
import STUDENT from '../../services/StudentService';


const Students = () => {
    const {students, dispatch} = useContext(StudentContext);
    
    useEffect(() => {
        const getAll = async () => {
            const students = await STUDENT.getAll();
            dispatch({type: 'GET_ALL_STUDENTS', students})
        }

        getAll();
    },[dispatch])

    const add = async () => {
        const students = await STUDENT.getAll();
        dispatch({type: 'GET_ALL_STUDENTS', students})
    }

    const remove = (id) => {
        dispatch({type: 'REMOVE_STUDENT', id})
    }
    return (
        <Layout>
            <h1>Student Shitting Phase!</h1>
            {
                students.map((student,i) => <p key={i} onClick={() => remove(student.id)}>{student.id} - {student.name}</p>)
            }
            <button onClick={add}>CLick</button>
        </Layout>
    )
}

export default Students
