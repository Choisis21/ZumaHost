import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { H1, H3 } from "../Components/Headings";
import { Link } from "react-router-dom";
import { blogs } from "./BlogData";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; 

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  // Filter blogs
  const filteredBlogs = blogs.filter((blog) => {
    const categoryMatch =
      selectedCategory === "All" || blog.category === selectedCategory;
    const searchMatch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="container bg-[#fbf9f6] mx-auto px-4 sm:px-6 lg:px-16 py-25 lg:py-40">
      <H1 className="pb-5 text-3xl sm:text-4xl lg:text-5xl">Zuma Host Blog</H1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: BLOG POSTS */}
        <div className="lg:col-span-2 space-y-10">
          {currentBlogs.length ? (
            currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border border-white rounded-lg shadow-sm hover:shadow-md transition p-6"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-md mb-4"
                />
                <p className="text-[#7f7060] font-['Roboto','sans-serif'] text-sm font-semibold uppercase mb-2">
                  {blog.category}
                </p>
                <h2 className="text-2xl sm:text-3xl font-[Georgia,_serif] text-[#a0430a] font-bold mb-4">
                  {blog.title}
                </h2>
                <p className="text-gray-500 font-['Roboto','sans-serif'] mb-4">
                  {blog.fullContent.replace(/\s+/g, " ").substring(0, 400)}...
                </p>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="text-[#a0430a] font-semibold hover:underline"
                >
                  Read More →
                </Link>
                <p className="text-gray-500 text-sm mt-4">{blog.date}</p>
              </div>
            ))
          ) : (
            <p>No blogs found.</p>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="w-full flex justify-between items-center mt-10">
              {currentPage > 1 ? (
                <button
                  onClick={handlePrev}
                  className="flex font-['Roboto','sans-serif'] items-center gap-1 px-4 py-2 rounded-md border text-[#403c3c] border-[#a0430a] hover:bg-[#a0430a]/5"
                >
                  ‹ PREV
                </button>
              ) : (
                <div />
              )}

              <div className="hidden lg:flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`w-9 h-9 flex items-center justify-center text-sm font-medium ${
                      currentPage === i + 1
                        ? "bg-[#a0430a] text-white rounded-sm"
                        : "bg-[#fbf9f6] font-['Roboto','sans-serif'] hover:border hover:border-[#a0430a] hover:rounded-sm"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {currentPage < totalPages ? (
                <button
                  onClick={handleNext}
                  className="flex font-['Roboto','sans-serif'] items-center gap-1 px-4 py-2 rounded-md border text-[#403c3c] border-[#a0430a] hover:bg-[#a0430a]/5"
                >
                  NEXT ›
                </button>
              ) : (
                <div />
              )}
            </div>
          )}
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

export default BlogPage;
