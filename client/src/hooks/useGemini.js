import { useState, useRef } from 'react';

export default function useGemini() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const responseRef = useRef("");

  const sendPrompt = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setLoading(true);
    setResponse("");
    responseRef.current = "";
    try {
      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(image ? { prompt, image } : { prompt })
      });
      if (!res.ok) throw new Error("API error");
      const reader = res.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = new TextDecoder().decode(value);
        responseRef.current += chunk;
        setResponse(responseRef.current);
      }
    } catch (err) {
      setResponse("Error: " + err.message);
    }
    setLoading(false);
  };

  return {
    prompt,
    setPrompt,
    image,
    setImage,
    response,
    loading,
    sendPrompt
  };
}
