"use client";
import Link from "next/link";
import React from "react";

const WorkCards = () => {
  const cards = [
    {
   
      image:
        "/images/atlas.webp",
      text: "Atlas",
      stack: ["Shopify","ecommerces"],
      url:'https://atlasbars.com/'
    },
    {
      
      image:
        "/images/hostgenius.webp",
      text: "Hostgenius",
      stack: ["webflow"],
      url:'https://hostgenius-063f3c.webflow.io/'
    },
    {
   
      image:
        "/images/furniture.webp",
      text: "Furniture Labels",
      stack: ["Wordpress","WooCommerce"],
      url:'https://thefurniturelabels.com/'
    },
    {

      image:
        "/images/bassmedi.webp",
      text: "BASS Medical Group",
      stack: ["Webflow"],
      url:'https://bass-medical-group.webflow.io/'
    },
    {
  
      image:
        "/images/unibuddy.webp",
      text: "Unibuddy",
      stack: ["Reactjs"],
      url:'https://unibuddy.com/'
    },
    {

      image:
        "/images/bankrate.webp",
      text: "Bankrate",
      stack: ["Nextjs"],
      url:'https://www.bankrate.com/'
    },
    {

      image:
        "/images/Estatemate.webp",
      text: "Estatemate",
      stack: ["Reactjs"],
      url:'https://www.estatemate.co.za/'
    },
    {

      image:
        "/images/Wildjar.webp",
      text: "Wildjar",
      stack: ["Webflow"],
      url:'https://www.wildjar.com/'
    },
    {

      image:
        "/images/livwell.webp",
      text: "Livwell",
      stack: ["Wordpress"],
      url:'https://www.livwell.vn/'
    },
  ];


  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 md:gap-y-15 mx-auto mt-4 md:mt-8">
      {cards.map((card) => (
        <Link
          href={card.url}
          target="_blank"
          key={card.text}
          className="relative block group"
        >
          <h3 className="flex text-white items-center gap-1.5 pl-2 text-lg mb-1.5">
            <span className="size-3 rounded-full inline-block bg-white"></span>
            {card.text}
          </h3>
          <div className="w-full border border-dashed border-[var(--color-purple)] h-[350px] relative duration-700 rounded overflow-hidden">
            <img
              width={663}
              height={551}
              className="w-full h-full group-active:object-bottom group-hover:object-bottom object-cover object-top duration-1000"
              src={card.image}
              alt={card.text}
            />
          </div>
          <div className="flex items-center gap-2 mt-3">
            {card.stack.map((st) => (
              <span
                key={st}
                className="border bg-white uppercase border-dashed px-3 py-0.5 text-base border-[var(--color-purple)] font-medium text-[var(--color-purple)]"
              >
                {st}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WorkCards;
