import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import styles from "./styles";

interface FinalizeButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title?: string;
}

const FinalizeButton: React.FC<FinalizeButtonProps> = ({ onPress, title = "Finalizar" }) => {
  return (
    <TouchableOpacity style={styles.continuebutton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}; 

export default FinalizeButton;