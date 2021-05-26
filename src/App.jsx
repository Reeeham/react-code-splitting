import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import React, { lazy, Suspense } from 'react'
import ErrorBoundary from "./ErrorBoundary";

const LazyProfile =  lazy(() => import("./Profile"))
const LazyDashboard = lazy(() => import("./Dashboard"))

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <ErrorBoundary>
        <Suspense fallback="Loading...">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <LazyProfile />
          </Route>
          <Route exact path="/dashboard">
            <LazyDashboard />
          </Route>
        </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
