
import Title from './components/Title';
import PromptInput from './components/PromptInput';
import ResponseBox from './components/ResponseBox';
import useGemini from './hooks/useGemini';
import './App.css';

function App() {
  const { prompt, setPrompt, response, loading, sendPrompt } = useGemini();
  return (
    <div style={{ maxWidth: 500, margin: '40px auto' }}>
      <Title>GemLiFy</Title>
      <PromptInput
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        disabled={loading}
        onSubmit={sendPrompt}
      />
      <ResponseBox>{loading ? 'Sending...' : response}</ResponseBox>
    </div>
  );
}

export default App;
