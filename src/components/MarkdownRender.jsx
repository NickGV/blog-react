import { marked } from "marked";

export const MarkdownRender = ({ content }) => {
  const htmlContent = marked(content);

  return (
    <div
      className="prose prose-lg  w-full max-w-full h-full p-4 border-2 border-gray-300 rounded-md overflow-auto bg-white break-words"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};
