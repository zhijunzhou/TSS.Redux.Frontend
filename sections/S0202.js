import React, { Component } from 'react'

class S0202 extends Component {

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

export default S0202