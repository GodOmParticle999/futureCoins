import { StyleSheet,FlatList } from 'react-native';
import { Text, View } from '@/components/Themed';
import CoinsList from '@/components/CoinsListItem';
import demoCoins from '../../../assets/data/demoCoins.json'
export default function TabOneScreen() {

  // transforming object into array
  const coins =Object.values(demoCoins)

  return (
    <View style={styles.container}>
       <FlatList
        data={coins} 
       renderItem={({item})=><CoinsList coin={item}/>}
       contentContainerStyle={{padding:20,gap:20}}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});
