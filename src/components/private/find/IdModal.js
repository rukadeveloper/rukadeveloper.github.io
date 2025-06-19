import React from "react";

const IdModal = ({ foundIdentity, setNameOpen }) => {
  return (
    <div
      className="id-modal"
      style={{
        width: "300px",
        height: "400px",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        backgroundColor: "#fff",
        zIndex: "20000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {foundIdentity.length > 0 &&
        foundIdentity.map((found) => (
          <button
            style={{
              fontSize: "1.1rem",
              textAlign: "left",
              paddingBottom: "2rem",
              padding: "1rem",
              marginBottom: "1rem",
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            {found.userId}
          </button>
        ))}
      <button
        style={{ fontSize: "1.1rem" }}
        onClick={() => {
          setNameOpen(false);
        }}
      >
        닫기
      </button>
    </div>
  );
};

export default IdModal;
