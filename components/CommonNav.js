import React, { Component } from 'react'
import { Link } from 'react-router'

class CommonNav extends Component {
    render() {
        return (
            <div>
                <h1>
                {
                    this.props.value === ''
                    ? 'Home'
                    : <Link to="/">The Solution Source</Link>
                }
                </h1>
            </div>
        )
    }
}

export default CommonNav