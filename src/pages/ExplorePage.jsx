import { useState, useContext, useEffect } from "react";
import { PostsContext } from "../context/PostsContext";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";

export const ExplorePage = () => {
  const { posts } = useContext(PostsContext);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterByTag, setFilterByTag] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const sortOptions = [
    { value: "date-desc", label: "Date (most recent)" },
    { value: "date-asc", label: "Date (oldest)" },
    { value: "title-asc", label: "Title (A-Z)" },
    { value: "title-desc", label: "Title (Z-A)" },
  ];
  const allTags = posts.map((post) => post.tags);
  const tags = [...new Set(allTags.flat())];

  const handleSortChange = (value) => {
    setSortBy(value);
    setIsDropdownOpen(false);
    const sortedPosts = [...posts].sort((a, b) => {
      if (value === "date-desc") {
        return new Date(b.date) - new Date(a.date);
      } else if (value === "date-asc") {
        return new Date(a.date) - new Date(b.date);
      } else if (value === "title-asc") {
        return a.title.localeCompare(b.title);
      } else if (value === "title-desc") {
        return b.title.localeCompare(a.title);
      }
    });
    setFilteredPosts(sortedPosts);
  };

  const handleTagFilter = (tag) => {
    setFilterByTag("");
    const filteredPosts = posts.filter((post) => post.tags.includes(tag));
    setFilteredPosts(filteredPosts);
    setFilterByTag(tag);
  };

  return (
    <div className="text-white p-4 w-full flex flex-col gap-4 mt-16">
      <SearchBar />
      <div className="flex flex-wrap gap-2 w-full">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagFilter(tag)}
            className={`${
              filterByTag === tag ? "bg-gray-600" : "bg-gray-700"
            } hover:bg-gray-600 text-white px-3 py-1 rounded-full`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          type="button"
          className="flex justify-between items-center w-full rounded border shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Sort by {sortBy ? `: ${sortBy}` : ""}
          <div>
            {isDropdownOpen ? (
              <i className="fa-solid fa-chevron-up ml-2"></i>
            ) : (
              <i className="fa-solid fa-chevron-down ml-2"></i>
            )}
          </div>
        </button>

        {isDropdownOpen && (
          <div
            className="absolute right-0 mt-2 w-full rounded shadow-sm shadow-white bg-gray-800 z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div role="none">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortChange(option.value)}
                  className="w-full text-left px-4 text-sm py-2 text-white hover:bg-gray-700"
                  role="menuitem"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <h1 className="text-2xl font-bold mt-4">Explore</h1>
      {filteredPosts &&
        filteredPosts.map((post) => (
          <NavLink
            key={post.id}
            className="bg-black-bg rounded p-4 shadow-sm shadow-white mt-4 w-full"
            to={`/post/${post.id}`}
          >
            <div className="flex gap-3 flex-col md:flex-row">
              <img
                src={post.image}
                alt=""
                className="w-full md:w-40 h-40 rounded object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                <p className="text-xl font-bold">{post.title}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-hovered text-white px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
    </div>
  );
};
