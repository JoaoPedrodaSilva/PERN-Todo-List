import axios from 'axios'



export default axios.create({
    baseURL: 'https://joaopedro-pern-todo-list.herokuapp.com/api/todos'
})