import React, { useState } from "react";
import { Text, Button } from "react-native";
import AppTextInput from "./AppTextInput";

function InstructionsInput({ item, set, list, name, stepLabel }) {
  const [shuttle, setShuttle] = useState(item.content);

  const handleChange = (text) => {
    setShuttle(text);
    const index = list.findIndex((obj) => obj.step === item.step);
    list[index].content = text;
  };
  return (
    <>
      <Text>
        {stepLabel} {item.step}{" "}
      </Text>

      <AppTextInput
        onChangeText={(text) => handleChange(text)}
        value={shuttle}
        maxLength={1000}
        multiline
        numberOfLines={4}
        ANDROIDS
        name={name}
        placeholder={name + " . . ."}
      />
    </>
  );
}

export default InstructionsInput;
