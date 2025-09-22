import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanstackRouter } from "@tanstack/react-router";
import { queryClient } from "@/clients/queryClient";
import { env } from "@/env";
import Spinner from "@/routes/-components/common/spinner";
import { routeTree } from "@/routeTree.gen";

export function createRouter() {
  const router = createTanstackRouter({
    routeTree,
    basepath: env.PUBLIC_BASE_PATH,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPendingComponent: () => <Spinner />,
    Wrap({ children }) {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    },
  });
  return router;
}

declare module "@tanstack/react-router" {
  // biome-ignore lint/nursery/useConsistentTypeDefinitions: <explanation>
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
