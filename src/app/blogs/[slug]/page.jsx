import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const id = (await params).slug;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const { title, body } = await res.json();

  // const { title, body } =  blogs.find((blog) => blog.id === slug);
  return (
    <div className="p-8">
      <h1 className="text-5xl">{title}</h1>
      <h5 className="text-xl">{body}</h5>
      <button className="bg-green-400 px-6 py-2">Click special</button>
    </div>
  );
};

const blogs = [
  {
    slug: "mastering-excel-tips",
    title: "Mastering Excel: Tips for Becoming More Efficient",
    description:
      "Discover essential Excel tips and tricks to enhance your productivity and elevate your spreadsheet skills.",
  },
  {
    slug: "natural-products-business",
    title: "Starting a Natural Products Business in Bangladesh",
    description:
      "A comprehensive guide to building a sustainable business focused on natural products in Bangladesh.",
  },
  {
    slug: "create-content-facebook-youtube",
    title: "How to Create High-CPM Content for Facebook and YouTube",
    description:
      "Learn strategies for creating video content that attracts high CPM and engages your audience effectively.",
  },
  {
    slug: "react-native-project-ideas",
    title: "Top React Native Project Ideas for Beginners",
    description:
      "Explore creative project ideas to enhance your skills with React Native and build impressive applications.",
  },
  {
    slug: "improve-english-speaking",
    title: "5 Ways to Improve Your English Speaking Skills",
    description:
      "Practical tips and resources to help you become fluent in English and communicate confidently with anyone.",
  },
  {
    slug: "japanese-language-beginner",
    title: "Beginner's Guide to Learning Spoken Japanese",
    description:
      "Kickstart your journey in learning Japanese with simple tips, resources, and strategies for beginners.",
  },
  {
    slug: "mobile-settings-tutorials",
    title: "Mobile Settings Tips and Tricks: Helpful Tutorials",
    description:
      "Simplify your smartphone usage with these practical tutorials on mobile and social media settings.",
  },
  {
    slug: "graphic-animation-beginners",
    title: "How to Get Started with Graphic Animation",
    description:
      "Step-by-step guidance for aspiring animators to start their journey in graphic animation and design.",
  },
  {
    slug: "vercel-deployment-nextjs",
    title: "Deploying Next.js Projects on Vercel: A Guide",
    description:
      "Learn the process of deploying your MERN stack projects with Next.js on Vercel for seamless hosting.",
  },
  {
    slug: "smart-home-switch",
    title: "Building a Wireless Smart Home Switch",
    description:
      "A beginner-friendly guide to creating a wireless switch that can be controlled from anywhere.",
  },
];

export default Page;
