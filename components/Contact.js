import React from "react";
import { Text, Button } from "@geist-ui/react";

const Contact = () => {
  return (
    <div
      className="max-h-1000 w-screen h-screen max-w-full flex flex-col justify-center items-center"
      id="contact-section">
      <Text h2 className="text-center">
        Let's talk about your project
      </Text>
      <Text p className="text-center">
        Book a free 30-minute consultation <br /> and get started
      </Text>
      <Button type="secondary-light" className="mt-5">
        Book now
      </Button>
    </div>
  );
};

export default Contact;
