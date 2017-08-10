import React from 'react';

function CrushSlider(props) {
  return (
    <div>
      <input
        type="range"
        onChange={props.handleOnChange}
				/>
      <p>{props.value}</p>
    </div>
  );
}

export default CrushSlider;
