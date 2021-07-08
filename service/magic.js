import { Magic } from '@magic-sdk/react-native';
const magic = new Magic('pk_live_89170ADB732D6340');

export const checkUser = async (cb) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const user = await magic.user.getMetadata();
    return cb({ isLoggedIn: true, email: user.email });
  }
  return cb({ isLoggedIn: false });
};


export const loginUser = async (email) => {

    try {
        const res = await magic.auth.loginWithMagicLink({ email });
        return res;
    } catch (error) {
        return error;
    }
};

export const logoutUser = async () => {
  await magic.user.logout();
};