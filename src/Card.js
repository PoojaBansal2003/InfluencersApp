import React, {Component} from 'react';
import Swiper from 'react-native-deck-swiper';
import {Button, StyleSheet, View, Text,Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import Card from './CardImage';
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

class Kanhaiya extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [...range(1, -1)],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
    };
  }
 

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
       <Card name="kajal jha" bio="Photography" />
      </View>
    );
  };

  onSwiped = type => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };
  
  render() {
    return (
      <>
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          cardHorizontalMargin={-10}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: 'Hate',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard>
          {/* <Text style={{fontSize:60}}>awddawd</Text> */}
         {/* <Button onPress={() => this.swiper.swipeBack()} title="Swipe Back" /> */}
         {/* <Button style = {{"padding" : "10px","backgroundColor" : "red"}} >Click ME</Button> */}
        </Swiper>
      </View>
      
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    // borderRadius: 10,
    // borderWidth: 5,
    borderColor: 'green',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom:100,
    marginTop:-10,
    overflow:'hidden'
    },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
  topBar: {
    position: 'absolute',
    top: 1,
    left: 5,
    right: 5,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
 
  }, 
});
export default Kanhaiya;
