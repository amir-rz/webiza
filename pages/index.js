import { Page, Text, Spacer } from "@geist-ui/react";
import Intro from "@/components/Intro";
import Navbar from "@/components/Theme/Navbar/Navbar";

export default function Home() {
  return (
    <Page dotBackdrop size="large" render="effect-seo">
      <Page.Header>
        <Navbar />
      </Page.Header>
      <Page.Content style={{ padding: 0 }}>
        <Intro />
      </Page.Content>
    </Page>
  );
}
