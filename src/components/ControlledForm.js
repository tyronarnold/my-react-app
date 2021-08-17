import React, { Component } from 'react'

class ControlledForm extends Component {
    render() {
        return (
            <div>
                <h2>Controlled Form</h2>
                <form>
                    <input 
                    type="email"
                    name="email"
                    placeholder="info@greenbackend.com"

                    />
                </form>

            </div>
        )
    }
}

export default ControlledForm