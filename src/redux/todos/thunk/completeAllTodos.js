import { allCompleted } from "../actions";

const completeAllTodos = () => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/todos/`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: true,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todos = await response.json();

        dispatch(allCompleted());
        // dispatch(loaded(todos));
    };
};

export default completeAllTodos;
