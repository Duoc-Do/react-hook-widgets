import "./Accordion.css";
import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // initialial
  const onTitleClcick = (index) => {
    // helper function in function component
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClcick(index)}>
          {`${index + 1}. ${item.title}`}
          <i className="dropdown icon custom-accordion-icon"></i>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
