// "use client";
// import React from "react";
// import { api } from "~/trpc/react";

// export default function Page({
//   params,
// }: {
//   params: Promise<{ user_id: string }>;
// }) {
//   const { user_id } = React.use(params); // Unwrap params with React.use()
//   const userId = Number(user_id); // Convert to number if necessary

//   console.log("user_id", userId);

//   const todos = api.post.hello.useQuery({ text: "Jp" });

//   console.log("todos", todos);

//   return <>{userId}</>;
// }

// -------------------------------------------------------------------------------------------------------------------------

// "use client";

// import { api } from "~/trpc/react";
// import React from "react";

// export default function Page({
//   params,
// }: {
//   params: Promise<{ user_id: string }>;
// }) {
//   const user_id = React.use(params).user_id;
//   const todos = api.post.hello.useQuery({ text: user_id });

//   console.log("todos", todos);
//   return <div>My Post: {todos.data?.greeting}</div>;
// }

// -------------------------------------------------------------------------------------------------------------------------

export default async function Page({
  params,
}: {
  params: Promise<{ user_id: string }>;
}) {
  const user_id = (await params).user_id;
  return <div>My Post: {user_id}</div>;
}
