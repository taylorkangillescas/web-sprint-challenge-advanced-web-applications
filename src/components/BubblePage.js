import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import getColors from '../helpers/getColors';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    updateColors();
  }, []);

  const updateColors = () => {
    getColors()
      .then(res => {
        console.log(res);
        setColorList(res.data);
      })
      .catch(err => {
        console.error(err.response);
      });
  }

  if (!colorList) return <p>no colors</p>;

  return (
    <>
      <ColorList colors={colorList} updateColors={updateColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
