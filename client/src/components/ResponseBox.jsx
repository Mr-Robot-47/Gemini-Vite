function ResponseBox({ children }) {
  return (
    <div style={{ marginTop: 24, whiteSpace: 'pre-wrap', minHeight: 40, fontFamily: 'Avenir, Helvetica, Arial, sans-serif', fontSize: 16 }}>
      {children}
    </div>
  );
}

export default ResponseBox;
