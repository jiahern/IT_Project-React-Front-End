import "./App.css";
import "./tailwind.min.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoginForm, { Logout } from "./Components/Login/login";
import HomePage from "./Pages/HomePage";
import Union from "./Pages/Union";
import Linkage from "./Pages/Linkage";
import Task from "./Pages/Task";
import Calendar from "./Pages/Calendar";

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div>
      <Router>
        <Sidebar
          onCollapse={(inactive) => {
            // console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className={inactive ? "contain inactive" : "contain"}>
          <Switch>
            <Route path="/" exact />
            <Route path="/homepage" exact component={HomePage} />
            <Route path="/union" exact component={Union} />
            <Route path="/linkage" exact component={Linkage} />
            <Route path="/task" exact component={Task} />
            <Route path="/calendar" exact component={Calendar} />
            <Route path="/login" exact component={LoginForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
// class App extends Component {
//   render() {
//     return <Navbar />;
//   }
// }

// export default App;

//  <React.Fragment key="app">
//       <div className="flex flex-col overflow-x-hidden w-screen h-screen space-x-6 bg-gray-300">
//         <Header />
//         <Linkage />
//       </div>
//     </React.Fragment>

//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };

//   //When something created
//   constructor() {
//     // constructor(props)
//     // super(props)
//     super();
//     console.log("App - Constructor");
//     // this.state = this.props;
//   }

//   //To get data from Server and Render it out
//   componentDidMount() {
//     console.log("App - Mounted");
//     // Place to apply Ajax Call and get data from the server
//     // this.setState({movies})
//   }

//   handleReset = () => {
//     const counters = this.state.counters.map((c) => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };

//   handleDelete = (counterID) => {
//     const counters = this.state.counters.filter((c) => c.id !== counterID);
//     this.setState({ counters });
//     console.log("Event Handler Called", counterID);
//   };

//   handleIncrement = (counter) => {
//     // ... is to completely clone the up there counters
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };

//   render() {
//     console.log("App - Rendered");

//     return (
//       <React.Fragment>
//         <NavBar
//           totalCounters={this.state.counters.filter((c) => c.value > 0).length}
//         />
//         <main className="container">
//           <Counters
//             counters={this.state.counters}
//             onReset={this.handleReset}
//             onIncrement={this.handleIncrement}
//             onDelete={this.handleDelete}
//           />
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
