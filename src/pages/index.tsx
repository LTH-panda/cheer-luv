import { Header, Layout } from "components/@module";
import { AuthPopover } from "components/Auth";
import { TodoList } from "components/Todo";
import { WriteForm } from "components/Write";
import React from "react";

function HomePage() {
  return (
    <Layout>
      <Header />
      <main className="p-4 flex flex-col gap-8">
        <WriteForm />
        <TodoList />
        <AuthPopover />
      </main>
    </Layout>
  );
}

export default HomePage;
