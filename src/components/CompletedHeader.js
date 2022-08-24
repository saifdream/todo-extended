import { useState } from "react";
import { useDispatch } from "react-redux";
import checkMarkImage from "../assets/images/check-mark.png";
import { allCompleted, clearCompleted } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

export default function CompletedHeader() {
    return (
        <div>
            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                    className="flex space-x-1"
                >
                    <img className="w-5 h-5 ml-2 mr-5" src={checkMarkImage} alt="Complete" />
                    <span className="ml-2">Completed Tasks</span>
                </li>
            </ul>
        </div>
    );
}
