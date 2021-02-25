import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import TabList from './comp/TabList';

export class App extends Component {
  constructor() {
    super()

    let tabs = [
      {
        name: 'text'
      },
      {
        name: 'image'
      },
      {
        name: 'video'
      },
      {
        name: 'table'
      },
      {
        name: 'email'
      }
    ]

    this.state = {
      tabInfo: tabs,
      activeTab: tabs[0].name
    }
  }

  onSelected = (tabName) => {
    console.log(`tab selected: ${tabName}`)
    this.setState({
      activeTab: tabName
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          {/* <h1>Yum, Salt!</h1> */}
          <TabList tabInfo={this.state.tabInfo} activeTab={this.state.activeTab} onSelected={this.onSelected} />
        </div>
      </div>
    )
  }
}

export default App
