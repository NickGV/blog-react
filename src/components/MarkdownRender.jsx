import { marked } from "marked";

export const MarkdownRender = ({ content, style }) => {
  const htmlContent = marked(content);

  if (style === "post")
    return (
      <div
        className="prose prose-lg w-full max-w-full h-auto p-3 bg-black-bg text-gray-text break-words"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );

  return (
    <div
      className="prose prose-lg w-full max-w-full h-full p-3 bg-black-bg text-gray-text overflow-auto break-words"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};
