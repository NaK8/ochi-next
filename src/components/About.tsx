import React from "react";
import Image from "next/image";
import Button from "./Button";
import HoverLinks from "./HoverLink";

function About() {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.05"
      className="rounded-t-3xl bg-ochiGreen py-8"
    >
      <div className="mb-12 px-8 pt-20 md:px-12">
        <p className="font-neue text-2xl leading-tight md:text-[3.5vw]">
          Ochi is a strategic partner for fast-growing businesses that needs to{" "}
          <span className="link-underline link-underline-black">
            raise funds
          </span>
          ,{" "}
          <span className="link-underline link-underline-black">
            sell products
          </span>
          ,{" "}
          <span className="link-underline link-underline-black">
            explain complex ideas
          </span>
          , and{" "}
          <span className="link-underline link-underline-black">
            hire great people
          </span>
        </p>
      </div>
      <div className="mb-12 grid w-full grid-cols-1 gap-y-4 border-t border-[#a1b562] px-8 py-4 font-neue md:grid-cols-[50%_25%_25%] md:gap-y-0 md:px-20">
        <div>
          <p>what you can expact</p>
        </div>
        <div>
          <p className="pb-8">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it&apos;s live or
            digital, delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="flex items-end justify-start md:justify-center">
          <HoverLinks
            items={["Instagram", "Behance", "Facebook", "Linkedin"]}
            color="black"
            heading="S:"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-5 border-t border-[#a1b562] px-8 py-4 md:grid-cols-2 md:gap-y-0 md:px-12">
        <div>
          <h3 className="pb-4 font-neue text-4xl font-medium md:text-5xl">
            Our approach:
          </h3>
          <Button variant="primary">Read More</Button>
        </div>
        <div>
          <Image
            src={"/approach.webp"}
            alt=""
            height={480}
            className="rounded-lg"
            width={600}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
