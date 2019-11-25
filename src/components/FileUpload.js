import React, { useState } from 'react';
import { FormGroup, FormItem } from 'fundamental-react/Forms';
import { Button } from 'fundamental-react/Button';

const imagePreviewStyle = { width: '100px', height: '100px' };

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleSelectFile = e => {
    setFile(e.target.files[0]);
    setMsg(null);
  };
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('https://test-file-upload.glitch.me/upload', {
      method: 'post',
      body: formData,
    });
    if (res.status === 201) {
      setMsg('Uploaded');
      setFile();
    } else {
      setMsg('Error');
    }
  };

  return (
    <FormGroup>
      <FormItem>
        <input type="file" accept="image/*" onChange={handleSelectFile} />
      </FormItem>
      {file && (
        <FormItem>
          <Button onClick={handleUpload}>Upload</Button>
        </FormItem>
      )}
      {msg}
      <FormItem>{file && <img src={URL.createObjectURL(file)} style={imagePreviewStyle} alt="Opps..." />}</FormItem>
    </FormGroup>
  );
};

export default FileUpload;
