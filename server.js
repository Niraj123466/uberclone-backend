import http from "http"
import app from "./app.js"

const server = http.createServer(app)
const port = process.env.PORT

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
