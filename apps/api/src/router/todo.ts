import { ORPCError } from '@orpc/server';
import { authed, pub } from '../orpc';

// List todos - accessible to anyone
export const listTodos = pub.todos.list.handler(
  ({ input, context: _context }) => {
    // TODO: Implement actual database query with pagination
    // For now, return empty array to match contract
    const { limit: _limit, cursor: _cursor } = input;

    // Example implementation:
    // const todos = await context.DB.select()
    //   .from(schema.todos)
    //   .limit(limit)
    //   .offset(cursor);

    return [];
  }
);

// Create todo - requires authentication
export const createTodo = authed.todos.create.handler(
  ({ input, context: _context }) => {
    // TODO: Implement actual database insertion
    // For now, return mock data that matches schema

    const now = new Date();
    const mockTodo = {
      id: 'mock-todo-id',
      title: input.title,
      description: input.description || '',
      status: input.status || ('pending' as const),
      userId: input.userId,
      createdAt: now,
      updatedAt: now,
    };

    // Example implementation:
    // const [todo] = await context.DB.insert(schema.todos)
    //   .values({
    //     title: input.title,
    //     description: input.description,
    //     status: input.status || 'pending',
    //     userId: context.user.id,
    //   })
    //   .returning();

    return mockTodo;
  }
);

// Get single todo - requires authentication
export const getTodo = authed.todos.get.handler(({ input, context }) => {
  // TODO: Implement actual database query
  // For now, return mock data or throw not found

  const { id } = input;

  // Example implementation:
  // const todo = await context.DB.select()
  //   .from(schema.todos)
  //   .where(eq(schema.todos.id, id))
  //   .limit(1);
  //
  // if (!todo.length) {
  //   throw new ORPCError({ code: 'NOT_FOUND' });
  // }

  // Mock response
  if (id === 'nonexistent') {
    throw new ORPCError('NOT_FOUND');
  }

  const now = new Date();
  return {
    id,
    title: 'Mock Todo',
    description: 'Mock description',
    status: 'pending' as const,
    userId: context.user.id,
    createdAt: now,
    updatedAt: now,
  };
});

// Update todo - requires authentication
export const updateTodo = authed.todos.update.handler(({ input, context }) => {
  // TODO: Implement actual database update

  const { id, ...updateFields } = input;

  // Example implementation:
  // const [todo] = await context.DB.update(schema.todos)
  //   .set({
  //     ...updateFields,
  //     updatedAt: new Date(),
  //   })
  //   .where(eq(schema.todos.id, id))
  //   .returning();
  //
  // if (!todo) {
  //   throw new ORPCError({ code: 'NOT_FOUND' });
  // }

  // Mock response
  if (id === 'nonexistent') {
    throw new ORPCError('NOT_FOUND');
  }

  const now = new Date();
  const dayInMs = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  return {
    id,
    title: updateFields.title || 'Updated Todo',
    description: updateFields.description ?? null,
    status: updateFields.status || ('pending' as const),
    userId: context.user.id,
    createdAt: new Date(Date.now() - dayInMs), // Yesterday
    updatedAt: now,
  };
});

// Delete todo - requires authentication
export const deleteTodo = authed.todos.delete.handler(
  ({ input, context: _context }) => {
    // TODO: Implement actual database deletion

    const { id } = input;

    // Example implementation:
    // const result = await context.DB.delete(schema.todos)
    //   .where(eq(schema.todos.id, id))
    //   .returning({ id: schema.todos.id });
    //
    // if (!result.length) {
    //   throw new ORPCError({ code: 'NOT_FOUND' });
    // }

    // Mock response
    if (id === 'nonexistent') {
      throw new ORPCError('NOT_FOUND');
    }

    return true;
  }
);
