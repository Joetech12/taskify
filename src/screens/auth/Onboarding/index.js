import React from 'react';
import {Image, Text, View} from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          style={styles.image}
          source={require('../../../assets/onboarding2.png')}
        />

        <View style={styles.footer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Taskify</Text>
        <Text style={styles.subtitle}>
          Sort your tasks, boast your productivity.
        </Text>

        <Button onPress={() => navigation.navigate('Signin')}>Log in</Button>
        <Button onPress={() => navigation.navigate('Signup')} type={'blue'}>
          Get started
        </Button>
      </View>
    </View>
  );
};

export default React.memo(Onboarding);
