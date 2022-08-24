import { added } from "../actions";

const addTodo = (todoText) => {
    return async (dispatch) => {
        const response = await fetch("https://sleepy-refuge-75797.herokuapp.com/api/todos", {
            method: "POST",
            body: JSON.stringify({
                text: todoText,
                completed: false,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(added(todo.text));
    };
};

export default addTodo;
