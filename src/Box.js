import React, {Component} from 'react'
import {spawn} from 'child_process'

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

class Box extends Component {
  props: {command: string};
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  componentDidMount(){
    const commandWithoutQuotes = this.props.command.replace(/^"/, '').replace(/"$/, '').split(' ')
    const commandName = commandWithoutQuotes.shift()
    const cmd = spawn(commandName, commandWithoutQuotes, {
      cwd: process.cwd()
    })
    
    cmd.stdout.on('data', data => this.setState(({text}) => ({text: text + data})))
    cmd.stderr.on('data', data => this.setState(({text}) => ({text: text + data})))
    cmd.on('close', () => this.setState(({text}) => ({text: text + '\n DONE!'})))
    
    setInterval(this.scrollToBottom.bind(this), 1000)
  }
  scrollToBottom(){
    this.refs.myBox.scrollTo(this.state.text.split('\n').length * 5)
  }
  render(): ReactElement {
    return (
      <log
        ref="myBox"
        class={stylesheet.bordered}
        width={this.props.width + '%'}
        height="100%"
        left={this.props.left + '%'}
        draggable={false}
        scrollable={true}
        label={this.props.command.replace(/^"/, '').replace(/"$/, '')}
        >
        {this.state.text}
      </log>
    )
  }
}

export default Box