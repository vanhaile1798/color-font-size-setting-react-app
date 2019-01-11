import React, {Component} from 'react';
import Products from './Products'

class App extends Component {

	constructor(props) {
		super(props);
		this.onAdd = this.onAdd.bind(this);
	}

	onClick() {
		console.log('App Component');
	}

	onAdd() {
		console.log(this.refs.name.value);
	}

	render() {
		var products = [
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
		];
		let elements = products.map((product, index) => {
			let result = '';
			if (product.status) {
				result = <Products 
							key={product.id}
							price={product.price}
							image={product.image}>
							{product.name}
						</Products>
			}
			return result;
		});
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">Lesson 5 - Ref</a>
					</div>
				</nav>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="panel panel-success">
								<div className="panel-heading">
									<h3 className="panel-title">Add Product</h3>
								</div>
								<div className="panel-body">
									<div className="form-group">
										<label>Product Name</label>
										<input type="text" className="form-control" ref="name" />
									</div>
									<button 
									type="submit" 
									className="btn btn-primary"
									onClick= {this.onAdd}>
										Save
									</button>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							{elements}

						</div>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<button type="button" className="btn btn-default" onClick={this.onClick}>
								Click me!
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;