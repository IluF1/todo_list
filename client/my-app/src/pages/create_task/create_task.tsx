import { Button } from "../../components/ui/button/button";
import { Input } from "../../components/ui/input/input";
import styles from "./create_task.module.css";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import todoStore from "../../components/stores/todo-store";

const CreateTask = observer(() => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const descriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    todoStore.addTodo(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="Введите название задачи"
          style="default"
          value={title}
          onChange={titleChange}
        />
        <Input
          name="description"
          placeholder="Введите описание задачи"
          value={description}
          onChange={descriptionChange}
          style="description"
        />
        <Button style="default" center={true}>
          Создать
        </Button>
      </form>
    </div>
  );
});

export default CreateTask;
