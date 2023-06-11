import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://64860418a795d24810b79964.mockapi.io/api/v1/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargarProducts() {
        try {
            const response = await apiClient.get("/products")
            return response.data
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async agregarElemento(elemento) {
        try {
            await apiClient.post("/products",elemento)
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async eliminarElemento(id) {
        try {
            await apiClient.delete("/products/" + id)
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async modificarElemento(id,elemento) {
        try {
            await apiClient.put(`/products/${id}`, elemento)
        } catch( error ) {
            throw "Error de conexion"
        }
    }

}