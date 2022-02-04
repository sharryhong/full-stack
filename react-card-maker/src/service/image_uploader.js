class ImageUploader {
  async upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_PRESET_NAME
    );
    const result = await fetch(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL, {
      method: "POST",
      body: formData,
    });
    return await result.json();
  }
}

export default ImageUploader;
