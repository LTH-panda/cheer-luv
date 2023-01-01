import { Button } from "components/@base";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

function WriteForm() {
  const [content, setContent] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content) return;
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
      <Button>완료했어!</Button>
    </form>
  );
}

export default WriteForm;
