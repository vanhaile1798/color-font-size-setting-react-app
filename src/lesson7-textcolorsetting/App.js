import React, {Component} from 'react';

import './css/App.css';

import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';
import Reset from './Reset';
import Result from './Result';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			color: 'rgba(246, 36, 89, 1)',
			fontSize: 12
		};
		this.onSetColor = this.onSetColor.bind(this);
		this.onChangeSize = this.onChangeSize.bind(this);
		this.onSettingDefault = this.onSettingDefault.bind(this);
	}

	onSetColor(param) {
		console.log(param);
		this.setState({
			color: param
		});
	}

	onChangeSize(value) {
		if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
			this.setState({
				fontSize: this.state.fontSize + value
			});
		}
	}

	onSettingDefault(value) {
		if (value) {
			this.setState({
				color: 'rgba(246, 36, 89, 1)',
				fontSize: 12
			});
		}
	}

	render() {
		return(
			<div className="container mt-50">
				<div className="row">
					<ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<SizeSetting 
							fontSize={this.state.fontSize}
							onChangeSize={this.onChangeSize}/>
						<Reset onSettingDefault={this.onSettingDefault}/>
					</div>
					<Result 
						color={this.state.color} 
						fontSize={this.state.fontSize}/>
				</div>
			</div>
		);
	}
}

export default App;