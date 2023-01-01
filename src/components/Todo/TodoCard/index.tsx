import colors from "common/styles/colors";
import { SvgIcon } from "components/@base";
import React from "react";
import formatDate from "utils/formatDate";

type Props = {
  id: number;
  author: string;
  date: Date;
  content: string;
  likeCount: number;
};

function TodoCard({ id, author, date, content, likeCount }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-xl p-4 border border-gray-300 bg-white justify-between">
      <div className="flex items-center text-sm gap-1">
        <span>{author}</span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-300">{formatDate(date)}</span>
      </div>
      <div className="flex-1">{content}</div>
      <div className="flex items-center gap-1 text-gray-400">
        <SvgIcon name="heart" size={16} color={colors.gray[400]} />
        {likeCount}
      </div>
    </div>
  );
}

export default TodoCard;
