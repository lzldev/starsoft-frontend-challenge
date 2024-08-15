import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export function useFakeMutation(
  ms: number,
  options?: Omit<UseMutationOptions, "mutationFn">
) {
  return useMutation({
    mutationFn: () =>
      new Promise((res) => {
        setTimeout(() => {
          res(true);
        }, ms);
      }),
    ...options,
  });
}
