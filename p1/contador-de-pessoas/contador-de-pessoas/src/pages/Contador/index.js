import { View, Text } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/Botao'

export default function Contador(){
  const [cont, setCont] = useState(0)

  function incrementar(){
    setCont(cont + 1)
  }

  function decrementar(){
    if (cont > 0)
      setCont(cont - 1)
  }

  function zerar(){
    setCont(0)
  }

  return(
    <View>
      <Text style={styles.titulo}>Contador de Pessoas</Text>

      <Text style={styles.contador}>{cont}</Text>

      <Botao titulo='Incrementar' cor='darkgreen' funcao={incrementar}/>

      <Botao titulo='Decrementar' cor='red' funcao={decrementar}/>

      <Botao titulo='Zerar/Reset' cor='grey' funcao={zerar} />
    </View>
  )
}