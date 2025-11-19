
import Title from './components/Title';
import PromptInput from './components/PromptInput';
import ResponseBox from './components/ResponseBox';

import ImageInput from './components/ImageInput';
import useGemini from './hooks/useGemini';
import './App.css';

function App() {
  const { prompt, setPrompt, image, setImage, response, loading, sendPrompt } = useGemini();
  return (
    <div style={{ maxWidth: 500, margin: '40px auto' }}>
      <Title>GemLiFy</Title>
      <PromptInput
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        disabled={loading}
        onSubmit={sendPrompt}
      />
      <ImageInput onImage={setImage} />
      {image && (
        <div style={{ marginTop: 12, textAlign: 'center' }}>
          <img
            src={`data:image/jpeg;base64,${image}`}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8, marginTop: 8 }}
          />
        </div>
      )}
      <ResponseBox>{loading ? 'Sending...' : response}</ResponseBox>
    </div>
  );
}

export default App;
