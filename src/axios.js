import axios from 'axios'

export default axios.create({
    baseURL: 'https://joaopedro-pern-todolist.herokuapp.com/api/todos'
})