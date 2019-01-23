import React from "react"
import * as firebase from 'firebase'
import { StyleSheet, Text, View, Image, Button } from "react-native"
import Expo from "expo"

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBK0YgYMi9LzdbTLzLGyFk7uXtki47RcmA",
    authDomain: "junior-design-smart-lock.firebaseapp.com",
    databaseURL: "https://junior-design-smart-lock.firebaseio.com",
    projectId: "junior-design-smart-lock",
    storageBucket: "junior-design-smart-lock.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "477326195173-i52ret8l0n5t9gdr2o4ub9lvfbqg3mun.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        const provider = new firebase.auth.GoogleAuthProvider()
        const credential = provider.credential(
            result.idToken, result.accessToken);
        firebaseApp.auth().signInAndRetrieveDataWithCredential(credential)
            .then(user => {console.log(user);})
            .catch(error => {console.log(error);});

        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
