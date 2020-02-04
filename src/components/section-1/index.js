import React, { useState } from "react";
import { Column, InputWithIcon } from "../../uiComponents";

const SectionFirst = () => {
  const [sliderVal, setSliderVal] = useState(67.25);

  return (
    <Column size="small">
      <div className="range-slider">
        <input
          type="range"
          orient="vertical"
          min="0"
          max="100"
          step="0.05" 
          value={sliderVal}
          onChange={e => setSliderVal(e.target.value)}
        />
        <div className="range-slider-bar" style={{height: sliderVal + '%' }}></div>
        <div className="range-slider-thumb" style={{bottom: sliderVal - 6 + '%' }}>
        <span>{parseFloat(sliderVal).toFixed(2)}</span>
        </div>
      </div>
      <InputWithIcon />
    </Column>
  );
};

export default SectionFirst;
