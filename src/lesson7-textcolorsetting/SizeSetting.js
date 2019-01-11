import React, {Component} from 'react';

import './css/App.css';

class SizeSetting extends Component {

	changeSize(val) {
		this.props.onChangeSize(val);
	}
	
	render() {
		return(
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Size: {this.props.fontSize}px</h3>
				</div>
				<div className="panel-body">
					<button type="button" className="btn btn-success mr-16 custom-btn" onClick={() => this.changeSize(-2)}>Decrease</button>
					<button type="button" className="btn btn-success custom-btn" onClick={() => this.changeSize(2)}>Increase</button>
					
				</div>
			</div>	
		);
	}
}

export default SizeSetting;