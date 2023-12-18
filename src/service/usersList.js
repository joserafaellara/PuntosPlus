import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://657b3d4d394ca9e4af14097c.mockapi.io/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

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
    async modificarCliente(id, cliente) {
        try {
            await apiClient.put(`/users/${id}`, cliente)
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async searchCliente(dni) {
        try {
            const cliente = await apiClient.get(`/users?dni=${dni}`)
            return cliente.data[0]
        } catch( error ) {
            throw "Usuario no encontrado"
        }
    },
    async searchClienteXMail(mail) {
        try {
            const response = await apiClient.get(`/users?mail=${mail}`);
            return response.data[0];
        } catch (error) {
            throw new Error("Usuario no encontrado");
        }
    }
}