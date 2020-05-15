import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';



const RewardsItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            {/* <Thumbnail source={{ uri: 'Image URL' }} /> */}
            <Body>
              <Text>{props.title}</Text>
              {/* <Text note>{props.amountRedeemed} Redeemed!</Text> */}
              <Text note>{0} claimed all time!</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: props.image }} style={{ height: 125, width: '100%', resizeMode: 'contain' }} />
        </CardItem>
        <CardItem>
          <Body style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button transparent onPress={props.onSelect}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon active name="ios-cash" />
                <Text>Redeem now!</Text>
              </View>


            </Button>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <Icon active name="ios-cash" /> */}
              <Text>{props.price} Coins</Text>
            </View>
          </Body>
        </CardItem>
      </Card>
    </Content>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 200,
    marginHorizontal: 20,
    marginVertical: 10
  },
  touchable: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    // width: '100%',
    // height: '100%'
  },
  details: {
    alignItems: 'center',
    height: '17%',
    // padding: 10
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 18,
    // marginVertical: 2
  },
  price: {
    // fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  }
});

export default RewardsItem;
