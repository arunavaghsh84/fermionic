// components/TinyEditor.tsx
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

interface TinyEditorProps {
  initialValue?: string;
  onEditorChange: (content: string) => void;
}

const TinyEditor: React.FC<TinyEditorProps> = ({
  initialValue = "",
  onEditorChange,
}) => {
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY} // Replace with your TinyMCE API key
        initialValue={initialValue} // Set initial HTML content here
        onEditorChange={onEditorChange}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "image code advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | image | \
          bullist numlist outdent indent | removeformat | help",
          automatic_uploads: true,
          images_upload_handler: async (blobInfo: any) => {
            const formData = new FormData();
            formData.append("image", blobInfo.blob());

            const response = await fetch("/api/images", {
              method: "post",
              body: formData,
            });

            if (response.ok) {
              const data = await response.json();
              return data.url;
            }

            return "";
          },
        }}
      />
    </>
  );
};

export default TinyEditor;
