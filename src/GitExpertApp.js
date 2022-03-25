import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GitExpertApp = ({ defaultCategories=[]}) => {
  //const categories = ["One punch", "Samuari X", "Dragon Ball"];
  // const [categories, setCategories] = useState(["One punch"]);
  const [categories, setCategories] = useState( defaultCategories );

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (            
          <GifGrid 
          key={category}
          category={category} />
        ))}
      </ol>
    </>
  );
};

export default GitExpertApp;
