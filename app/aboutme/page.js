import React from "react";
import PageHeading from "../Components/PageHeading";

const page = () => {
  const sections = [
    {
      title: "Frontend Development Perfection",
      paragraphs: [
        <>
          I have <span className="font-bold">10 years of experience</span> in frontend development, I specialize in creating visually stunning yet highly functional web interfaces. My strengths span a wide range of technologies like <span className="font-bold">JavaScript, React, WordPress, WooCommerce, Shopify, Wix, and Tailwind CSS</span>. My passion basically revolves around developing websites that are user-friendly and performance-driven rather than just looking good.
        </>,
        <>
          A meticulous approach comes into my work for frontend development, whether creating custom themes and plugins, enhancements regarding performance, or accessibility of websites. It applies the same even if the project is that I'm working on right now--improving on an existing site or creating one right from scratch- keeping in mind the industry's best practice and standards.
        </>,
      ],
    },
    {
      title: "Tailored Solutions over Platforms",
      paragraphs: [
        <>
          It is not only the custom frontend development that I'm good at. I have spent a good amount of time with <span className="font-bold">CMS platforms such as WordPress, Shopify, Wix, and Squarespace</span>, making modifications in building solutions along the business lines for the organizations. Building a custom eCommerce store, conversions centric website enhancements, API integration with third parties, are just some of the things that I do to innovate high-performance solutions.
        </>,
        <>
          Having a good hold on <span className="font-bold">SEO best practices, responsive designs, and modern UI/UX principles</span>, I deliver the digital world experience driving engagement and success. I utilize it for a small business site or a large-scale web application that maintains emphasis on clean code, scalability, and long-term maintainability.
        </>,
      ],
    },
    {
      title: "Delivering Innovation & Excellence",
      paragraphs: [
        <>
          Over a decade now, I have developed a successful portfolios of over a <span className="font-bold">hundred projects</span> across diverse industries, including finance, eCommerce, health, and education. I savor solving the most complex technical challenges to push forward what's possible in web development today through modern technologies.
        </>,
        <>
          Excellence, adaptability, and learning define my personality, and all these make sure that everything I do is of the highest quality. Regular updates on trends and technology changes help provide cutting-edge solutions that enhance digital experience and will be a real difference creator.
        </>,
      ],
    },
  ];
  

  return (
    <main className="w-full h-full bg-[var(--bgcolor)] pt-20 md:pt-15">
      <PageHeading text="The Story Behind Roji" />
      <div className="bg-[var(--coloroff-white)] w-full h-full mt-15 px-5 md:px-8 rounded-t-2xl md:rounded-t-4xl pt-10 pb-10 md:pb-30">
        {sections.map((section, index) => (
          <section key={index} className={`${index === 0 ? "mt-0" : "mt-10"}`}>
            <h3
              className={`text-lg md:text-2xl font-bold ${
                index === 0 ? "mt-0" : "mt-5"
              }`}
            >
              {section.title}
            </h3>
            {section.paragraphs.map((para, i) => (
              <div key={i} className="text-sm md:text-base mt-3">
                {para}
              </div>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
};

export default page;