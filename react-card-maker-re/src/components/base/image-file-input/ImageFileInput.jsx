import React, { useRef, useContext } from "react";
import { ImageUploaderContext } from "App";
import Button from "../button/Button";
import styles from "./image-file-input.module.css";

const ImageFileInput = ({ fileName }) => {
  const { imageUploader } = useContext(ImageUploaderContext);
  const inputRef = useRef();

  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const result = await imageUploader.upload(event.currentTarget.files[0]);
    console.log(result.original_filename, result.url);
  };

  return (
    <div className={styles.image_file_input}>
      <input
        ref={inputRef}
        type="file"
        className={styles.input}
        accept="image/*"
        onChange={onChange}
      />
      <Button secondary={!!fileName} onClick={onClick}>
        {fileName || "Image Upload"}
      </Button>
    </div>
  );
};

export default ImageFileInput;
