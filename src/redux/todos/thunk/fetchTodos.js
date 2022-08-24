import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
    const response = await fetch(`https://sleepy-refuge-75797.herokuapp.com/api/todos`);
    const todos = await response.json();

    dispatch(loaded(todos));
};

export default fetchTodos;
