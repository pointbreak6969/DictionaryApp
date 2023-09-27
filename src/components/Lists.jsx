import React from "react";

const Lists = ({ data }) => {
  function playAudio() {
    const audio = phonetics[0].audio;
    if (audio !== "") {
      var a = new Audio(`${audio}`);
      a.play();
    } else {
      console.log(1);
    }
  }

  const { word, phonetic, phonetics, meanings } = data;
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: "#d8d8d8" }}
    >
      <div className="word">
        <h3>Word:{word}</h3>
      </div>
      <div className="play">
        <button onClick={playAudio}>Play Audio</button>
        <h5>{phonetic}</h5>
      </div>
      <div className="meanings">
        <h5>{meanings[0].partOfSpeech}</h5>
        <h5>Definition: {meanings[0].definitions[0].definition}</h5>
        <h5>Example: {meanings[0].definitions[0].example}</h5>
        <h5>{meanings[1].partOfSpeech}</h5>
        {meanings[1].definitions[0] ? (
          <ul>
            <li>{meanings[1].definitions[0].definition}</li>
          </ul>
        ) : (
          ""
        )}
        {meanings[1].definitions[1] ? (
          <ul>
            <li>{meanings[1].definitions[1].definition}</li>
          </ul>
        ) : (
          ""
        )}
        {meanings[1].definitions[2] ? (
          <ul>
            <li>{meanings[1].definitions[2].definition}</li>
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className="synonyms">
        {meanings[0].synonyms[0] ? (
          <h3> Synonym: {meanings[0].synonyms[0]}</h3>
        ) : (
          ""
        )}
        {meanings[0].antonyms[0] ? (
          <h3>Antonym: {meanings[0].antonyms[0]}</h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Lists;
