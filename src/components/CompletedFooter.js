import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return "No task";
        case 1:
            return "1 task";
        default:
            return `${no_of_todos} tasks`;
    }
};

export default function CompletedFooter() {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);

    const dispatch = useDispatch();
    const todosRemaining = todos.filter((todo) => todo.completed).length;
    const { status, colors } = filters;

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status));
    };

    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged(color, "removed"));
        } else {
            dispatch(colorChanged(color, "added"));
        }
    };

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemaining)} completed</p>
        </div>
    );
}
