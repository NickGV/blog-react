import { useContext, useState } from "react";
import { MarkdownRender } from "../components/MarkdownRender";
import { PostsContext } from "../context/PostsContext";

export const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState("");

  const { addPost } = useContext(PostsContext);

  const handleSave = () => {
    if (!title.trim() || !content.trim() || !tags.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      image,
      tags: tags.split(",").map((tag) => tag.trim()),
      comments: [],
    };
    addPost(newPost);
    setTitle("");
    setImage("https://via.placeholder.com/150");
    setTags("");
    setContent("");
    setShowPreview(false);
    setError("");
  };

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen p-4 gap-4">
      <div
        className={`${
          showPreview ? "hidden" : ""
        } flex flex-col w-full lg:w-1/2 h-full mb-14 lg:h-full`}
      >
        <input
          type="text"
          className="w-full p-4 mb-4 border-2 bg-black-bg text-gray-text border-gray-700 rounded-md focus:outline-none focus:border-gray-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title of your post"
        />
        <input
          type="text"
          className="w-full p-4 mb-4 border-2 bg-black-bg text-gray-text border-gray-700 rounded-md focus:outline-none"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <input
          type="text"
          className="w-full p-4 mb-4 border-2 bg-black-bg text-gray-text border-gray-700 rounded-md focus:outline-none  break-words"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated)"
        />
        <textarea
          className="w-full h-full p-4 border-2 bg-black-bg text-gray-text border-gray-700 rounded-md focus:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post in Markdown..."
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="md:hidden mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
          onClick={handlePreview}
        >
          Watch Preview
        </button>
        <button
          className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
          onClick={handleSave}
        >
          Save Post
        </button>
      </div>
      <div
        className={`${
          showPreview ? "" : "hidden"
        } w-full lg:w-1/2 h-full mb-28 lg:h-full  border-2 border-gray-300 rounded-md break-words md:flex`}
        style={{ wordBreak: "break-word" }}
      >
        <MarkdownRender content={content} />
        {error && <p className="text-red-500 -mt-8 md:hidden">{error}</p>}
        <div className="flex gap-2 justify-between items-center md:hidden">
          <button
            className="mt-4 px-4 py-2 w-full bg-gray-700 hover:bg-gray-600 text-white rounded-md"
            onClick={handlePreview}
          >
            Back
          </button>
          <button
            className="mt-4 px-4 py-2 w-full bg-gray-700 hover:bg-gray-600 text-white rounded-md"
            onClick={handleSave}
          >
            Save Post
          </button>
        </div>
      </div>
    </div>
  );
};
