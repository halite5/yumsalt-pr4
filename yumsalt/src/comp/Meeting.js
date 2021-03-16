import React, { Component } from 'react'
import './Meeting.css'
import Button from './Button'

export class Meeting extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let container_class = "meeting"

        let status_block = <></>
        if (this.props.important) {
            status_block = (<p>IMPORTANT</p>)
            container_class += ' meeting-important'
        }

        return (
            <div className={container_class}>
                <h3>{this.props.title}</h3>
                <div className="meeting-controls">
                    <Button text="edit" click={() => { this.props.onEdit(this) }} />
                    <Button text="delete" click={() => { this.props.onDelete(this) }} />
                </div>
                <div className="meeting-status">
                    {status_block}
                </div>
                <div className="meeting-details">
                    <p>at: {this.props.datetime}</p>
                    <a href={this.props.link} target="_blank">meeting link</a>
                </div>
            </div>
        )
    }
}

export default Meeting
