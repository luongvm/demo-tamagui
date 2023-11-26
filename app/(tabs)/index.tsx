import { useToastController } from "@tamagui/toast";
import { useCallback } from "react";
import { Button, Text, View } from "tamagui";
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
    <View>
      <Text>Tab One - Hello</Text>
      <View />

      <Button theme={"active"} onPress={showToast}>
        Plain
      </Button>
    </View>
  );
}
