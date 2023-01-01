import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cheerTodo } from "apis/todos";
import colors from "common/styles/colors";
import { SvgIcon } from "components/@base";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {
  todoId: number;
};

function TodoCheerButton({ todoId }: Props) {
  const queryClient = useQueryClient();
  const { data } = useSession();
  const { mutate: cheer } = useMutation(cheerTodo, {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  const onClick = async () => {
    if (!data) return;
    cheer({ userId: data.user.id, todoId });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-primary flex items-center text-white py-2 px-4 rounded-xl gap-1"
    >
      <SvgIcon name="heart" color={colors.white} />
      Cheer!
    </button>
  );
}

export default TodoCheerButton;
