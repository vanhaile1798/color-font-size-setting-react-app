import React, {Component} from 'react';

class Products extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		console.log(this.props.children);
		alert(this.props.children + ' ' + this.props.price);
	}
	render() {
		return (
			<div>
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<div className="thumbnail">
						<img src={this.props.image} alt={this.props.image} />
						<div className="caption">
							<h3>{this.props.children}</h3>
							<p>
								${this.props.price}
							</p>
							<p>
								<a href="#" className="btn btn-primary" onClick={this.onClick}>Buy</a>
							
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Products;