"use client";
import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Quill styles

type QuillEditorProps = {
  setContent: (html: string) => void;
  content?: string;
};

const QuillEditor = ({ setContent, content: _content }: QuillEditorProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillInstanceRef = useRef<Quill | null>(null); // To access Quill instance globally

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow", // Or 'bubble'
        modules: {
          toolbar: [
            // Text formats
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike"], // Text styles
            // [{ color: [] }, { background: [] }], // Text color and background
            // [{ script: "sub" }, { script: "super" }], // Subscript/Superscript
            [{ align: [] }], // Text alignment
            [{ direction: "rtl" }], // Text direction

            // Headers and lists
            [{ list: "ordered" }, { list: "bullet" }], // Check list added
            // [{ indent: "-1" }, { indent: "+1" }], // Indent

            // Media and links
            // ["link", "image", "video"], // Insert links, images, videos
            ["link"], // Insert links, images, videos

            // Code and blocks
            ["blockquote", "code-block"], // Blockquote and code block

            // Clear formatting
            // ["clean"], // Clear formatting
          ],
        },
        placeholder: "Write something amazing...",
      });

      quillInstanceRef.current = quill; // Store the Quill instance for further use

      // Save the editor content when it changes
      quill.on("text-change", () => {
        const contentHTML = quill.root.innerHTML;

        setContent(contentHTML); // Update the parent with the current HTML content
      });
    }
  }, [setContent]);

  return (
    <div
      className="bg-stone-50 rounded-b-md border border-gray-300"
      ref={editorRef}
      style={{ height: "150px" }}
    />
  );
};

export default QuillEditor;
