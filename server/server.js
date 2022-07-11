require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./db")

//midlleware that prevents CORS error due the different ports of server and client
app.use(cors())

//buitin express middleware that attaches the posted object to the body of the request
app.use(express.json())

//create individual todo
app.post("/api/todos", async (req, res) => {
    try {
        const newTodo = await db.query(
            'INSERT INTO todo(description) VALUES($1) RETURNING *;',
            [req.body.description]
        )

        res.status(201).json({
            status: "success",
            todo: newTodo.rows[0]
        })
    } catch (error) {
        console.error(error.message)
    }
})

//get all todos
app.get("/api/todos", async (_, res) => {
    try {
        const allTodos = await db.query("SELECT * FROM todo;")
        res.status(200).json({
            status: "success",
            results: allTodos.rows.length,
            todos: allTodos.rows
        })
    } catch (error) {
        console.error(error.message)
    }
})

//get individual todo
app.get("/api/todos/:id", async (req, res) => {
    try {
        const selectedTodo = await db.query(
            'SELECT * FROM todo WHERE id = $1;',
            [req.params.id]
        )

        res.status(200).json({
            status: 'success',
            todo: selectedTodo.rows[0]
        })
    } catch (error) {
        console.error(error.message)
    }
})

//update individual todo
app.put("/api/todos/:id", async (req, res) => {
    try {
        const selectedTodo = await db.query(
            'UPDATE todo SET description = $1 WHERE id = $2 RETURNING *;',
            [req.body.description, req.params.id]
        )

        res.status(200).json({
            status: 'success',
            todo: selectedTodo.rows[0]
        })
    } catch (error) {
        console.error(error.message)
    }
})

//delete individual todo
app.delete("/api/todos/:id", async (req, res) => {
    try {
        await db.query(
            'DELETE FROM todo WHERE id = $1',
            [req.params.id]
        )
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`server has started on port ${process.env.PORT}`)
})