import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://64860418a795d24810b79964.mockapi.io/api/v1/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargarUsers() {
        try {
            const response = await apiClient.get("/users")
            return response.data
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async agregarCliente(cliente) {
        try {
            await apiClient.post("/users",cliente)
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async eliminarCliente(id) {
        try {
            await apiClient.delete("/users/" + id)
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async modificarCliente(id,cliente) {
        try {
            await apiClient.put(`/users/${id}`, cliente)
        } catch( error ) {
            throw "Error de conexion"
        }
    }

}