import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../types/rootStack";
import { setaVolta } from "../../../../assets";
import { MenuInferior } from "../../../../components";

type ContinuarScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "TelaConfiguracoes"
>;

type Props = {
    navigation: ContinuarScreenNavigationProp;
};

const Configuracoes: React.FC<Props> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.cima}>
                <TouchableOpacity style={styles.volta}>
                    <Image source={setaVolta} />
                </TouchableOpacity>
                <Text style={styles.titulo}>Configurações</Text>
            </View>
            <View style={styles.conteudo}>
                <TouchableOpacity style={styles.buttonInformacoes} onPress={() => navigation.navigate("TelaInformacoes")}>
                    <Text style={styles.textoButton}>Informações de cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutros} onPress={() => navigation.navigate("TelaTrocaSenha")}>
                    <Text style={styles.textoButton}>Mudar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutros} onPress={() => navigation.navigate("TelaLogin")}>
                    <Text style={styles.textoButton}>Excluir conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutros} onPress={() => navigation.navigate("TelaLogin")}>
                    <Text style={styles.textoButton}>Premium</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogout} onPress={() => navigation.navigate("TelaLogin")}>
                    <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 900, }}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
            <MenuInferior></MenuInferior>
        </View>
    );
}

export default Configuracoes;
/*
<View style={styles.conteudo}>
                <TouchableOpacity style={styles.buttonInfo} onPress={() => navigation.navigate("TelaLogin")}>
                    <Text style={styles.textoButton}>Informações de cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutros} onPress={() => navigation.navigate("TelaLogin")}>
                    <Text style={styles.textoButton}>Mudar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutros} onPress={() => navigation.navigate("TelaLogin")}>
                    <Text style={styles.textoButton}>Excluir conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOutros} onPress={() => navigation.navigate("TelaLogin")}>
                    <Text style={styles.textoButton}>Premium</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogout} onPress={() => navigation.navigate("TelaLogin")}>
                    <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 900, }}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
            <MenuInferior></MenuInferior>*/