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

import HomeScreen from './screens/HomeScreen';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
	name: t.String,
	username: t.String,
	password: t.String,
	cpassword: t.String
});

export default class RegistrationScreen extends React.Component {
	onPress = () => {
		const value = this._form.getValue();
		if (value) {
			console.log(value);
		}
	}

	render() {
		return (
    	<View style={styles.textStyle}>
        	<Form  
        		ref={c => this._form = c}
        		type={User}
			/>
			<Button
				title="Register"
				onPress={ this.onPress}
			/>	
      	</View>
		);
	}
}

const options = {
	fields: {
		name: {
			error: 'Please enter your name.'
		},
		username: {
			error: 'Please enter a username'
		},
		password: {
			error: 'Please enter a password'
		},
		cpassword: {
			error: 'Please enter your password again.'
		},
	},
};

const styles = StyleSheet.create({
	textStyle: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
});