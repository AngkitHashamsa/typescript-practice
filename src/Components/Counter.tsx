import { Component, ReactNode } from "react";

interface CounterState {
  count: number;
}
interface Props {
  message: string;
}
// if we dnt have props than we can write <{},CounterState>
// or if we dnt have state
// then <Props>
export class Counter extends Component<Props, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => this.setState({ count: this.state.count + 1 });

  render(): ReactNode {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
