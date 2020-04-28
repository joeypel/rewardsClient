import React, { useEffect, useState } from "react";
import {
  Modal,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  Linking,
  AsyncStorage
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from '../constants/Colors'

import { useSelector } from 'react-redux'

export default AccountModal = props => {
  const userToken = useSelector(state => state.auth.token);
  // console.log(userToken)
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const tryLogin = async () => {
      // const userData = await AsyncStorage.getItem('userData');
      // console.log(userData)
      if (!userToken) {
        setLoggedIn(false)
        // props.navigation.navigate('Auth');
        // return(<View><Text>Bonner</Text></View>)
        // return;
      }

      else {
        setLoggedIn(true)
      }
    }

    tryLogin();
  }, [loggedIn]);


  if (loggedIn) {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: Colors.backgroundColorThird,
              borderColor: Colors.divider,
              borderWidth: 1,
              borderStyle: "solid",
              // backgroundColor: "white",
              elevation: 20,
              // padding: 10,
              borderRadius: 4
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  padding: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Button title="My account" onPress={() => { }} />
                <Button title="Sign out..." onPress={() => { AsyncStorage.removeItem('userData') }} />
                <Button
                  title="Contact Us"
                  onPress={() => Linking.openURL("mailto:support@example.com")}
                />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="logo-instagram" size={36} />
                  <Button title="Follow us on Instagram!"></Button>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  else {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: Colors.backgroundColorThird,
              borderColor: Colors.divider,
              borderWidth: 1,
              borderStyle: "solid",
              // backgroundColor: "white",
              elevation: 20,
              // padding: 10,
              borderRadius: 4
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  padding: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Button title="Log In" onPress={() => { AsyncStorage.setItem('userData', "3444123423") }} />
                <Button title="Log In" onPress={() => { AsyncStorage.getItem('userData').then(data => console.log(data)) }} />
                <Button title="Sign Up" onPress={() => { props.navigation.navigate('Auth') }} />
                <Button
                  title="Contact Us"
                  onPress={() => Linking.openURL("mailto:support@example.com")}
                />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="logo-instagram" size={36} />
                  <Button title="Follow us on Instagram!"></Button>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  top: { flex: 1 },
  profilePictureContainer: { height: 125, width: 125, alignItems: "center" },
  profilePicture: { height: "100%", width: "100%" },
  bottom: { flex: 2, justifyContent: "space-evenly", alignItems: "center" }
});
