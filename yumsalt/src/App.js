import React, { Component } from 'react'
import './App.css';
import TabList from './comp/TabList';
import PageBody from './comp/PageBody';
import Previewer from './comp/Previewer';

import TextPage from './pages/TextPage';
import ImagePage from './pages/ImagePage';
import VideoPage from './pages/VideoPage';
import TablePage from './pages/TablePage';
import EmailPage from './pages/EmailPage';

export class App extends Component {
  constructor() {
    super()

    let tabs = [
      {
        name: 'text',
        body: <TextPage />
      },
      {
        name: 'image',
        body: <ImagePage />
      },
      {
        name: 'video',
        body: <VideoPage />
      },
      {
        name: 'table',
        body: <TablePage />
      },
      {
        name: 'email',
        body: <EmailPage />
      }
    ]

    this.state = {
      tabInfo: tabs,
      activeTab: tabs[0].name,
      previewUrl: '',
      previewOpen: false
    }
  }

  onTabSelected = (tabName) => {
    console.log(`tab selected: ${tabName}`)
    this.setState({
      activeTab: tabName
    })
  }

  openPreviewer = (item) => {
    console.log(`open previewer: ${item}`)
    this.setState({
      previewUrl: item,
      previewOpen: true
    })
  }

  closePreviewer = () => {
    console.log('close previewer')
    this.setState({
      previewUrl: null,
      previewOpen: false
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
        <TabList tabInfo={this.state.tabInfo} activeTab={this.state.activeTab} onSelected={this.onTabSelected} />
        <PageBody content={page.body} previewer={this.openPreviewer} />
        <Previewer mediaUrl={this.state.previewUrl} isOpen={this.state.previewOpen} onDismiss={this.closePreviewer} />
      </div>
    )
  }
}

export default App
