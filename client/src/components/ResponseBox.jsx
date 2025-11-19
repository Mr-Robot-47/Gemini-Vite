import ReactMarkdown from 'react-markdown';

function ResponseBox({ children }) {
  return (
    <div style={{ marginTop: 24, minHeight: 40, fontFamily: 'Avenir, Helvetica, Arial, sans-serif', fontSize: 16 }}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}

export default ResponseBox;
