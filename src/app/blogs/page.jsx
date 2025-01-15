import Link from "next/link";
import React from "react";

const getAllPost = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await res.json();
  return data;
};
const PostPage = async () => {
 const posts = await getAllPost()
  
   

  
  return (
    <div className="grid grid-cols-4 gap-4 my-4">
      {posts?.map((blog) => (
        <div className="border-gray-900 border-2 p-4" key={blog.id}>
          <h4 className="text-xl font-medium py-2">{blog.title}</h4>
          <h4>{blog.body}</h4>
          <button className="border-2 border-red-600 px-6 py-2 rounded-lg my-2">
            {" "}
            <Link href={`/blogs/${blog.id}`}>Details</Link>{" "}
          </button>
        </div>
      ))}
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

export default PostPage;
