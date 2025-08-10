import { me, signin, signup } from './auth';
import { deleteTodo, getTodo, listTodos, newTodo, updateTodo } from './todo';

export const contract = {
  auth: {
    signup,
    signin,
    me,
  },
  todos: {
    list: listTodos,
    create: newTodo,
    get: getTodo,
    update: updateTodo,
    delete: deleteTodo,
  },
};
