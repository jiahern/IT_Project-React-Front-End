import React, { Component } from "react";
import NavBar from "./Components/Header/navbar";
import "./App.css";
import Counters from "./Components/counters";
import Header from "./Components/Header/header";
import Linkage from "./Components/Linkage/linkage";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <body class="flex flex-col overflow-hidden items-center w-screen h-screen space-x-6 bg-gray-300">
          <Header />
          <Linkage />
        </body>
      </React.Fragment>
    );
  }
}

export default App;

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
