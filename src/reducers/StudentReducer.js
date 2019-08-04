export const studentReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return [...state, {
                id: action.student.id,
                name: action.student.name
            }]

        case 'GET_ALL_STUDENTS':
            return [...action.students]
        
        case 'GET_STUDENT':
            return state

        case 'REMOVE_STUDENT':
            return state.filter(student => student.id !== action.id)

        default:
            return state
    }
}