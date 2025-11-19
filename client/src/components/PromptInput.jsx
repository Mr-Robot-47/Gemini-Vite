function PromptInput({ value, onChange, disabled, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter your prompt..."
        style={{ flex: 1, padding: 8, fontFamily: 'Avenir, Helvetica, Arial, sans-serif', fontSize: 16 }}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || !value.trim()} style={{ padding: 8, fontFamily: 'Avenir, Helvetica, Arial, sans-serif', fontWeight: 600 }}>
        Send
      </button>
    </form>
  );
}

export default PromptInput;
