import { StyleSheet, Text, View } from 'react-native';
import DiceOne from "./assets/One.png"
import DiceTwo from "./assets/Two.png"
import DiceThree from "./assets/Three.png"
import DiceFour from "./assets/Four.png"
import DiceFive from "./assets/Five.png"
import DiceSix from "./assets/Six.png"
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {

  const Dice = ({imgUrl}) => {
    return(
      <View>
          <Image style={styles.diceImage} source={imgUrl}/>
        </View>
      )
    }

    const [DiceImage, setDiceImage] = useState(DiceOne)    
    
    const RollTheDice = () =>{
      const number = Math.floor(Math.random() * 6) + 1
      if (number === 1) {
        setDiceImage(DiceOne)
      } else if  (number === 2) {
        setDiceImage(DiceTwo)
      } else if (number === 3){
        setDiceImage(DiceThree)
      } else if(number === 4){
        setDiceImage(DiceFour)
      } else if(number === 5){
        setDiceImage(DiceFive)
      } else if(number === 6){
        setDiceImage(DiceSix)
      }
    }
  return (
    <View style={styles.container}>
      <Dice imgUrl={DiceImage}/>
      <Pressable onPress={RollTheDice}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
