import React from "react";
import "./HomePage.css";
import UsageContent from "./Usage.md?raw";
import ReactMarkdown from "react-markdown";
import MarkdownComponents from "../components/MarkdownComponents";
import remarkGfm from "remark-gfm";
import { remarkHighlight } from "../lib/remarkHighlight";
const Usage = () => {
  return (
    <div>
      <main className="main-section">
        <div className="content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkHighlight]}
            components={MarkdownComponents}
          >
            {UsageContent}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
};

export default Usage;
