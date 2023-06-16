import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import {
  Linking,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import colors from '../../constants/colors';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../constants/links';

function DrawerContent(props) {
  const {navigation} = props;
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.link}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
            <Text style={styles.link}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>
            <Text style={styles.link}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>
            <Text style={styles.link}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <Text style={styles.link}>Log out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Ifeanyi Umeh © 2023</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  link: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 13,
    marginVertical: 12,
    marginHorizontal: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.lightGrey,
    borderRadius: 8,
  },
  container: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // borderWidth: 1,
    // borderColor: colors.lightGrey,
    height: 800,
  },
  footerText: {
    color: colors.Grey,
    fontSize: 13,
    opacity: 0.5,
  },
  footerContainer: {
    // width: '100%',
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
    // borderColor: colors.lightGrey,
    color: colors.lightGrey,
    fontSize: 12,
    marginVertical: 12,
    marginHorizontal: 16,
    padding: 8,
  },
});

export default React.memo(DrawerContent);
