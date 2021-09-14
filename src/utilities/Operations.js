import AsyncStorage from '@react-native-async-storage/async-storage';

const storeAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    //
  }
};

const getAsyncData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return null;
    } else {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export default {
  storeAsyncData,
  getAsyncData,
};
