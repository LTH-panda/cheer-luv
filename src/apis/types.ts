export type GetTodosResult = {
  data: Todo[];
  pageInfo: {
    endCursor: number | null;
    hasNextPage: boolean;
  };
};

export type Todo = {
  author: {
    userId: string;
    nickname: string;
  };
  id: number;
  content: string;
  liked: number;
  createdAt: Date;
};
