import React, {Component} from 'react'
import blessed from 'blessed'
import Box from './Box'

const stylesheet = {
  bordered: {
    border: {
      type: 'line'
    },
    style: {
      border: {
        fg: 'blue'
      }
    }
  }
};

class Container extends Component {
  props: {commands: Array<string>};
  render(){
    var width = Math.floor(100 / this.props.commands.length)
    return (
      <element>
        {this.props.commands.map((command, index) => <Box command={command} width={width} left={width * index} />)}
      </element>
    )
  }
}

export default Container