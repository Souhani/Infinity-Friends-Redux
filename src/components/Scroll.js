const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "350px",
        marginTop: "20px",
      }}
    >
      {children}
    </div>
  );
};
export default Scroll;
