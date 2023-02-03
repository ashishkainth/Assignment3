import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold">{title}</h1>
      {!isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [showSection, setShowSection] = useState("Career");
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div>
      <Section
        description={text}
        title="About"
        isVisible={showSection === "About"}
        setIsVisible={() => {
          setShowSection(showSection === "About" ? "" : "About");
        }}
      />
      <Section
        description={text}
        title="Career"
        isVisible={showSection === "Career"}
        setIsVisible={() => {
          setShowSection(showSection === "Career" ? "" : "Career");
        }}
      />
      <Section
        description={text}
        title="Team"
        isVisible={showSection === "Team"}
        setIsVisible={() => {
          setShowSection(showSection === "Team" ? "" : "Team");
        }}
      />
      <Section
        description={text}
        title="Product "
        isVisible={showSection === "Product"}
        setIsVisible={() => {
          setShowSection(showSection === "Product" ? "" : "Product");
        }}
      />
    </div>
  );
};

export default Instamart;
