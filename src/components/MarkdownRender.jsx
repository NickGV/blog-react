import { marked } from "marked";

export const MarkdownRender = ({ content }) => {
  const htmlContent = marked(content);

  return (
    <div
      className="prose prose-lg  w-full max-w-full h-full p-3 bg-black-bg text-gray-text  overflow-auto  break-words"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};
