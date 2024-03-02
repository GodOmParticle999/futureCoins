import { Text, View } from "@/components/Themed"
import { Stack, useLocalSearchParams } from "expo-router"
import demoCoins from '../../assets/data/demoCoins.json'
import CoinsListItem from "@/components/CoinsListItem"

const CoinDetails=()=>{
    const {coin}=useLocalSearchParams()
    const crytoCoin=demoCoins[coin]
    console.log(crytoCoin)
    if(!crytoCoin) return(
        <Text>{coin} is not found</Text>
    )
    return(
        <View style={{padding:10}}>
        <Stack.Screen options={{title:crytoCoin.symbol ,headerTitleAlign:'center'}}/>
        <CoinsListItem coin={crytoCoin}/>
        </View>
    )
}

export default CoinDetails