import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  const blogData = {
    "building-smarter-applications-with-ai": {
      title: "Building Smarter Applications with AI 🤖",
      content:
        "Artificial Intelligence (AI) has revolutionized the way applications are developed, bringing automation, machine learning, and smart decision-making capabilities to various industries. AI-powered applications enhance user experience, optimize performance, and automate tasks that were previously manual. For instance, recommendation engines in e-commerce, natural language processing in chatbots, and image recognition in healthcare all leverage AI. Additionally, AI is increasingly integrated into apps for predictive analytics, improving the accuracy of business decisions. With advances in deep learning, neural networks, and reinforcement learning, the future of AI promises even more powerful applications, paving the way for smarter systems that continuously evolve based on data.",
    },
    "solving-complex-dsa-problems": {
      title: "Solving Complex DSA Problems 💡",
      content:
        "Data Structures and Algorithms (DSA) are fundamental to computer science and software engineering. Mastering DSA is essential for solving complex problems efficiently and optimizing the performance of algorithms. From arrays to linked lists, stacks to queues, trees to graphs, each data structure has specific strengths and weaknesses that determine its suitability for different tasks. Alongside these structures, various algorithms such as sorting, searching, dynamic programming, and greedy algorithms help address challenges like finding the shortest path, searching in a database, and solving optimization problems. Regular practice on platforms like LeetCode, HackerRank, and Codeforces is key to developing a strong foundation in DSA, sharpening problem-solving skills and preparing for coding interviews.",
    },
    "exploring-cloud-computing": {
      title: "Exploring Cloud Computing ☁️",
      content:
        "Cloud computing has drastically transformed the way businesses and developers deploy, manage, and scale applications. It provides on-demand access to computing resources like servers, storage, databases, and networking through the internet. Major cloud providers, such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud, offer various services including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Cloud computing allows businesses to reduce upfront infrastructure costs and scale applications based on demand. The shift to cloud-native technologies, such as containerization and microservices, is enabling organizations to achieve greater flexibility, agility, and faster time-to-market. With the advent of serverless computing and edge computing, the cloud continues to evolve, further decentralizing computing and reducing latency.",
    },
    "kubernetes-and-docker": {
      title: "Kubernetes & Docker: A Perfect Pair 🚀",
      content:
        "Docker and Kubernetes have become the cornerstone of modern application development and deployment. Docker is a platform that allows developers to package applications and their dependencies into containers, ensuring that they run consistently across various environments. Containers are lightweight and portable, making it easy to run applications in any environment. Kubernetes, on the other hand, is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Kubernetes automates tasks such as load balancing, rolling updates, and self-healing, while Docker ensures that the applications run consistently across different environments. Together, they provide an efficient and scalable solution for modern DevOps workflows, enabling faster delivery of applications, better resource management, and improved system reliability.",
    },
    "devops-and-cicd": {
      title: "Understanding DevOps and CI/CD Pipeline 🔧",
      content:
        "DevOps is a software development methodology that combines development (Dev) and operations (Ops) to improve collaboration, streamline workflows, and deliver software more efficiently. The core principles of DevOps include continuous integration (CI), continuous delivery (CD), and infrastructure as code (IaC). CI/CD pipelines automate the process of integrating code changes, testing them, and deploying them to production, ensuring faster development cycles and more reliable releases. CI involves merging developers' code into a shared repository several times a day, followed by automated testing to detect bugs early. CD ensures that the code is automatically deployed to production with minimal manual intervention. By adopting DevOps practices and setting up CI/CD pipelines, teams can achieve faster delivery, better collaboration, and higher-quality software.",
    },
    "blockchain-and-cryptocurrency": {
      title: "Blockchain and Cryptocurrency: The Future of Finance 💰",
      content:
        "Blockchain is a decentralized digital ledger technology that securely records transactions across multiple computers. Unlike traditional centralized systems, blockchain operates without a central authority, making it transparent and resistant to tampering. Each block in the blockchain contains a record of transactions, and once added, it is immutable. This technology has found significant applications in various industries, particularly in finance, through cryptocurrencies like Bitcoin and Ethereum. Cryptocurrencies are digital currencies that leverage blockchain to provide a secure, decentralized way of transferring value. Blockchain also has potential uses beyond cryptocurrency, including supply chain management, voting systems, and digital identity verification. As the technology matures, it promises to revolutionize industries by providing transparent, secure, and decentralized solutions.",
    },
  };

  const currentBlog = blogData[postId] || {
    title: "Blog Not Found",
    content: "Content not available.",
  };

  return (
    <section
      id="blog-post"
      className="section-container bg-gray-50 py-16 hover:shadow-lg transition-all duration-300 border-t-4 border-portfolio-teal cursor-pointer transform hover:-translate-y-2"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-portfolio-blue mb-6">
          {currentBlog.title}
        </h2>
        <p className="text-gray-700">{currentBlog.content}</p>
      </div>
    </section>
  );
};

export default BlogPost;
