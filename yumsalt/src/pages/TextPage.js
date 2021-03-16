import React from 'react'

export default function TextPage() {
    return (
        <section>
            <form onSubmit={() => {}}>
                <fieldset>
                    <legend>how do you like salt?</legend>
                    <label>what is your name?
                        <input type="text" name="name" />
                    </label>

                    <br />
                    <label>what is your favorite type of salt?</label>
                    <br />
                    <input type="radio" id="tablesalt" name="favsalt" value="table" />
                    <label htmlFor="tablesalt">table salt</label><br />
                    <input type="radio" id="seasalt" name="favsalt" value="sea" />
                    <label htmlFor="seasalt">sea salt</label><br />
                    <input type="radio" id="pinksalt" name="favsalt" value="pink" />
                    <label htmlFor="pinksalt">pink salt</label>
                </fieldset>
                <button className="btn" type="submit">submit</button>
            </form>
        </section>
    )
}
