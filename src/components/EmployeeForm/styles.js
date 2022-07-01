import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {margin: 10},
  divider: {borderColor: 'black', borderWidth: 1, marginBottom: 5},
  heading: {fontSize: 18, fontWeight: '600', marginBottom: 5, color: 'black'},
  input: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
  },
  validationText: {fontSize: 12, paddingVertical: 2},
  greenColor: {color: 'green'},
  redColor: {color: 'red'},
  eyeButton: {position: 'absolute', right: 10, top: 10},
  eyeIcon: {height: 20, width: 25},
});
