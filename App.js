import React from 'react';
import { mapping, dark, light } from '@eva-design/eva';
import { ApplicationProvider, Layout, Input, Button, ButtonGroup, Text, BottomNavigation, BottomNavigationTab} from 'react-native-ui-kitten';
import {styles} from './styles/styles'
import * as firebase from 'firebase';

class App extends React.Component {

  constructor(props){

    super(props)

    const firebaseConfig = {
      apiKey: "AIzaSyB1gJXFUux8gjDgzd8Gdci4_Hw0928WuDk",
      authDomain: "awesomeproject-bcba4.firebaseapp.com",
      databaseURL: "https://awesomeproject-bcba4.firebaseio.com",
      projectId: "awesomeproject-bcba4",
      storageBucket: "awesomeproject-bcba4.appspot.com",
      messagingSenderId: "101038751211",
      appId: "1:101038751211:web:e94ffb913bf7eff5f66dae"
    }

    this.state = {
      activeMode: light,
      selectedMode: 0,
      emailInput: '',
      passInput: '',
      firebaseObj: firebase.initializeApp(firebaseConfig)
    }
  }

  componentWillMount() {
    console.log(this.state.firebaseObj.auth())
  }

  handleChangeMode = (index) => {
    this.setState({selectedMode: index})
    if (index == 0 ) {
      this.setState({activeMode: light})
    }
    else {
      this.setState({activeMode: dark})
    }
  }

  handleEMailChangeInput = (input) => {
    this.setState({emailInput: input})
  }

  handlePassChangeInput = (input) => {
    this.setState({passInput: input})
  }

  handleLogin = () => {
    alert("You are logging in with email: "+this.state.emailInput+" and password: "+this.state.passInput)
  }

  handleReset = () => {
    this.setState({emailInput: ''})
    this.setState({passInput: ''})
  }

  render(){
    return (
      <ApplicationProvider mapping={mapping} theme={this.state.activeMode}>
        <Layout style={styles.container} level='2'>
          <Layout style={[styles.container, styles.contentContainer]} level='1'>
            <Text category='h2'>Team EDGE</Text>
            <Text></Text>
            <Text></Text>
            <Input value={this.state.emailInput} onChangeText={this.handleEMailChangeInput} placeholder="enter email"></Input>
            <Text></Text>
            <Input value={this.state.passInput} onChangeText={this.handlePassChangeInput} secureTextEntry={true} placeholder="enter password"></Input>
            <Text></Text>
            <Text></Text>
            <ButtonGroup>
              <Button onPress={this.handleLogin}>Login</Button>
              <Button onPress={this.handleReset}>Reset</Button>
            </ButtonGroup>
          </Layout>
          <BottomNavigation selectedIndex={this.state.selectedMode} onSelect={this.handleChangeMode}>
              <BottomNavigationTab title='Light' />
              <BottomNavigationTab title='Dark' />
          </BottomNavigation>
        </Layout>
      </ApplicationProvider>
    )
  }
}




export default App;