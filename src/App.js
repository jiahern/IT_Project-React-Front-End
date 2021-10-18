import "./App.css";
import "./tailwind.min.css";

import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useEffect, useState, View } from "react";
import LoginForm, { Logout } from "./Components/Login/login";

import HomePage from "./Components/Home/HomePage";
import Profile from "./Components/Profile/Profile";
import EditProfile from "./Components/Profile/EditProfile";
import ChangePassword from "./Components/Profile/ChangePassword";
import Union from "./Components/Union/Union";
import EditUnion from "./Components/Union/EditUnion";
import Linkage from "./Components/Linkage/Linkage";
import Task from "./Components/Tasks/Task";
import editTask from "./Components/Tasks/editTask";
import pastTask from "./Components/Tasks/pastTask";
import Loading from "./Components/Loading/Loading";
// import Calendar from "./Pages/Calendar";
import RegisterForm from "./Components/Register/register";
import Cookies from "js-cookie";
import EditLinkageComp from "./Components/Linkage/EditLinkageComp";
import ShowCalendar from "./Components/Calendar/Calendar";

function App() {
  const [inactive, setInactive] = useState(false);
  // const [auth, setAuth] = useState(false);
  // const readCookies = () => {
  //   const isLogIn = Cookies.get("token");
  //   if (isLogIn) {
  //     setAuth(true);
  //   }
  // };
  // React.useEffect(() => {
  //   readCookies();
  // }, []);
  return (
    <div className="allpage">
      <Router>
        <Switch>
          <IsAuthenticatedRoute path="/login" exact component={LoginForm} />
          <Route exact path="/logout" component={Logout} />
          <IsAuthenticatedRoute
            exact
            path="/Register"
            component={RegisterForm}
          />

          <div>
            <Navbar
              onCollapse={(inactive) => {
                setInactive(inactive);
              }}
            />
            <div className={inactive ? "contain inactive" : "contain"}>
              <Switch>
                <Route path="/" exact>
                  {" "}
                  <Redirect to="/homepage" />{" "}
                </Route>
                <ProtectedRoute path="/homepage" exact component={HomePage} />
                <Route path="/loading" exact component={Loading} />
                <ProtectedRoute path="/union" exact component={Union} />
                <ProtectedRoute path="/profile" exact component={Profile} />
                <ProtectedRoute path="/profile/:profileID" exact component={EditProfile} />
                <Route path="/password" exact component={ChangePassword} />
                <Route path="/union/:unionID" exact component={EditUnion} />
                <ProtectedRoute path="/linkage" exact component={Linkage} />
                <Route
                  path="/linkage/:linkageID"
                  exact
                  component={EditLinkageComp}
                />
                <ProtectedRoute path="/task" exact component={Task} />
                <ProtectedRoute path="/task/past" exact component={pastTask} />
                <Route path="/task/:taskID" exact component={editTask} />
                <ProtectedRoute path="/calendar" exact component={ShowCalendar} />
                <ProtectedRoute path="*" component={() => "404 NOT FOUND"} />
                {/* <Route exact path="/" /> */}
              </Switch>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

const IsAuthenticatedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        !Cookies.get("token") ? <Component /> : <Redirect to="/homepage" />
      }
    />
  );
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        Cookies.get("token") ? <Component /> : <Redirect to="/login" />
      }
    />
  );
};

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
