import { Header, Layout } from "components/@module";
import { AuthPopover } from "components/Auth";
import { WriteForm } from "components/Write";
import React from "react";

function HomePage() {
  return (
    <Layout>
      <Header />
      <main className="p-4">
        <WriteForm />
        <AuthPopover />
      </main>
    </Layout>
  );
}

export default HomePage;
