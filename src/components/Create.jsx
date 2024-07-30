import { useContext, useState } from "react";
import { MarkdownRender } from "./MarkdownRender";
import { PostsContext } from "../context/PostsContext";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const { addPost } = useContext(PostsContext);

  const handleSave = () => {
    if (title.trim() && content.trim() && image.trim() && tags.trim()) {
      const newPost = {
        id: Date.now(), // Generar un id único basado en el timestamp
        title,
        content,
        image,
        tags: tags.split(",").map((tag) => tag.trim()), // Convertir tags a array
        comments: [],
      };
      addPost(newPost);
      setTitle("");
      setImage("");
      setTags("");
      setContent("");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen p-4 gap-4">
      <div className="flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full">
        <input
          type="text"
          className="w-full p-4 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title of your post"
        />
        <input
          type="text"
          className="w-full p-4 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <input
          type="text"
          className="w-full p-4 mb-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 break-words"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated)"
        />
        <textarea
          className="w-full h-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post in Markdown..."
        />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleSave}
        >
          Save Post
        </button>
      </div>
      <div
        className="w-full lg:w-1/2 h-1/2 lg:h-full p-4 border-2 border-gray-300 rounded-md break-words"
        style={{ wordBreak: "break-word" }}
      >
        <MarkdownRender content={content} />
      </div>
    </div>
  );
};

export default Create;
