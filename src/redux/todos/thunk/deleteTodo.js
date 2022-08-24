import { deleted } from "../actions";

const deleteTodo = (todoId) => {
    return async (dispatch) => {
        await fetch(`https://sleepy-refuge-75797.herokuapp.com/api/todos/${todoId}`, {
            method: "DELETE",
        });

        dispatch(deleted(todoId));
    };
};

export default deleteTodo;
