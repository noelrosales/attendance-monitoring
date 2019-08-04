import React, { useReducer } from 'react'
import StudentContext from '../context/StudentContext';
import {studentReducer} from '../reducers/StudentReducer';

const StudentProvider = (props) => {
    const [students, dispatch] = useReducer(studentReducer, []);

    return (
        <StudentContext.Provider value={{students,dispatch}}>
            { props.children }
        </StudentContext.Provider>
    )
}

export default StudentProvider
