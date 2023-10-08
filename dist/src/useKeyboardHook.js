"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
/** Custom hook to track the visibility and offset of the keyboard in a React Native application. */
const useKeyboard = ({ android }) => {
    const [keyboardVisible, setKeyboardVisible] = (0, react_1.useState)(false);
    const [keyboardOffset, setKeyboardOffset] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const keyboardDidShowListener = react_native_1.Keyboard.addListener('keyboardDidShow', (event) => {
            setKeyboardVisible(true);
            setKeyboardOffset(event.endCoordinates.height);
        });
        const keyboardDidHideListener = react_native_1.Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
            setKeyboardOffset(0);
        });
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    //whether to return keyboard offset in android or not
    const keyboardHeight = android ? keyboardOffset : 0;
    return { isKeyboardVisible: keyboardVisible, keyboardOffset: keyboardHeight };
};
exports.default = useKeyboard;
