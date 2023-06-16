import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop: 0,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    fontSize: 15,
    color: colors.grey,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default styles;
