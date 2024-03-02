import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from './Themed'
import { AntDesign } from '@expo/vector-icons';
type Coin={
    name:string,
    close:string,
    symbol:string,
    percent_change:string
}
type CoinListItem={
    coin:Coin
}
const coinsList = ({coin}:CoinListItem) => {
  const fixPrice=(str:string,toFixed:number)=>Number(Number.parseFloat(str).toFixed(toFixed))
  const change=fixPrice(coin.percent_change,2)
  return (
    <View style={styles.container}>
      <View style={styles.left}>
      <Text style={styles.symbol}>{coin.symbol}{"    "}
      <AntDesign name="staro" size={24} color="black" />
      </Text>
      <Text>{coin.name}</Text>
      </View>

      <View style={styles.right}>
      <Text>{fixPrice(coin.close,2)}</Text>
      <Text style={{color:change>0?"green":'red',fontSize:18}}>
       {change>0&&"+"} {fixPrice(coin.percent_change,2)}%</Text>
      </View>
    </View>
  )
}

export default coinsList

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    // justifyContent:"space-between",
    fontSize:18,
    fontWeight:'bold',
  },
  left:{
    flex:1,
    gap:5
  },
  right:{
    alignItems:'flex-end',
    gap:5
  },
  symbol:{
    color:'darkorange',
    fontSize:20,

  }
})