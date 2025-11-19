import { useRef } from 'react';

function ImageInput({ onImage }) {
  const fileRef = useRef();

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(',')[1];
      onImage(base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <input
      type="file"
      accept="image/*"
      ref={fileRef}
      onChange={handleChange}
      style={{ marginTop: 12 }}
    />
  );
}

export default ImageInput;
