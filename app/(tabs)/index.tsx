import { useToastController } from "@tamagui/toast";
import { useCallback, useEffect } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import { Button, Input, Text, View } from "tamagui";

import { useKeyboardHeight } from "../../hooks/useKeyboardHeight";
export default function TabOneScreen() {
  const toast = useToastController();
  const kbHeight = useKeyboardHeight();
  const xHeight = useSharedValue(0);
  useEffect(() => {
    if (kbHeight !== undefined) {
      xHeight.value = withTiming(kbHeight);
    }
  }, [kbHeight, xHeight]);
  const showToast = useCallback(() => {
    toast.show("OK", {
      message: "Done",
      native: true,
      burntOptions: {
        from: "bottom",
      },
    });
  }, [toast]);
  return (
    <View className=" bg-gray-400 px-2 py-4 flex-1">
      <Text className="px-2 py-2 text-xl">Input Test</Text>
      <Input placeholder="Type anything" />
      <View className="flex-1" />
      <Button className="px-2 mx-4" theme="active" onPress={showToast}>
        Display Toast
      </Button>
      {/* padding when keyboard show */}
      <Animated.View style={{ height: xHeight }} />
    </View>
  );
}
