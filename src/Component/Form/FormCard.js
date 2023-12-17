import React, { Component } from "react";
import { ThemeWrapper } from "../ThemeWrapper";

export default class FormCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageValue: "",
      isTyping: false,
    };
    //component will mount
  }

  handleResize() {
    console.log("resizing");
  }
  //Mount
  componentDidMount() {
    //fetch data
    //insert ke this.state.data
    window.addEventListener("resize", this.handleResize);
  }

  //Update
  componentDidUpdate(prevProps, prevState) {
    if (this.state.messageValue != prevState.messageValue) {
      this.setState({
        isTyping: true,
      });
      setTimeout(()=>{
        this.setState({isTyping: false})
      }, 1500)
    }
  }

  //Unmount
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <ThemeWrapper>
        <form className="formForm">
          <div>
            <label>
              message:
              <input
                name="messageValue"
                type="text"
                value={this.state.messageValue}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
        </form>
        <div>{this.state.isTyping && <span>is typing...</span>}</div>
      </ThemeWrapper>
    );
  }
}
