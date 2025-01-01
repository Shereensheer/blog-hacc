import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
  // Example blog data with images
  const blogs = [
    {
      slug: "/blog1",
      title: "Tools for Visualizing Machine Learning Models",
      excerpt: "The latest AI news we announced in December.",
      image: "/bb.png",
    },
    {
      slug: "/blog2",
      title: "Machine Learning Salaries and Job Market Analysis for 2024 and Beyond",
      excerpt: "321 real-world gen AI use cases from the world's leading organizations.",
      image: "/ml.png",
    },
    {
      slug: "/blog3",
      title: "5 of the Most Influential Machine Learning Papers of 2024",
      excerpt: "Introducing Gemini 2.0: our new AI model for the agentic era.",
      image: "/pa.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto h-auto p-4 pt-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14">
        Blog Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link
            href={`/components/post/${blog.slug}`}
            key={blog.slug}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-48 sm:h-60 lg:h-72">
              <Image
                height={200}
                width={500}
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{blog.title}</h2>
              <p className="text-gray-600 text-base sm:text-lg mt-2">{blog.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;





