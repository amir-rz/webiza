import { Page } from "@geist-ui/react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services";
import Head from "next/head";
import { Fragment } from "react-is";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Webiza - Web World Solution</title>
      </Head>
      <div className="max-w-1920 w-full mx-auto flex flex-col items-center justify-center">
        <Navbar />

        <Hero />
        <Services />
        <Contact />
      </div>
    </Fragment>
  );
}
