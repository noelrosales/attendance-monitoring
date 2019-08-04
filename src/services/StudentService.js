const STUDENT = {
    getAll: () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => res);
    }
}

export default STUDENT;