import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Building Smarter Applications with AI 🤖",
      description:
        "Explore how AI is changing the way we build applications and enhance user experience.",
      link: "/blog/building-smarter-applications-with-ai",
    },
    {
      id: 2,
      title: "Solving Complex DSA Problems 💡",
      description:
        "A guide to understanding and solving complex Data Structures and Algorithms (DSA) problems.",
      link: "/blog/solving-complex-dsa-problems",
    },
    {
      id: 3,
      title: "Exploring Cloud Computing ☁️",
      description:
        "The future of cloud computing and how it is reshaping modern application development.",
      link: "/blog/exploring-cloud-computing",
    },
    {
      id: 4,
      title: "Kubernetes & Docker: A Perfect Pair 🚀",
      description:
        "Learn how Docker and Kubernetes work together to manage and scale containerized applications.",
      link: "/blog/kubernetes-and-docker",
    },
    {
      id: 5,
      title: "Understanding DevOps and CI/CD Pipeline 🔧",
      description:
        "A deep dive into how DevOps practices and Continuous Integration/Continuous Deployment (CI/CD) pipelines enable faster and more reliable software delivery.",
      link: "/blog/devops-and-cicd",
    },
    {
      id: 6,
      title: "Blockchain and Cryptocurrency: The Future of Finance 💰",
      description:
        "Learn how blockchain technology powers cryptocurrencies like Bitcoin and Ethereum, and its broader implications for industries beyond finance.",
      link: "/blog/blockchain-and-cryptocurrency",
    },
  ];

  return (
    <section id="recent-blogs" className="section-container bg-gray-50 py-16">
      <h2 className="section-title text-center text-portfolio-blue">
        Recent Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 duration-300 border-t-4 border-portfolio-teal cursor-pointer"
          >
            <h4 className="text-xl font-semibold text-portfolio-blue mb-4">
              {blog.title}
            </h4>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <Link
              to={blog.link}
              className="text-portfolio-teal font-medium hover:underline flex items-center gap-2"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/blog"
          className="text-portfolio-teal font-semibold text-lg hover:underline"
        >
          See All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
