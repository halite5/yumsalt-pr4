import React, { Component } from 'react'
import { LinkedComponent } from 'valuelink';
import { Input } from 'linked-controls';

export class EmailPage extends LinkedComponent {
    constructor() {
        super()

        this.state = {
            email: '',
            status: ''
        }
    }

    formSubmit = () => {
        let validate_email = (eml) => {
            var re = /\S+@\S+\.\S+/;
            return re.test(eml);
        }

        var email = this.state.email
        var status = validate_email(email)
        console.log('validate: ', status, 'for', email)

        let msg = status ? "email successfully recorded" : "invalid email address"
        this.setState({
            status: msg
        })
    }

    render() {
        const state$ = this.state$();

        return (
            <section>
                <p>
                    here is a demo of some basic client side form validation.
            </p>
                <form className="email-form" onSubmit={this.formSubmit}>
                    <fieldset>
                        <legend>how do you like salt?</legend>
                        <label>what is your email?
            <Input type="text" $value={state$.email} />
                        </label>
                    </fieldset>
                    <input type="submit" value="submit" />
                    <span id="validation-status">{this.state.status}</span>
                </form>
            </section>
        )
    }
}

export default EmailPage
