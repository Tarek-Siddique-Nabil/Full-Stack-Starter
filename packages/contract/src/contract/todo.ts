import { oc } from '@orpc/contract';
import z from 'zod';
import {
  DeleteTodoSchema,
  NewTodoSchema,
  TodoSchema,
  UpdateTodoSchema,
} from '../validation';

export const listTodos = oc
  .route({
    method: 'GET',
    path: '/todos',
    summary: 'List all todos',
    tags: ['Todos'],
  })
  .input(
    z.object({
      limit: z.number().int().min(1).max(100).default(10),
      cursor: z.number().int().min(0).default(0),
    })
  )
  .output(z.array(TodoSchema));

export const newTodo = oc
  .route({
    method: 'POST',
    path: '/todos',
    summary: 'Create a new todo',
    tags: ['Todos'],
  })
  .input(NewTodoSchema)
  .output(TodoSchema);

export const getTodo = oc
  .route({
    method: 'GET',
    path: '/todos/:id',
    summary: 'Get a todo by ID',
    tags: ['Todos'],
  })
  .input(
    z.object({
      id: z.string(), // Remove uuid() requirement as DB uses text() primary key
    })
  )
  .output(TodoSchema);

export const updateTodo = oc
  .route({
    method: 'PUT',
    path: '/todos/:id',
    summary: 'Update a todo by ID',
    tags: ['Todos'],
  })
  .errors({
    NOT_FOUND: {
      message: 'Todo not found',
      data: z.object({ id: z.string() }), // Fix: use z.string() instead of UpdateTodoSchema.shape.userId
    },
  })
  .input(UpdateTodoSchema)
  .output(TodoSchema);

export const deleteTodo = oc
  .route({
    method: 'DELETE',
    path: '/todos/:id',
    summary: 'Delete a todo by ID',
    tags: ['Todos'],
  })
  .errors({
    NOT_FOUND: {
      message: 'Todo not found',
      data: z.object({ id: DeleteTodoSchema.shape.id }),
    },
  })
  .input(DeleteTodoSchema)
  .output(z.boolean());
