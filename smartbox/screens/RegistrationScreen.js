import React from 'react';
import {
	AppRegistry,
	Button,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View

} from 'react-native';

import {createStackNavigator} from 'react-navigation';

export default class RegistrationScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text1: '',
			text2: '',
			text3: '',
			text4: ''};
	}

	onPress = () => {
		if (this.state.text1.trim() == '') {
			this.setState(() => ({newError: "Please enter your name."}));
		} else if (this.state.text2.trim() == '') {
			this.setState(() => ({newError: "Please enter your username."}));
		} else if (this.state.text3.trim() == '') {
			this.setState(() => ({newError: "Please enter a password"}));
		} else if (this.state.text4.trim() == '') {
			this.setState(() => ({newError: "Please re-enter your password"}));
		} else {
			this.props.navigation.navigate('Home');
		}
	};

	render() {
		const {navigate} = this.props.navigation;
		return (
    	<View>
        	<TextInput
        		style={styles.textStyle}
        		placeholder="Name"
        		onChangeText={(text1) => this.setState({text1})}
        		value={this.state.text1}
        	/>
        	<TextInput
        		style={styles.textStyle}
        		placeholder="Username"
        		onChangeText={(text2) => this.setState({text2})}
        		value={this.state.text2}
        	/>
        	<TextInput
        		style={styles.textStyle}
        		placeholder="Password"
        		onChangeText={(text3) => this.setState({text3})}
        		value={this.state.text3}
        	/>
        	<TextInput
        		style={styles.textStyle}
        		placeholder="Confirm Password"
        		onChangeText={(text4) => this.setState({text4})}
        		value={this.state.text4}
        	/>
        	{!!this.state.newError && (
        		<Text style={{color: "red"}}>{this.state.newError}
        		</Text>
        	)}
			<Button
				title="Register"
				onPress={this.onPress}
			/>	
      	</View>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		borderColor: 'gray',
		borderWidth: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});