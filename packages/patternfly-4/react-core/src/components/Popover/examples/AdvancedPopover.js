import React from 'react';
import { Popover, PopoverPosition, Checkbox, Button } from '@patternfly/react-core';

class AdvancedPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: PopoverPosition.top,
      show: false,
      keepInViewChecked: true
    };
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleKeepInViewChange = checked => {
    this.setState({ keepInViewChecked: checked });
  };

  handleProgrammaticChange = checked => {
    this.setState({
      show: checked
    });
  };

  shouldClose = tip => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <div>
          <span style={{ paddingRight: '10px' }}>Popover Position</span>
          <select
            onChange={event => {
              this.setState({ position: event.target.value });
            }}
          >
            {Object.keys(PopoverPosition).map(key => (
              <option key={key} value={PopoverPosition[key]}>
                {PopoverPosition[key]}
              </option>
            ))}
          </select>
          <Checkbox
            label="Flip popover if the position falls outside the view"
            isChecked={this.state.keepInViewChecked}
            onChange={this.handleKeepInViewChange}
            aria-label="Keep in view"
            id="check-3"
          />
          <Checkbox
            label="Toggle popover from outside"
            isChecked={this.state.show}
            onChange={this.handleProgrammaticChange}
            aria-label="Toggle popover from outside"
            id="check-4"
          />
        </div>

        <div style={{ margin: '180px 0px 0px 270px' }}>
          <Popover
            position={this.state.position}
            isVisible={this.state.show}
            shouldClose={this.shouldClose}
            enableFlip={this.state.keepInViewChecked}
            appendTo={() => document.getElementById('___gatsby')}
            headerContent={<div>Popover Header</div>}
            bodyContent={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
              </div>
            }
          >
            <Button onClick={this.handleClick}>Toggle Popover</Button>
          </Popover>
        </div>
      </div>
    );
  }
}

export default AdvancedPopover;
