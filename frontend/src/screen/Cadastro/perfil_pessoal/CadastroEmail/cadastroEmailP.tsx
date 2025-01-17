import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../types/rootStack";
import { image02, setaVolta } from "../../../../assets";
import ContinueButton from "../../../../components/Cadastro/Continuar/botao_continuar";
import { useUserCadastro } from "../../../../context/UserCadastroContext";

type ContinuarScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CadastroEmail"
>;

type Props = {
  navigation: ContinuarScreenNavigationProp;
};

const CadastroEmail: React.FC<Props> = ({ navigation }) => {
  const { updateUserData } = useUserCadastro();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showImage, setShowImage] = useState(true); // Estado para controlar a visibilidade da imagem

  const handleContinue = () => {
    updateUserData({ email, password });
    navigation.navigate("CadastroSexoIdade");
    console.log(updateUserData);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setShowImage(true); // Mostrar imagem ao clicar fora
        }}
      >
        <View>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.arrow}
              onPress={() => navigation.navigate("CadastroNome")}
            >
              <Image source={setaVolta} style={styles.arrow} />
            </TouchableOpacity>
            <Text style={styles.headerlabel}>(2/5)</Text>
          </View>
          {showImage && (
            <Image source={image02} style={styles.image} resizeMode="contain" />
          )}
          <Text style={styles.textgeral}>Insira seu email</Text>
          <TextInput
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
            onFocus={() => setShowImage(false)} // Ocultar imagem ao focar no input
          />
          <Text style={styles.textgeral}>Insira sua senha</Text>
          <TextInput
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
            style={styles.input}
            onFocus={() => setShowImage(false)} // Ocultar imagem ao focar no input
          />
          <View style={styles.buttoncontainer}>
            <ContinueButton onPress={handleContinue} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CadastroEmail;
