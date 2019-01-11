import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
    	<div>
    		
    		<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Lesson 2</a>
					<ul className="nav navbar-nav">
						<li >
							<a href="#">Home</a>
						</li>
						<li className="active">
							<a href="#">Products</a>
						</li>
					</ul>
				</div>
			</nav>
    	</div>
    );
  }
}

export default Header;
