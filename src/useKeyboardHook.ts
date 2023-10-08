import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

type UseKeyboardHookReturnType = {
	/** Whether keyboard is visible or not at any given time */
	isKeyboardVisible: boolean;
	/** Offset to make items appear above keyboard, can set this to View bottom margin/padding */
	keyboardOffset: number;
};

type UseKeyboardHookType = {
	/** If AndroidManifest windowSoftInputMode is set to 'adjustResize' set this to false */
	android: boolean;
};

/** Custom hook to track the visibility and offset of the keyboard in a React Native application. */
const useKeyboard = ({android}: UseKeyboardHookType): UseKeyboardHookReturnType => {
	const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);
	const [keyboardOffset, setKeyboardOffset] = useState<number>(0);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			(event) => {
				setKeyboardVisible(true);
				setKeyboardOffset(event.endCoordinates.height);
			}
		);
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => {
				setKeyboardVisible(false);
				setKeyboardOffset(0);
			}
		);

		return () => {
			keyboardDidHideListener.remove();
			keyboardDidShowListener.remove();
		};
	}, []);

	//whether to return keyboard offset in android or not
	const keyboardHeight = android ? keyboardOffset : 0;
	return { isKeyboardVisible: keyboardVisible, keyboardOffset: keyboardHeight };
};

export default useKeyboard;