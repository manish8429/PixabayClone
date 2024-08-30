import React, { useEffect, useState } from "react";
import UseContatex from "./UseContates.JSX";

const UseState = (props) => {
  const [ImageData, setImageData] = useState([]);

  useEffect(() => {
    const Datafetch = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=45702043-be926abff24b3f3b34186324a&q=nature&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
    //   console.log(data.hits);
    };

    Datafetch();
  }, []);


  const fetchdatabyid = async(cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=45702043-be926abff24b3f3b34186324a&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
  //   console.log(data.hits);
  }

  return (
    <UseContatex.Provider value={{ImageData, fetchdatabyid}}>
      {props.children}
    </UseContatex.Provider>
  );
};

export default UseState;
