import React, { Component } from 'react';
import './App.css';
import Today from './components/Today'
import History from './components/History'


class App extends Component {
  render() {
    return (
		<div className="">
			<div className="top-header">
				<header className="container">
					<nav className="navbar">
						<div className="navbar-brand">
							<span className="navbar-item">PusherCoins</span>
						</div>
						<div className="navbar-end">
							<a className="navbar-item" href="https://pusher.com" target="_blank" rel="noopener noreferrer">Pusher.com</a>
						</div>
					</nav>
				</header>
			</div>
			<section className="results--section">
				<div className="container">
					<h1>PusherCoins is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
				</div>
				<div className="restuls--section__inner">
					<Today />
					<History />
				</div>
			</section>
		</div>
    );
  }
}

export default App;
