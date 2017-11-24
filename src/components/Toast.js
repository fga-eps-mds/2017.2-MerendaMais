import Toast from 'react-native-root-toast';

const ShowToast = {
  Toast: (message) => {
    Toast.show(message, {
      duration: Toast.durations.SHORT,
      position: -100,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  },
};

export default ShowToast;
