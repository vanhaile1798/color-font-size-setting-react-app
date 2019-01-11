import React, {Component} from 'react';

import './css/App.css';

class ColorPicker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			colors: ['rgba(246, 36, 89, 1)', '#15c26b', 'rgba(2, 179, 228)', 'rgb(255, 203, 5)']
		}
	}

	showColor(color) {
		return {
			backgroundColor: color
		};
	}

	setActiveColor(color) {
		this.props.onReceiveColor(color);
	}

	render() {
		let elmColors = this.state.colors.map((color, index) => {
			return <span 
						key={index} 
						style={ this.showColor(color)}
						className={this.props.color === color ? 'active color--box' : 'color--box'}
						onClick={() => {this.setActiveColor(color)}}>
					</span>
		});
		return(
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Color Picker</h3>
					</div>
					<div className="panel-body">
						{elmColors}
						<hr />
					</div>
				</div>
			</div>	
		);
	}
}

export default ColorPicker;