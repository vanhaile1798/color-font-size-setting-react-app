import React, {Component} from 'react';

import './css/App.css';

class Reset extends Component {

	onResetDefault = () => {
		this.props.onSettingDefault(true);
	}

	render() {
		return(
			<button type="button" className="btn btn-primary custom-btn reset-btn" onClick={this.onResetDefault}>Reset</button>		
		);
	}
}

export default Reset;