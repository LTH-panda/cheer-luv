import { useQueryClient } from "@tanstack/react-query";
import { removeTodo } from "apis/todos";
import { useSession } from "next-auth/react";
import React, { useCallback } from "react";

type Props = {
  todoId: number;
};

function TodoOwnActions({ todoId }: Props) {
  const { data } = useSession();
  const queryClient = useQueryClient();

  const onClickRemove = useCallback(async () => {
    if (!data) return;
    await removeTodo({ userId: data.user.id, todoId });
    queryClient.invalidateQueries(["todos"]);
  }, [data]);

  return (
    <div className="text-gray-300 flex justify-center items-center text-sm">
      <button type="button" onClick={onClickRemove}>
        삭제
      </button>
    </div>
  );
}

export default TodoOwnActions;
