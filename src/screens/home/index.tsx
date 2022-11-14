import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export default function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou para adicionar");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React native</Text>
      <Text style={styles.eventDate}>Sexta, 24 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}
