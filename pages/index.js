import { Page } from "@geist-ui/react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <Page dotBackdrop size="large" render="effect-seo">
      <Page.Header>
        <Navbar />
      </Page.Header>
      <Page.Content style={{ padding: 0 }}>
        <Hero />
        <Services />
      </Page.Content>
    </Page>
  );
}
