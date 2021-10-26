import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectFitchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, []);

  return (
    <div>
      {/* {posts} map over the posts array */}
      <h3>Fetching Data using useEffect hook </h3>
    </div>
  );
};
export default UseEffectFitchData;
