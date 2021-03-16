import React, { Component } from 'react'
import { LinkedComponent } from 'valuelink';
import { Input } from 'linked-controls';
import Button from '../comp/Button'
import moment from 'moment'

export class MeetingEditor extends LinkedComponent {
    constructor(props) {
        super(props)

        this.DATE_FORMAT_FRIENDLY = "MM/DD/YYYY hh:mm a"
        this.DATE_FORMAT_ICE = "YYYY-MM-DD[T]HH:mm"

        // make sure mode is valid
        if (!props.mode || props.mode.length == 0) {
            console.error('invalid meeting editor mode:', props.mode)
        }
        
        // console.log('meeting editor mode:', props.mode)

        let form_data = {
            name: '',
            datetime: '',
            link: '',
            important: false,
            id: 0,
        }

        // if MODE=NEW...

        // if MODE=EDIT...
        if (props.mode == 'edit') {
            let init_datetime_moment = moment(props.init_datetime, this.DATE_FORMAT_ICE)
            let conv_init_datetime = init_datetime_moment.format(this.DATE_FORMAT_FRIENDLY)
            console.log('conv datetime:', conv_init_datetime, 'init datetime:', init_datetime_moment)

            form_data.name = props.init_name
            form_data.datetime = conv_init_datetime
            form_data.link = props.init_link
            form_data.important = props.init_important
            form_data.id = props.init_id
        }

        this.state = {
            ...form_data,
            status: ''
        }
    }

    formSubmit = () => {
        // validate fields:
        let valid = true
        let err_msg = 'unknown validation error'
        // 1. name: non-empty, <=30 chars
        let name = this.state.name
        if (valid && (name.length < 1 || name.length > 30)) {
            valid = false
            err_msg = 'meeting name must be between 1-30 chars'
        }
        // 2. date: valid, and greater than current
        let datetime = this.state.datetime
        let parsed_date = moment(datetime, this.DATE_FORMAT_FRIENDLY)
        console.log('parsed date:', parsed_date)

        // ensure correct parsing
        // for example 08/01/2021 7:15 PM
        if (valid && !parsed_date.isValid()) {
            valid = false
            err_msg = 'date/time was not in correct format'
        }

        // check date is in future
        if (valid && !parsed_date.isAfter()) {
            valid = false
            err_msg = 'date/time must be in future'
        }

        // convert date to correct format (2021-03-05T09:00)
        let export_date = parsed_date.format(this.DATE_FORMAT_ICE)
        console.log('export date', export_date)

        // 3. link: must contain 'zoom'
        let link = this.state.link
        if (valid && (!link.includes('zoom'))) {
            valid = false
            err_msg = 'link must be a zoom link'
        }
        let important = this.state.important

        if (valid) {
            err_msg = 'saving...'
            let is_creating_new = this.props.mode == 'new'
            this.props.onSave({
                title: name,
                day: export_date,
                textInfor: link,
                important: important,
                id: this.state.id,
            }, is_creating_new)
        }

        this.setState({
            status: err_msg
        })
    }

    render() {
        const state$ = this.state$();

        return (
            <div>
                <h2>new meeting</h2>

                <form onSubmit={this.formSubmit}>
                    <fieldset>
                        <legend>meeting details</legend>
                        <label>title</label><br />
                        <Input type="text" $value={state$.name} /><br />
                        <label>date/time (MM/DD/YYYY HH:MM AM/PM)</label><br />
                        <Input type="text" $value={state$.datetime} /><br />
                        <label>zoom link</label><br />
                        <Input type="text" $value={state$.link} /><br />
                        <label>important</label><br />
                        <Input type="checkbox" $checked={state$.important} /><br />
                    </fieldset>
                    <button className="btn" type="submit">save meeting</button>
                    <span id="validation-status">{this.state.status}</span>
                </form>
            </div>
        )
    }
}

export default MeetingEditor
