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

        let meetings_html = this.state.meetings.map(x =>
            <Meeting key={x.name} title={x.name} datetime={x.datetime} link={x.link} important={x.important} onDelete={this.onDeleteMeeting} />)

        return (
            <section>
                <h1>zoom meeting manager</h1>
                <Button text="create meeting" click={this.createMeeting} />

                <h2>meetings</h2>
                <div className="meeting-list">
                    {meetings_html}
                </div>
            </section>
        )
    }
}

export default MeetPage
