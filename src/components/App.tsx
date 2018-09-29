import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

interface AppProps {
  message: string,
}

export default function({ message }: AppProps ) {
  const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  )

  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  )

  const Topics = () => (
    <div>
      <h2>Topics</h2>
    </div>
  )

  return (
    <Router>
      <div className='app'>
        <ul style={{ display: 'flex', listStyle: 'none' }}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>

        <hr/>

        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/topics' component={ Topics } />
      </div>
    </Router>
  );
}