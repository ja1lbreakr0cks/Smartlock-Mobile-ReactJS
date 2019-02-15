import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';


//import {createStackNavigator} from 'react-navigation';

export default class HomeScreen extends React.Component {
  //static navigationOptions = {
    //header: "Smartbox Details",
  //};

  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
      <View style={{flex: 1}}>
        <Text style={styles.getStartedText}>SmartBox Details</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex:1}}/>
	  <Button style={{flex:3}} title="Unlock"></Button>
	  <View style={{flex:1}}/>
	  <View style={{flex:3, flexDirection:'column'}}>
	  <Text>SmartBox</Text>
	  <Text>Unlocked</Text>
	  <Text>Connected</Text>
	  </View>
      </View>
      <View style={{flex:3}}/>
      <View style={{flex: 10}}>
        <View style={{flex:1, flexDirection:'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{flex: 2, flexDirection:'row', justifyContent: 'center'}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>History</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={{flex:2, flexDirection:'row', justifyContent: 'center'}}>
          <TouchableOpacity style={{flex: 2, flexDirection:'row', justifyContent: 'center'}}>
          <View style={styles.button}>
            <Text style={[styles.buttonText,{transform: [{ rotate: '45deg'}]}]}>Passcode</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 2, flexDirection:'row', justifyContent: 'center'}}>
          <View style={styles.button}>
            <Text style={[styles.buttonText, {transform: [{ rotate: '-45deg'}]}]}>Users</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight + 15
      }
    })
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonText: {
    padding: 26,
    color: 'black',
    fontSize: 25
  }
});
