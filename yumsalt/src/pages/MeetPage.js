import React, { Component } from 'react'
import Meeting from '../comp/Meeting'
import MeetingEditor from '../comp/MeetingEditor'
import Button from '../comp/Button'

export class MeetPage extends Component {
    constructor() {
        super()

        this.state = {
            meetings: [ ],
            is_editing_meeting: false,
            editing_meeting_id: -1,
        }
    }

    findMeetingById(id) {
        return this.state.meetings.findIndex(x => x.id == id)
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
            is_editing_meeting: true,
            editing_meeting_id: -1
        })
    }

    showFullSchedule() {
        this.setState({
            is_editing_meeting: false,
            editing_meeting_id: -1
        })
    }

    onEditMeeting(meeting) {
        // find meeting ID
        let mt_id = meeting.props.id
        console.log('trying to edit meeting:', meeting, 'ID:', mt_id)

        this.setState({
            is_editing_meeting: true,
            editing_meeting_id: mt_id
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

    async onSaveMeeting(meeting_data, create_new) {
        console.log('trying to save meeting:', meeting_data, 'create:', create_new)

        if (create_new) {
            // POST new meeting to server
            await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(meeting_data)
            })
        } else {
            // PATCH an existing meeting
            await fetch(`http://localhost:5000/tasks/${meeting_data.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(meeting_data)
            })
        }

        this.showFullSchedule()

        // now refresh
        await this.refetchMeetings()
    }

    render() {

        let meetings_html = this.state.meetings.map(x =>
            <Meeting key={x.id} id={x.id} title={x.name} datetime={x.datetime} link={x.link} important={x.important} onDelete={this.onDeleteMeeting.bind(this)} onEdit={this.onEditMeeting.bind(this)} />)

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

        let editmeeting_form = null

        if (this.state.is_editing_meeting && this.state.editing_meeting_id >= 0) {
            const meeting_ix = this.findMeetingById(this.state.editing_meeting_id)
            const meeting = this.state.meetings[meeting_ix]
            editmeeting_form = <MeetingEditor mode="edit" onSave={this.onSaveMeeting.bind(this)} init_name={meeting.name} init_datetime={meeting.datetime} init_link={meeting.link} init_important={meeting.important} init_id={meeting.id} />
        } else {
            editmeeting_form = <MeetingEditor mode="new" onSave={this.onSaveMeeting.bind(this)} />
        }

        let editmeeting_html = (
            <div>
                <Button text="full schedule" click={this.showFullSchedule.bind(this)} />

                {editmeeting_form}
            </div>
        )

        let section_body = this.state.is_editing_meeting ? editmeeting_html : schedule_html

        return (
            <section>
                <h1>zoom meeting manager</h1>
                {section_body}
            </section>
        )
    }
}

export default MeetPage
