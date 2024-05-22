import { makeAutoObservable, action, observable } from "mobx";

interface ITodo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

class Todo {
  todos: ITodo[] = [];
  completedTodos: ITodo[] = []

  constructor() {
    makeAutoObservable(this, {
      completedTodos: observable,
      todos: observable,
      addTodo: action,
      removeTodo: action,
    });
  }

  addTodo = (title: string, description: string) => {
    this.todos.push({
      title,
      description,
      id: Math.random(),
      completed: false,
    });
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  completedTodo = (title: string, description: string, id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.completedTodos.push({
      title,
      description,
      id: Math.random(),
      completed: true
    })
  }
  
  notCompletedTask = (title: string, description: string, id: number) => {
    this.completedTodos = this.completedTodos.filter((todo) => todo.id !== id);
    this.todos.push({
      title,
      description,
      id: Math.random(),
      completed: true
    })
  }
}

class TodoStore {
  todo: Todo;

  constructor() {
    this.todo = new Todo();
    makeAutoObservable(this, {
      todo: observable,
      addTodo: action,
      removeTodo: action,
    });
  }

  addTodo = (title: string, description: string) => {
    this.todo.addTodo(title, description);

  };

  removeTodo = (id: number) => {
    this.todo.removeTodo(id);
  };

  completedTodo = (title: string, description: string, id: number) => {
    this.todo.completedTodo(title, description, id)
  }

  notCompletedTodo = (title: string, description: string, id: number) => {
    this.todo.notCompletedTask(title, description, id)
  }
}

const todoStore = new TodoStore();

export default todoStore;

