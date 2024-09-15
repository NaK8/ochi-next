import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type AccordianTypes = {
  i: number;
  expanded: number | boolean;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
  company: string;
  person: string;
  image: string;
  services: string[];
  message: string;
  lastId: number | undefined;
};

const Accordion = ({
  i,
  expanded,
  setExpanded,
  company,
  image,
  message,
  person,
  services,
  lastId,
}: AccordianTypes) => {
  const isOpen = i === expanded;
  return (
    <div
      className={`border-t border-zinc-400 py-3 font-neue ${lastId === i ? "border-b" : ""}`}
    >
      <div className="mx-8 md:mx-12">
        <motion.header
          initial={false}
          className="grid w-full grid-cols-12 gap-x-0 md:gap-x-10"
        >
          <div className="col-span-6 lg:col-span-3">
            <span className="link-underline link-underline-black">
              {company}
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isOpen ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-6 hidden md:block lg:col-span-3"
          >
            <span>Services</span>
          </motion.div>
          <div className="col-span-6 hidden md:block lg:col-span-3">
            <span>{person}</span>
          </div>
          <div className="col-span-6 text-right lg:col-span-3">
            <button
              className={`${isOpen ? "opacity-30" : "link-underline link-underline-black"} cursor-pointer`}
              onClick={() => setExpanded(isOpen ? false : i)}
            >
              READ
            </button>
          </div>
        </motion.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <motion.div
                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                transition={{ duration: 0.8 }}
                className="grid h-auto w-full grid-cols-1 gap-y-8 md:grid-cols-[25%_25%_50%] md:gap-y-0 md:pb-10"
              >
                <div></div>
                <div className="md:pl-2 md:pt-8">
                  <h3 className="md:hidden">Services:</h3>
                  <div className="flex flex-wrap gap-x-2 md:block md:gap-x-0">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="about-start my-3 flex gap-x-1 text-sm"
                      >
                        <button className="about-btn rounded-full border border-zinc-800 px-2 py-[2px]">
                          {service}
                        </button>
                        <span className="about-btn-icon flex size-7 items-center justify-center rounded-full border border-zinc-800">
                          <ArrowUpRight strokeWidth={1} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:pl-4 md:pt-8">
                  <h3 className="md:hidden">{person}</h3>
                  <Image
                    className="my-4 rounded-lg"
                    src={image}
                    height={100}
                    width={100}
                    alt={`${company}&apos;s review`}
                  />
                  <p className="md:w-3/4">{message}</p>
                </div>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;
