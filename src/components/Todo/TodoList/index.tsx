import { useInfiniteQuery } from "@tanstack/react-query";
import { getTodos } from "apis/todos";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TodoCard from "../TodoCard";

function TodoList() {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["todos"],
    ({ pageParam }) => getTodos(pageParam),
    {
      getNextPageParam: (last) => {
        if (!last.pageInfo.hasNextPage) return undefined;
        return last.pageInfo.endCursor;
      },
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView]);

  const todos = data?.pages.flatMap((P) => P.data);

  if (!todos) return null;

  return (
    <>
      <div className="flex flex-col gap-2">
        {todos.map((T) => (
          <TodoCard
            id={T.id}
            author={T.author.nickname}
            date={T.createdAt}
            content={T.content}
            likeCount={T.liked}
            key={T.id}
          />
        ))}
      </div>
      <div ref={ref} />
    </>
  );
}

export default TodoList;
