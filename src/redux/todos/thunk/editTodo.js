import { edited } from "../actions";

const editTodo = (todoId, editedTodo) => {
    return async (dispatch) => {
        const response = await fetch(`https://sleepy-refuge-75797.herokuapp.com/api/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                text: editedTodo,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(edited(todo.id, todo.text));
    };
};

export default editTodo;
