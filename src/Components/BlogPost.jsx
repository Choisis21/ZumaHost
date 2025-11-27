import React, { useState, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "./BlogData";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; 
import { Listbox, Transition } from "@headlessui/react";
import { H3 } from "../Components/Headings";


const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs = blogs.filter((b) => {
    const categoryMatch = selectedCategory === "All" || b.category === selectedCategory;
    const searchMatch = b.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  if (!blog) return <p className="container mx-auto px-16 py-40">Blog not found</p>;

  return (
    <div className="container bg-[#fbf9f6] mx-auto px-16 py-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE – BLOG POST */}
        <div className="lg:col-span-2 space-y-8 bg-[#fff] border-white border rounded-lg p-6">
          <h1 className="text-4xl font-bold text-[#a0430a] mb-4">{blog.title}</h1>
          <p className="text-gray-500 mb-4">{blog.date}</p>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-md mb-6"
          />
          <p className="text-gray-700 mb-6">{blog.fullContent}</p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <p>No comments yet. Be the first to comment!</p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
                <div className="hidden lg:block space-y-8">
                  {/* Search Box */}
                  <div className="bg-white border border-white shadow-sm p-5 rounded-lg">
                    <h3 className="font-bold font-[Georgia,_serif] text-[#a0430a] text-lg mb-3">Search</h3>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full border border-[#a0430a] focus:outline-none focus:ring-2 focus:ring-[#a0430a] transition-all duration-300 transform hover:scale-[1.02] p-2 rounded"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
        
                  {/* Category Filter */}
                  <div className="bg-white border border-white shadow-sm p-5 rounded-lg">
                    <h3 className="font-bold font-[Georgia,_serif] text-[#a0430a] text-lg mb-3">
                      Categories
                    </h3>
        
                    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                      <div className="relative">
                        <Listbox.Button className="w-full border border-[#a0430a] p-2 rounded text-[#403c3c] text-left flex justify-between items-center hover:scale-[1.02] transition-transform duration-300">
                          {selectedCategory}
                          <ChevronDownIcon className="w-5 h-5 text-[#a0430a]" />
                        </Listbox.Button>
        
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-1 w-full bg-white border border-[#a0430a] rounded shadow-lg z-10">
                            {categories.map((cat) => (
                              <Listbox.Option
                                key={cat}
                                value={cat}
                                className={({ active }) =>
                                  `cursor-pointer select-none p-2 ${
                                    active ? "bg-[#a0430a] border-[#a0430a] text-white" : "text-[#403c3c]"
                                  }`
                                }
                              >
                                {cat}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
        
                  {/* Latest Posts */}
                  <div className="bg-white border border-white shadow-sm p-5 rounded-lg">
                    <h3 className="font-bold font-[Georgia,_serif] text-[#a0430a] text-lg mb-3">Latest Posts</h3>
                    <ul className="space-y-2">
                      {blogs.map((b) => (
                        <Link key={b.id} to={`/blogs/${b.id}`}>
                          <H3 className="hover:underline cursor-pointer">{b.title}</H3>
                        </Link>
                      ))}
                    </ul>
                  </div>
        
                  {/* Advertisement */}
                  <div className="bg-white border border-white shadow-sm p-5 rounded-lg">
                    <h3 className="font-bold font-[Georgia,_serif] text-[#a0430a] text-lg mb-3">Advertisement</h3>
                    <div className="p-4 border rounded text-center">
                      <p className="font-semibold">Get a Free Online Store</p>
                      <p className="text-sm mb-4">Build fast with AI — No coding needed.</p>
                      <button className="bg-[#a0430a] text-white px-4 py-2 rounded hover:bg-[#a0430a]/90">
                        OPEN
                      </button>
                    </div>
                  </div>
                </div>

      </div>
    </div>
  );
};

export default BlogPost;
