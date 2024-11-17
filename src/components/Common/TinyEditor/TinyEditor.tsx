// components/TinyEditor.tsx
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinyEditorProps {
  initialValue?: string;
  onEditorChange: (content: string) => void;
}

const TinyEditor: React.FC<TinyEditorProps> = ({ initialValue = '', onEditorChange }) => {
  return (
    <Editor
      apiKey="36dd2vw35ylnzdin3xn5cev2ie0v0xn1thybnqf9bsr306p1" // Replace with your TinyMCE API key
      initialValue={initialValue}  // Set initial HTML content here
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help',
      }}
      onEditorChange={onEditorChange}
    />
  );
};

export default TinyEditor;
