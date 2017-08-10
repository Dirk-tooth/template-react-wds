import React from 'react';
import Slider from 'react-rangeslider';

function CrushSlider(props) {
  return (
    <Slider
      value={props.crushFactor}
      onChange={props.handleOnChange}
			/>
  );
}

export default CrushSlider;
