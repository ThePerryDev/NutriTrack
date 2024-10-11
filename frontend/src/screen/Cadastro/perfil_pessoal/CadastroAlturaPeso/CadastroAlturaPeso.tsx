import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { imagem4, setaVolta } from "../../../../assets";
import styles from "./Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../types/rootStack";
import { AuthContext } from "../../../../context/auth/AuthContext";
import user from "../../../../services/userService";
import ContinueButton from "../../../../components/Cadastro/Continuar/botao_continuar";

type ContinuarScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CadastroAlturaPeso"
>;

type Props = {
  navigation: ContinuarScreenNavigationProp;
};

const CadastroAlturaPeso: React.FC<Props> = ({ navigation }) => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.arrow}
            onPress={() => navigation.navigate("CadastroSexoIdade")}
          >
            <Image source={setaVolta} style={styles.arrow} />
          </TouchableOpacity>
          <Text style={styles.headerlabel}>(4/5)</Text>
        </View>
      <Image source={imagem4} style={styles.image} resizeMode="contain" />
      <Text style={styles.textgeral}>Insira sua altura</Text>
      <TextInput
        value={height}
        onChangeText={(height) => setHeight(height)}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={styles.textgeral}>Insira seu peso</Text>
      <TextInput
        value={weight}
        onChangeText={(weight) => setWeight(weight)}
        style={styles.input}
        keyboardType="numeric"
      />
      <View style={styles.buttoncontainer}>
        <ContinueButton onPress={() => navigation.navigate("TelaPPObjetivo")} />
      </View>
    </View>
  );
};

export default CadastroAlturaPeso;