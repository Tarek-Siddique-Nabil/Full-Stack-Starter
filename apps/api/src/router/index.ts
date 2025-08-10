import { pub } from '../orpc';
import { me, signin, signup } from './auth';
import { createTodo, deleteTodo, getTodo, listTodos, updateTodo } from './todo';

// Following ORPC contract-first best practices
// Build the router that implements the contract
export const router = pub.router({
  auth: {
    signup,
    signin,
    me,
  },
  todos: {
    list: listTodos,
    create: createTodo,
    get: getTodo,
    update: updateTodo,
    delete: deleteTodo,
  },
});

export type AppRouter = typeof router;
