import React from 'react';
import CrushSlider from './crushSlider';

class Default extends React.Component {
  constructor() {
    super();
    this.state = {
      crushFactor: 20,
    };
  }

  handleOnChange(e) {
    this.setState({ crushFactor: e });
  }

  render() {
    return (
      <div>
        {"crushin' it"}
        <CrushSlider
          handleOnChange={() => this.handleOnChange()}
          crushFactor={this.state.crushFactor}
					/>
      </div>
    );
  }
}

module.exports = Default;
