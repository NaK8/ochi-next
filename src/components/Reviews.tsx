"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import { ReviewsData } from "./reviews/data";

function Reviews() {
  const firstReviewId = ReviewsData[0].id;
  const [expanded, setExpanded] = useState<false | number>(firstReviewId);
  const lastId = ReviewsData.at(-1)?.id;
  return (
    <section className="w-full">
      <h3 className="mx-8 py-8 font-neue text-4xl font-light tracking-tight md:mx-12 md:text-6xl">
        Client&apos;s reviews
      </h3>
      {ReviewsData.map((Rev) => (
        <Accordion
          key={Rev.id}
          i={Rev.id}
          company={Rev.companyName}
          image={Rev.image}
          message={Rev.message}
          person={Rev.personName}
          services={Rev.services}
          expanded={expanded}
          setExpanded={setExpanded}
          lastId={lastId}
        />
      ))}
    </section>
  );
}

export default Reviews;
