import React from "react";
import FeaturedCard from "./FeaturedCard";
import Button from "./Button";

function Featured() {
  return (
    <section className="w-full py-8">
      <div className="px-8 md:px-12">
        <h3 className="py-8 font-neue text-4xl font-light md:py-12 md:text-6xl">
          Featured Projects
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-10 border-t border-zinc-500 p-8 md:grid-cols-2 md:gap-4 md:px-12">
        <FeaturedCard
          Name="FYDE"
          Img="/one.webp"
          Alt="first Image"
          Place="left"
          Labels={["Audit", "Copywriting", "Sales Deck", "Slides Design"]}
        />
        <FeaturedCard
          Name="VISE"
          Img="/two.webp"
          Alt="second Image"
          Place="right"
          Labels={["Agency", "company presentation"]}
        />
        <FeaturedCard
          Name="TARWA"
          Img="/three.webp"
          Alt="third Image"
          Place="left"
          Labels={["Brand Identity", "Design Research", "Investor Deck"]}
        />
        <FeaturedCard
          Name="PREMIUM BLEND"
          Img="/four.webp"
          Alt="four Image"
          Place="right"
          Labels={["Branded Template"]}
        />
      </div>
      <div className="mt-8 text-center">
        <Button variant="primary">VIEW ALL CASE STUDIES</Button>
      </div>
    </section>
  );
}

export default Featured;
