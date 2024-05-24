const Iframe = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="https://www.wikipedia.org/"
        title="Example Website"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default Iframe;
