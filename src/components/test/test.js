import { Component, Fragment } from "react";

export default class WhoIam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 28,
    };
  }
  nextYear = () => {
    this.setState((state) => ({
      age: state.age + 1,
    }));
  };

  // Using Component for craeting a new component
  // render() {
  //   const { name } = this.props;
  //   return (
  //     <div>
  //       <h1>
  //         Who {name}?, age : {this.state.age}
  //       </h1>
  //       <button onClick={this.nextYear}>Click</button>
  //     </div>
  //   );
  // }

  // Creating a fragment
  render() {
    const { name } = this.props;
    return (
      <Fragment key="244">
        {"// or <></> "}
        <div>
          <h1>
            Who {name}?, age : {this.state.age}
          </h1>
          <button onClick={this.nextYear}>Click</button>
        </div>
      </Fragment>
    );
  }
}
