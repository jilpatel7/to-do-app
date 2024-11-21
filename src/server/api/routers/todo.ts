import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const todoRouter = createTRPCRouter({
  getTodos: publicProcedure
    .input(z.object({ user_id: z.number() }))
    .query(({ input }) => {
      console.log(input.user_id);

      return [];
    }),
});
