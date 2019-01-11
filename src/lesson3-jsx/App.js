import React, {Component} from 'react';

class App extends Component {
	showInfo(product) {
		return(
				<div>
				<p>ID: {product.id}</p>
				<p>name: {product.name}</p>
				<p>price: {product.price}</p>
				<p>Status: {product.status ? 'Active' : 'Pending'}</p>
				</div>
			)
	}
	render() {
		var a = 5;
		var product = {
			id: 10,
			name: 'iPhone 6 Plus',
			price: 1000,
			status: true
		};

		var users = [
			{
				id: 1,
				name: 'Nguyen Van A',
				age: 18
			},
			{
				id: 2,
				name: 'Nguyen Van B',
				age: 19
			},
			{
				id: 1,
				name: 'Nguyen Van C',
				age: 29
			}
		];

		var elements = users.map((user, index) => {
			return(
				<div key={index}>
					<h2>Name: {user.name}</h2>
					<p>Age: {user.age}</p>
				</div>
			);
		});
		return (
			
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">Title</a>
						<ul className="nav navbar-nav">
							<li className="active">
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Link</a>
							</li>
						</ul>
					</div>
				</nav>
				<h1>{a}</h1>
				<p>ID: {product.id}</p>
				<p>name: {product.name}</p>
				<p>price: {product.price}</p>
				{this.showInfo(product)}
				{elements}
			</div>
		);
		
	}
}
export default App;