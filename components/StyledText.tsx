import { Text, TextProps } from 'tamagui';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style,]} />;
}
