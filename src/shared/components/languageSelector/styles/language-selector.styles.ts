import { StyleSheet } from 'react-native';

const languagesSelectorStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  },
  option: {
    paddingVertical: 12,
  },
  close: {
    paddingTop: 16,
    alignItems: 'center',
  },
});

export { languagesSelectorStyles };
