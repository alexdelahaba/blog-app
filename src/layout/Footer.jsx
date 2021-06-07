import React from "react";

export default function Footer() {
  const footerStyle = {
    alignItems: "center",
    backgroundColor: "#ce9c0c",
    bottom: 0,
    color: "white",
    display: "flex",
    height: 50,
    justifyContent: "center",
    position: "absolute",
    textAlign: "center",
    width: "100%",
  };
  return (
    <div style={footerStyle}>
      alexdelahaba &copy; {new Date().getFullYear()}
    </div>
  );
}
