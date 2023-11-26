import { useToastController } from "@tamagui/toast";
import { useCallback } from "react";
import { Button, Input, Text, View } from "tamagui";
export default function TabOneScreen() {
  const toast = useToastController();
  const showToast = useCallback(() => {
    toast.show("OK", {
      message: "Done",
      native: true,
      burntOptions: {
        from: "bottom",
      },
    });
  }, []);
  return (
    <View className=" bg-gray-400 flex-1 px-2 py-4">
      <Text className="px-2 py-2 text-xl">Input Test</Text>
      <Input placeholder="Type anything" />
      <View className="flex-1" />

      <Button className="px-2 mx-4" theme={"active"} onPress={showToast}>
        Display Toast
      </Button>
    </View>
  );
}
