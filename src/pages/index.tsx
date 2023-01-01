import { Header, Layout } from "components/@module";
import { AuthPopover } from "components/Auth";
import React from "react";

function HomePage() {
  return (
    <Layout>
      <Header />
      <AuthPopover />
    </Layout>
  );
}

export default HomePage;
