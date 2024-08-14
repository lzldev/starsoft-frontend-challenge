import { z } from "zod";
import { ProductSchema } from "./products";

export const PaginationMetadataSchema = z.object({
  page: z.number(),
  limit: z.number(),
  count: z.number(),
  pageCount: z.number(),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
});

export type PaginationMetadata = z.output<typeof PaginationMetadataSchema>;

export const GetProductsSchema = z.object({
  data: z.array(ProductSchema),
  metadata: PaginationMetadataSchema,
});
export type GetProducts = z.output<typeof GetProductsSchema>;
