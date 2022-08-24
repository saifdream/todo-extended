import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import CompletedTodo from "./CompletedTodo";

export default function CompletedTodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch]);

    const filterByComleted = (todo) => todo.completed;

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(filterByComleted)
                .map((todo) => (
                    <CompletedTodo todo={todo} key={todo.id} />
                ))}
        </div>
    );
}
