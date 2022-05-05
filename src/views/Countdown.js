import React from "react";
import { useState, useEffect } from "react";

class Countdown extends React.Component {
  state = {
    count: 10,
  };

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === 0) {
      alert("Time's up");
      clearInterval(this.time);
    }
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    return <div>{this.state.count} Class</div>;
  }
}

const NewCountDown = () => {
  let [count, setCount] = useState(10);
  useEffect(() => {
    if (count === 0) {
      alert("Time's up");
      return;
    }
    let time = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [count]);
  return <div>{count} Hook</div>;
};

export { NewCountDown, Countdown };
