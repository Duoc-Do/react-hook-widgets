import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a front end javascript framework",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favorite JS library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "You use React by creating components",
//   },
// ];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "The Color Blue", value: "blue" },
];
// const App = () => {
//   return (
//     <div>
//       <Dropdown options={options} />
//       {/*<Search />*/}
//       {/* <Accordion items={items} />*/}
//     </div>
//   );
// };

export default () => {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};