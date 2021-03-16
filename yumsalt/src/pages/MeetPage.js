import React, { Component } from 'react'
import Meeting from '../comp/Meeting'
import NewMeeting from '../comp/NewMeeting'
import Button from '../comp/Button'

export class MeetPage extends Component {
    constructor() {
        super()

        this.state = {
            meetings: [
                {
                    id: 0,
                    name: "Pi Celebration Meeting",
                    datetime: "3/14/2021 15:14:15",
                    link: "https://zoom.us/j/31456926535",
                    important: true
                }
            ],
            creating_new: false
        }
    }

    async componentDidMount() {
        await this.refetchMeetings()
    }

    async refetchMeetings() {
        // fetch data
        const resp = await fetch('http://localhost:5000/tasks')
        const raw_meetings = await resp.json()
        // console.log('fetched meetings:', raw_meetings)
        const meetings = raw_meetings.map(x => {
            return {
                id: x.id,
                name: x.title,
                datetime: x.day,
                link: x.textInfor,
                important: x.important
            }
        })
        // console.log('parsed meetings:', meetings)
        this.setState({
            meetings: meetings
        })
    }

    showCreateMeeting() {
        this.setState({
            creating_new: true
        })
    }

    showFullSchedule() {
        this.setState({
            creating_new: false
        })
    }

    async onDeleteMeeting(meeting) {
        // first confirm
        if (!window.confirm(`are you sure you want to delete: ${meeting.props.title}?`))
            return

        // find meeting ID
        let mt_id = meeting.props.id
        console.log('trying to delete meeting:', meeting, 'ID:', mt_id)

        await fetch(`http://localhost:5000/tasks/${mt_id}`, {
            method: 'delete'
        })

        await this.refetchMeetings()
    }

    async onSaveMeeting(meeting_data) {
        console.log('trying to save meeting:', meeting_data)

        // post it to server
        await fetch('http://localhost:5000/tasks', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(meeting_data)
        })

        this.showFullSchedule()

        // now refresh
        await this.refetchMeetings()
    }

    render() {

        let meetings_html = this.state.meetings.map(x =>
            <Meeting key={x.id} id={x.id} title={x.name} datetime={x.datetime} link={x.link} important={x.important} onDelete={this.onDeleteMeeting.bind(this)} />)

        if (this.state.meetings.length == 0) {
            meetings_html = <p>no available meetings (create one?)</p>
        }

        let schedule_html = (
            <div>
                <Button text="create meeting" click={this.showCreateMeeting.bind(this)} />

                <h2>meeting schedule</h2>
                <div className="meeting-list">
                    {meetings_html}
                </div>
            </div>
        )

        let newmeeting_html = (
            <div>
                <Button text="full schedule" click={this.showFullSchedule.bind(this)} />

                <NewMeeting onSave={this.onSaveMeeting.bind(this)} />
            </div>
        )

        let section_body = this.state.creating_new ? newmeeting_html : schedule_html

        return (
            <section>
                <h1>zoom meeting manager</h1>
                {section_body}
            </section>
        )
    }
}

export default MeetPage
