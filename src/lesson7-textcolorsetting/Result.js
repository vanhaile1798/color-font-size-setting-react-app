import React, {Component} from 'react';

import './css/App.css';

class Result extends Component {

	setStyle() {
		return {
			color: this.props.color,
			borderColor: this.props.color,
			fontSize: this.props.fontSize
		};
	}
	render() {
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<p>Color: {this.props.color} - font size: {this.props.fontSize}px</p>
				<div id='content' style={this.setStyle()}>
					Setting content
				</div>
			</div>
		);
	}
}

export default Result;