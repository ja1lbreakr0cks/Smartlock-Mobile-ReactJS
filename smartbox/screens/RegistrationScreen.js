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

const App = createStackNavigator({
	Home: {screen: HomeScreen},
	Registration: {screen: RegistrationScreen},
})

export default class RegistrationScreen extends React.Component {
	static navigationOptions = {
		title: 'Home'
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
          <div>
			<View style={styles.textStyle}>
			<TextInput
				style={{height: 40}}
				placeholder="Display Name"
				onChangeText= {(text) => this.setState({text})}
			/>
			<TextInput
				style={{height: 40}}
				placeholder="Username"
				onChangeText= {(text) => this.setState({text})}
			/>
			<TextInput
				style={{height: 40}}
				placeholder="Password"
				onChangeText= {(text) => this.setState({text})}
			/>
			<TextInput
				style={{height: 40}}
				placeholder="Confirm Password"
				onChangeText= {(text) => this.setState({text})}
			/>
            </View>
            <View style={styles.buttonStyle}>
              <Button
					onPress={ ()=> navigate('Home')}
					title="Register"
				/>
				<Button
					onPress={ ()=> navigate('Home')}
					title="Cancel"
				/>
            </View>
          </div>
		);
	}
}

const styles = StyleSheet.create({
	textStyle: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonStyle: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});