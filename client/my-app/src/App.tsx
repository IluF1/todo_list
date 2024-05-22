import { observer } from "mobx-react-lite";
import "./assets/styles/App.css";
import { MdCreate } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import todoStore from "./components/stores/todo-store";
import CreateTask from "./pages/create_task/create_task";
import { AiOutlineCheck } from "react-icons/ai";

const App = observer(() => {
  return (
    <div className="container">
      <ul className="list">
        {todoStore.todo.todos.map((task) => (
          <li className="element" key={task.id}>
            <div className="title_block">
              <h1 className="title">{task.title}</h1>
            </div>
            <div className="description_block">
              <p className="description">{task.description}</p>
            </div>
            <ul className="buttons_list">
              <li className="elem_one">
                <button>
                  <MdCreate className="img_one" />
                </button>
              </li>
              <li className="elem_two">
                <button onClick={() => todoStore.removeTodo(task.id)}>
                  <AiFillDelete className="img_two" />
                </button>
              </li>
              <li className="elem_three">
                <button
                  onClick={() =>
                    todoStore.completedTodo(
                      task.title,
                      task.description,
                      task.id
                    )
                  }
                >
                  <AiOutlineCheck className="img_three" />
                </button>
              </li>
            </ul>
          </li>
        ))}
      </ul>

      <CreateTask />

      <ul className="completed_list">
        {todoStore.todo.completedTodos.map((task) => (
          <li key={task.id} className="completed_element">
            <h1 className="completed_title">{task.title}</h1>
            <p className="completed_description">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default App;
