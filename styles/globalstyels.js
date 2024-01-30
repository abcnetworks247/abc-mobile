import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: npLBlue,
       marginTop: Platform.OS === 'ios' ? 20 : 0
    },
});