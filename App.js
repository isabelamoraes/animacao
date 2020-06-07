import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Picker, Alert, View } from 'react-native'
import Lottie from 'lottie-react-native'

import bday from './bday.json'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "12/01",
      hoje: "",
      tipo: ""
    };
  }

  onValueChange(value) {
    this.setState({
      tipo: value
    });
    Alert.alert("Deu certo", "alterou")
  }
  componentDidMount() {
    var dia = new Date().getDate()
    var mes = new Date().getMonth()
    this.setState({ hoje: dia + "/" + mes + 1 })
  }

  render() {

    return (
      this.state.data == this.state.hoje ?
        <SafeAreaView style={styles.container}>
          <Text style={styles.titulo}>Feliz Aniversário, Isabela!</Text>
          <Text style={styles.subtitulo}>{"\n"}
            Desejamos que esse dia especial seja repleto de alegrias.
            Muita saúde, felicidades e realizações!
      </Text>
          <Lottie resizeMode="contain" autoSize source={bday} autoPlay loop></Lottie>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Ir para a Página Inicial
        </Text>
          </TouchableOpacity>
        </SafeAreaView>
        :
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Ir para a Página Inicial
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  titulo: {
    fontSize: 28,
    color: '#2d2d2d',
    fontWeight: 'bold'
  },
  subtitulo: {
    fontSize: 18,
    color: '#808080',
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    elevation: 2,
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    color: '#2d2d2d',
    fontWeight: 'bold',
    marginTop: 12
  },
  input: {
    width: '85%',
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 10,
    fontSize: 16,
    color: "#2d2d2d",
    borderRadius: 5
  }, select: {
    width: '100%',
    backgroundColor: "#fff",
    padding: 0,
  },
  picker: {
    width: '100%',
    color: "#2d2d2d",
    fontSize: 16,
  },
})
