import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.number(),
  createdAt: z.string(),
});

export type Product = z.output<typeof ProductSchema>;
