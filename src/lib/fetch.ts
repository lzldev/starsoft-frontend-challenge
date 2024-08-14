import { ZodSchema } from "zod";
import { API_URL } from "./constants";

export const zFetch = <TSchema extends ZodSchema>(
  url: string,
  schema: TSchema,
  options: Parameters<typeof fetch>[1] = {}
) =>
  fetch(API_URL + url, options)
    .then((r) => {
      if (r.status < 200 || r.status > 299) {
        throw r.json();
      }
      return r.json();
    })
    .then((value) => schema.parseAsync(value));
