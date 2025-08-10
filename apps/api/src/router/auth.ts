import { user } from '@repo/db/src/schema';
import { authed, pub } from '../orpc';

export const signup = pub.auth.signup.handler(
  async ({ input: _input, context }) => {
    // Insert new user and get the result using database from context
    const [newUser] = await context.DB.insert(user)
      .values({
        ..._input,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    // Ensure we got a user back (should never be undefined with returning())
    if (!newUser) {
      throw new Error('Failed to create user');
    }

    // Return the single user object (destructured from array)
    return newUser;
  }
);

export const signin = pub.auth.signin.handler(({ input: _input }) => {
  // Use the actual input for validation but return the expected token schema
  // TODO: Implement actual authentication logic here
  return { token: 'token' };
});

export const me = authed.auth.me.handler(({ context }) => {
  // Ensure context.user matches UserSchema format
  if (!context.user) {
    throw new Error('User not found in context');
  }

  return {
    ...context.user,
    image: context.user.image ?? null, // Ensure image is properly typed
  };
});
