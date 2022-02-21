import React, { useRef, useContext } from "react";
import { ImageUploaderContext } from "App";
import Button from "../button/Button";
import styles from "./image-file-input.module.css";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import { useState } from "react";

const ImageFileInput = ({ fileName, onImageChange }) => {
  const { imageUploader } = useContext(ImageUploaderContext);
  const inputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setIsLoading(true);
    const result = await imageUploader.upload(event.currentTarget.files[0]);
    setIsLoading(false);
    onImageChange({
      fileName: result.original_filename,
      fileURL: result.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        className={styles.input}
        accept="image/*"
        onChange={onChange}
      />
      {!isLoading && (
        <Button secondary={!!fileName} onClick={onClick}>
          {fileName || "Image Upload"}
        </Button>
      )}
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default ImageFileInput;
