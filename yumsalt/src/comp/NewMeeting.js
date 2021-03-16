import React, { Component } from 'react'
import { LinkedComponent } from 'valuelink';
import { Input } from 'linked-controls';
import moment from 'moment'

export class NewMeeting extends LinkedComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            datetime: '',
            link: '',
            important: false,

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
        let parsed_date = moment(datetime, "MM-DD-YYYY hh:mm a")
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

        let iso_date = parsed_date.toDate().toISOString()
        console.log('iso date', iso_date)

        // 3. link: must contain 'zoom'
        let link = this.state.link
        if (valid && (!link.includes('zoom'))) {
            valid = false
            err_msg = 'link must be a zoom link'
        }
        let important = this.state.important

        if (valid) {
            this.props.onSave({
                title: name,
                day: iso_date,
                textInfor: link,
                important: important,
            })
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
                    <input type="submit" value="save meeting" />
                    <span id="validation-status">{this.state.status}</span>
                </form>
            </div>
        )
    }
}

export default NewMeeting
