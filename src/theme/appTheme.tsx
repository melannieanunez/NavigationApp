import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856d6'
};

const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  },
  title: {
    marginBottom: 10
  },
  button: {
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 10
  },
  buttonText: {
    color: 'white'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 300,
    marginTop: 20
  },
  avatarContainer: {
    alignItems: 'center'
  },
  menuContainer: {
    marginVertical: 10,
    marginHorizontal: 20
  },
  menuButton: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  menuText: {
    fontSize: 20,
    color: colors.primary
  }
});

export default styles;
