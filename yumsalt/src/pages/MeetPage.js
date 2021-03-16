import React from 'react'
import Meeting from '../comp/Meeting'

export default function MeetPage() {
    return (
        <section>
            <h1>zoom meeting manager</h1>
            <a className="btn">create meeting</a>

            <h2>meetings</h2>
            <div className="meeting-list">
                <Meeting title="Pi Celebration Meeting" datetime="3/14/2021 15:14:15" link="https://zoom.us/j/31456926535" important={true}></Meeting>
            </div>
        </section>
    )
}
