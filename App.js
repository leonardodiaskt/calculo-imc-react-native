import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React,{ useState } from 'react';

export default function App() {
  
  const [altura, setAltura] = useState();
  const [massa, setMassa] = useState();
  const [imc, setIMC] = useState();
  const [result, setResult] = useState();

  function calcularIMC(){
    const resultado = massa/(altura*altura)
    setIMC(resultado)
    setResult(resultado)

    if(resultado <= 18.4){
      setIMC("Magreza")
    }
    else if(resultado >= 18.5 && resultado <= 24.9){
      setIMC("Normal")
    }
    else if(resultado >= 25 && resultado <= 29.9){
      setIMC("Acima do Peso")
    }
    else if(resultado >= 30 && resultado <= 39.9){
      setIMC("Obesidade")
    }
    else{
      setIMC("Obesidade Grave")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Cálculo de IMC</Text>

      <TextInput placeholder="Digite sua Altura"
                 style={styles.textArea}
                 keyboardType={"numeric"}
                 onChangeText={altura => setAltura(altura)}>             
      </TextInput>

      <TextInput placeholder="Digite sua Massa corporal"
                 style={styles.textArea}
                 keyboardType={"numeric"}
                 onChangeText={massa => setMassa(massa)}>
      </TextInput>

      <Button title="Calcular IMC" onPress={calcularIMC}></Button>

      <Text style={{fontSize: 16, color: 'white'}}>{result ? `IMC: ${result}`: ''}</Text>
      <Text style={{fontSize: 16, color: 'white'}}>{imc ? `Classificação: ${imc}`: ''}</Text>
      <Text> </Text>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033c73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    width: 250,
    height: 40,
    textAlign: "center",    
    marginBottom: 10,
    borderBottomColor: 'white',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 5,
    color: 'white',
  },
  texts: {
    fontSize: 30,
    fontFamily: 'arial',
    marginBottom: 10,
    color: 'white'
  },
});
