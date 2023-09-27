import React, { useState } from "react";
import axios from "axios";
import Lists from "./Lists";
import "./Dictionary.css"

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${api}/${keyword}`);
      // console.log(response);
      setData(response.data[0]);
      // console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    setKeyword("");
    setData(null);
  };

  return (
    <div className="container shadow p-5 mt-5">
      <form action="" className="d-flex align-items-center justify-content-center">
        <input
          type="text"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            
          }}
          className="form-control"
        />
        <button className="btn btn-danger" disabled={!keyword} type="submit" onClick={handleSearch}>
          Search
        </button>
        <button className="btn btn-warning" type="submit" onClick={handleClear}>
          Clear
        </button>
      </form>
      {data? <Lists {...{data}} />:"No meaning found"}
    </div>
  );
};

export default Dictionary;
