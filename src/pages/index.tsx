import { Header, Layout } from "components/@module";
import { TodoList } from "components/Todo";
import { WriteForm } from "components/Write";
import React from "react";

function HomePage() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col gap-8 p-4">
        <WriteForm />
        <TodoList />
      </main>
    </Layout>
  );
}

export default HomePage;
