// src/pages/HomePage.js
import React from "react";
import ReactMarkdown from "react-markdown";
import HomeContent from "./Home.md?raw";
import "./HomePage.css";
import MarkdownComponents from "../components/MarkdownComponents";
import remarkGfm from "remark-gfm";
import { remarkHighlight } from "../lib/remarkHighlight";
function HomePage() {
  return (
    <div>
      <div className="main-npm">
        <div className="owner-npm">
          <h2>React Custom Spinner</h2>
          <h4>- by Pratik Hole</h4>
        </div>
      </div>
      <main className="main-section">
        <div className="content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkHighlight]}
            components={MarkdownComponents}
          >
            {HomeContent}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
