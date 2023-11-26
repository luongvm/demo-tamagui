import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useKeyboardHeight() {
  const insets = useSafeAreaInsets();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardWillShow", (e) => {
      setKeyboardHeight(e.endCoordinates.height - insets.bottom - 50);
    });
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () =>
      setKeyboardHeight(0),
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [insets.bottom]);

  return keyboardHeight;
}
