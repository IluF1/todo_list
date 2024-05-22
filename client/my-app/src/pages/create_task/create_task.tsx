import { Button } from "../../components/ui/button/button";
import { Input } from "../../components/ui/input/input";
import styles from "./create_task.module.css";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import todoStore from "../../components/stores/todo-store";
import { useValidation } from "../../utils/hooks/useValidation";

const CreateTask = observer(() => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {
    titleV,
    titleChangeV,
    titleLength,
    descriptionV,
    descriptionChangeV,
    descriptionLength,
    blockBtn,
  } = useValidation();

  const titleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    titleChangeV(event);
  };

  const descriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    descriptionChangeV(event);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!blockBtn) {
      todoStore.addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="Введите название задачи"
          style="default"
          value={titleV}
          onChange={titleChange}
          length={20}
        />
        <p className={styles.counterLength}>{titleLength}/20</p>

        <Input
          name="description"
          placeholder="Введите описание задачи"
          value={descriptionV}
          onChange={descriptionChange}
          style="description"
          length={200}
        />
        <p className={styles.counterLength}>{descriptionLength}/200</p>

        <Button style="default" center={true} disabled={blockBtn}>
          Создать
        </Button>
      </form>
    </div>
  );
});

export default CreateTask;
