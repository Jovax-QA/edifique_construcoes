import { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const createRouter = () => {
  const queryClient = new QueryClient();

  const router = createTanStackRouter({
    routeTree,

    context: { queryClient },

    scrollRestoration: true,

    defaultPreloadStaleTime: 0,

  });



  return router;

};

// TanStack Start também espera este export em alguns pontos internos do client entry
export { createRouter as getRouter };
