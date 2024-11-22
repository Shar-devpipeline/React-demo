import { Component } from "react";

import CounterWidget from "./pages/CounterWidget";
import ToggleGreeting from "./pages/ToggleGreeting";
import ShowHideToggle from "./pages/ShowHideToggle";

class App extends Component {
  render() {
    return (
      <div className="counter">
        <div>
          <CounterWidget />
        </div>
        <div>
          <ToggleGreeting />
        </div>
        <div>
          <ShowHideToggle />
        </div>
      </div>
    );
  }
}

export default App;
