import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className='warning'>
      Warning!
    </div>
  )
}

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWarning: true
    }
  }

  handleToggleClick = () => {
    this.setState({
      showWarning: !this.state.showWarning
    });
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
 
}

function App() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
