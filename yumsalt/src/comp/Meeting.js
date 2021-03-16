import React from 'react'
import './Meeting.css'

function Meeting({ title, datetime, link, important }) {
    return (
        <div className="meeting">
            <h3>{title}</h3>
            <div className="meeting-controls">
                <a className="btn" href="#">edit</a>
                <a className="btn" href="#">delete</a>
            </div>
            <div className="meeting-details">
                <p>at: {datetime}</p>
                <a href={link}>meeting link</a>
            </div>
        </div>
    )
}

export default Meeting
