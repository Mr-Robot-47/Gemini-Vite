function Title({ children }) {
  return (
    <h1 style={{
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      marginBottom: 24,
      textAlign: 'center',
      letterSpacing: 1
    }}>{children}</h1>
  );
}

export default Title;
