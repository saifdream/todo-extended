import { clearCompleted } from "../actions";

const clearAllCompletedTodos = () => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: false,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todos = await response.json();

        dispatch(clearCompleted());
    };
};

export default clearAllCompletedTodos;
