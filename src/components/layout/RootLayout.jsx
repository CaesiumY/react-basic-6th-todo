const RootLayout = ({ children }) => {
  return (
    <main className="main-center">
      <header>나는 완전히 붕괴되었어요</header>
      {children}
      <footer>저는 footer예요</footer>
    </main>
  );
};

export default RootLayout;
