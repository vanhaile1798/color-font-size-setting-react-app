import React, {Component} from 'react';
import Products from './Products'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products : [
				{
					id: 1,
					name: 'iphone 6 Plus',
					price: 1000,
					image: 'https://smb.optus.com.au/opfiles/Business/Assets/images/Responsive%20product%20page/Apple/iPhone%206%20Plus/iphone6-plus-spacegrey.png',
					status: true
				},
				{
					id: 2,
					name: 'Samsung Galaxy S9',
					price: 1500,
					image: 'http://image.samsung.com/us/smartphones/galaxy-s9/phones/S9/Black/0914-GI-GS9-PDP-Front-Black.jpg',
					status: true
				}
			],
			isActive: true
		};
		this.onSetState = this.onSetState.bind(this);
	}

	onSetState() {
		this.setState({
			isActive: !this.state.isActive
		});
	}

	render() {
		let elements = this.state.products.map((product, index) => {
			let result = '';
			if (product.status) {
				result = <tr key={index}>
							<td>{index}</td>
							<td>{ product.name }</td>
							<td>
								<span className="label label-success">${product.price}</span>
							</td>
						</tr>
			}
			return result;
		});
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">Lesson 6 - State</a>
					</div>
				</nav>
				<div className="container">
					<div className="row">
						<table className="table table-bordered table-hover">
							<thead>
								<tr>
									<th>Pos</th>
									<th>Product Name</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								{this.state.isActive ? elements : ''}
							</tbody>
						</table>
						<button type="button" className="btn btn-warning" onClick={this.onSetState}>
							Active: {this.state.isActive ? 'true' : 'false'}
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default App;