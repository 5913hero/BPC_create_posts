import React, { Component } from 'react';
import { Image } from 'react-native';
import { Platform, StyleSheet,TouchableHighlight, Text, View } from 'react-native';
import { Container, Form, Textarea, Card, CardItem, Content,Segment, Left, Thumbnail, Right, Button, Icon, ListItem,CheckBox, Title, Input, Body, Item, Badge, StyleProvider, Footer } from 'native-base';
export default class ContentPosts extends Component {
  constructor() {
    super();
    this.state = {
        imgOpacity: 0
    }
}

toggleImage() {
    if ( this.state.imgOpacity === 1 ) {
        this.setState({
            imgOpacity: 0
        })    
    } else {
        this.setState({
            imgOpacity: 1
        }) 
    }
}
  render() {
    return (
      <Container>
    
        <Card >
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/26992372_1614207851992487_8985762252003678099_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk2-7.fna&oh=4960cf6587e07bb1961163a5ce0f969a&oe=5C664C82' }} style={{ height: 50, width: 50 }} />
              <Body>
                <Text style={{ fontSize: 12 }}>Hero_pks</Text>
                <Text style={{ fontSize: 10 }} note>Advanced </Text>
                <Text style={{ fontSize: 11 }} note>Aug 25, 1999 | 4:30 am </Text>
              </Body>
            </Left>

            <Form>
                <Textarea rowSpan={3} bordered placeholder="Textarea" />
            </Form>
            </CardItem>
         </Card>
        
        
              <Text style={styles.text1}>Color</Text>
              
          <View style={{flex: 0.1, flexDirection: 'row',justifyContent:'center' }}>
              <Image
                source={require("./icon/Color/Color_Blue.png")}
                style = {{width:30 ,height:30}} />
              <Image
                source={require("./icon/Color/Color_Purple.png")}
                style = {{width:30 ,height:30}} />
              <Image
                source={require("./icon/Color/Color_Pink.png")}
                style = {{width:30 ,height:30}} />
              <Image
                source={require("./icon/Color/Color_Orange.png")}
                style = {{width:30 ,height:30}} />
              <Image
                source={require("./icon/Color/Color_Green.png")}
                style = {{width:30 ,height:30}} />
              <Image
                source={require("./icon/Color/Color_Black.png")}
                style = {{width:30 ,height:30}} />
           </View>

              <Text style={styles.text1}>Location</Text>
          <Segment >
          <Button first warning>
            <Text>Your location</Text>
          </Button>
          <Button success
          onPress= {this.toggleImage}>
            <Text>Choose location</Text>
          </Button>
          <Button last danger>
            <Text>Hide location</Text>
          </Button>
        </Segment>
        <Image
                    style={{width: 50, height: 50, opacity: this.state.imgOpacity}}
                    source={{uri:'https://images.droidsans.com/wp-content/uploads/2018/07/google-offline-maps-cover.jpg'}} />

        <Item >
        <TouchableHighlight style = {{bottom: -260,position: 'absolute', zIndex: 999}}>
              <Image
                source={require("./icon/NO.png")}
                style = {{width:40 ,height:40 }}
              />
             </TouchableHighlight>
             <Right><TouchableHighlight style = {{bottom: -260,position: 'absolute', zIndex: 999}}>
              <Image
                source={require("./icon/YES.png")}
                style = {{width:40 ,height:40}}
              />
             </TouchableHighlight></Right>
             </Item>

      </Container>

    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    
    text1: {
    alignSelf: 'center',
    },
    box1: {
      position: 'absolute',
      top: 80,
      left: 290,
      width: 60,
      height: 30,
  
      backgroundColor: '#00CCCC'
    },
    box2: {
      position: 'absolute',
      top: 80,
      left: 10,
      width: 70,
      height: 30,
      backgroundColor: 'blue'
    },
    box3: {
      position: 'absolute',
      top: 120,
      left: 120,
      width: 100,
      height: 100,
      backgroundColor: 'green'
    },
    text: {
      color: '#ffffff',
      fontSize: 20,
    }
  });