import React, {useState} from "react";

const InputWithIcon = () => {
    const [inputVal, setInputVal] = useState(0.54)
  return (
    <div className="input-container">
      <input
        className="input-field"
        type="number"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
      />
      <span className="icon">1/2</span>
      <span className="icon">x2</span>
    </div>
  );
};

export default InputWithIcon;
