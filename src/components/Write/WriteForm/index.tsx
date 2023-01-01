import { useQueryClient } from "@tanstack/react-query";
import { writeTodo } from "apis/todos";
import { Button } from "components/@base";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

function WriteForm() {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");
  const { data } = useSession();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content || !data) return;

    await writeTodo({ userId: data.user.id, content });
    queryClient.invalidateQueries(["todos"]);
    setContent("");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <TextareaAutosize
        placeholder="목표를 작성하고 공유하세요!"
        value={content}
        onChange={onChange}
        minRows={3}
        className="p-4 resize-none rounded-xl border border-gray-300 outline-none placeholder:text-gray-300"
      />
      <Button type="submit">완료했어!</Button>
    </form>
  );
}

export default WriteForm;
