class ImageUploader {
  async upload(file) {
    const url = process.env.REACT_APP_CLOUDINARY_URL;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

    const result = await fetch(url, {
      method: "POST",
      body: formData,
    });
    return result.json();
  }
}

export default ImageUploader;
