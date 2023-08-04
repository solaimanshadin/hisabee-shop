import { QueryClient } from '@tanstack/react-query';

function createQueryClient() {
    return new QueryClient();
  }

  export const queryClient = createQueryClient()
  export default createQueryClient

//   {
//     defaultOptions: {
//       queries: {
//         staleTime: 10 * 60 * 1000,
//         retry: false,
//         refetchOnWindowFocus: false,
//       },
//     },
//     queryCache: new QueryCache(),
//     mutationCache: new MutationCache(),
//   }