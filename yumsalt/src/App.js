import React, { Component } from 'react'
import './App.css';
import TabList from './comp/TabList';
import PageBody from './comp/PageBody';
import TextPage from './pages/TextPage';

export class App extends Component {
  constructor() {
    super()

    let tabs = [
      {
        name: 'text',
        body: <TextPage />
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

  getTab(name) {
    return this.state.tabInfo.find(x => x.name === name)
  }

  render() {
    let page = this.getTab(this.state.activeTab)

    return (
      <div className="App">
        {/* <h1>Yum, Salt!</h1> */}
        <TabList tabInfo={this.state.tabInfo} activeTab={this.state.activeTab} onSelected={this.onSelected} />
        
        <PageBody content={page.body} />
      </div>
    )
  }
}

export default App
