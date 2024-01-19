import "./styles.css";
import React from "react";

import Form from "./Components/Form.js";
import FileUploader from "./Components/FileUploader.js";

export default function App() {
  const onUpload = (files) => {
    console.log(files);
  };

  return (
    <div>
      <h2>Document Upload</h2>
      <Form onUpload={onUpload} />
      <FileUploader onUpload={onUpload} />
    </div>
  );
}
