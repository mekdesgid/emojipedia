import React from "react";
import Rend from "../components/dictionary";
import emojipedia from "../emojipedia";

const Dict = function (emoji) {
  return (
    <Rend
      key={emoji.id}
      emoji={emoji.emoji}
      meanings={emoji.meanings}
      names={emoji.names}
    />
  );
};

export default Dict;
