import React, { Component } from 'react'
import Meeting from '../comp/Meeting'
import Button from '../comp/Button'

export class MeetPage extends Component {
    constructor() {
        super()

        this.state = {
            meetings: [
                {
                    name: "Pi Celebration Meeting",
                    datetime: "3/14/2021 15:14:15",
                    link: "https://zoom.us/j/31456926535",
                    important: true
                }
            ]
        }
    }

    createMeeting() {
        alert('not implemented')
    }

    onDeleteMeeting(meeting) {
        console.log('trying to delete meeting:', meeting)
    }

    render() {
        return (
            <section>
                <h1>zoom meeting manager</h1>
                <Button text="create meeting" click={this.createMeeting} />

                <h2>meetings</h2>
                <div className="meeting-list">
                    <Meeting title="Pi Celebration Meeting" datetime="3/14/2021 15:14:15" link="https://zoom.us/j/31456926535" important={true} onDelete={this.onDeleteMeeting} />
                </div>
            </section>
        )
    }
}

export default MeetPage
