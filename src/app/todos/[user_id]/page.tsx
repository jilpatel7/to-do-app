import { api } from "~/trpc/react";

export default function page({ params }: { params: { user_id: number } }) {
  const user_id = params.user_id;
  const todos = api.todo.getTodos.useQuery({ user_id: user_id });

  console.log("todos", todos);

  return <>{user_id}</>;
}
