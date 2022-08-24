import { Provider } from "react-redux";
import CompletedFooter from "./components/CompletedFooter";
import CompletedHeader from "./components/CompletedHeader";
import CompletedTodoList from "./components/CompletedTodoList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="container mx-auto">
                <div className="grid place-items-center bg-blue-100 pb-2 px-6 font-sans mt-14">
                    <Navbar />

                    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                        <Header />

                        <hr className="mt-4" />

                        <TodoList />

                        <hr className="mt-4" />

                        <Footer />
                    </div>
                </div>

                <div className="grid place-items-center bg-blue-100 px-6 pb-5 font-sans">
                    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                        <CompletedHeader />

                        <hr className="mt-4" />

                        <CompletedTodoList />

                        <hr className="mt-4" />

                        <CompletedFooter />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
