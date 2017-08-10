import React from 'react';

function CrushSlider(props) {
  return (
    <div className="slider-div">
      <div className="crusher">{props.crusher}</div>
      <input
        className="slider"
        type="range"
        onChange={e => props.handleOnChange(e, props.crusher)}
				/>
      <p className="crush-score">{props.crushFactor}</p>
    </div>
  );
}

export default CrushSlider;
