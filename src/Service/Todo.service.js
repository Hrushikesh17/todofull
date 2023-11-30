import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/v1";

class TodoService {

    saveTodo(td) {
        return axios.post(BASE_API_URL + "/save", td);
    }

    getAllTodo() {
        return axios.get(BASE_API_URL + "/");
    }

    getTodoById(id) {
        return axios.get(BASE_API_URL + "/" + id);
    }

    deleteTodo(id) {
        return axios.get(BASE_API_URL + "/delete/" + id);
    }

    updateTodo(id, td) {
        return axios.post(BASE_API_URL + "/update/" + id,td);
    }
}

export default new TodoService();