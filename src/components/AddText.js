import React, { useEffect, useState } from "react";

function AddText({ inputText, top, left }) {
  const [Text, setText] = useState("");
  const [Left, setLeft] = useState(0);
  const [Top, setTop] = useState(0);

  useEffect(() => {
    setText({ text: inputText });
    setTop({ Top: top });
    setLeft({ Left: left });
  }, []);

  return (
    <React.Fragment>
      <input
        type="text"
        value={Text}
        style={{ top: Top, left: Left, position: "absolute" }}
      />
    </React.Fragment>
  );
}

export default AddText;
