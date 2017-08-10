import React from 'react';
import CrushSlider from './crushSlider';

class Default extends React.Component {
  constructor() {
    super();
    this.state = {
      crushers: [
        {
          name: 'Trevor',
          score: 50,
        },
        {
          name: 'Lloyd',
          score: 50,
        },
      ],
    };
  }

  handleOnChange(e, crusherInQuestion) {
    this.setState({ crushers: this.state.crushers.map(crusher => crusher.name === crusherInQuestion ?
			{ name: crusherInQuestion, score: e.target.value } :
						crusher,
			),
    });
  }

  render() {
    return (
      <div>
        {this.state.crushers.map((crusher, idx) => (<div className="slider-container" key={idx}>
          <CrushSlider
            handleOnChange={(e, crusherInQuestion) => this.handleOnChange(e, crusherInQuestion)}
            crushFactor={crusher.score}
            crusher={crusher.name}
				/>
        </div>))}
      </div>
    );
  }
}

module.exports = Default;
