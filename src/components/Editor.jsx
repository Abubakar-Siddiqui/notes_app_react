import { useState } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Editor({ currentNote, updateNote, updateTitle }) {
  const [selectedTab, setSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="pane editor">
      <input
        type="text"
        id="title"
        className="app-main-note-title"
        value={currentNote.title}
        onChange={(event) => updateTitle(event.target.value)}
        autoFocus
      />
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={40}
        heightUnits="vh"
      />
      {/* <div className="app-main-note-preview">
        <h1 className="preview-title">{currentNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {currentNote.body}
        </ReactMarkdown>
      </div> */}
    </section>
  );
}
