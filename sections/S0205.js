import React, { Component } from 'react'

class S0205 extends Component {

    render() {
        const {sectionData} = this.props

        return (
            <div>
                <p>
                    {JSON.stringify(sectionData)}
                </p>
            </div>
        )
    }
}

export default S0205