import type { authlib } from './auth';

export interface Bindings {
  user: typeof authlib.$Infer.Session.user | null;
  session: typeof authlib.$Infer.Session.session | null;
}
