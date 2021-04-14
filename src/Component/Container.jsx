import React, { Component } from 'react'
import Card from './Card'
import Contact from './Contact'
import WhatWeDo from './WhatWeDo'

export default class Container extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <WhatWeDo/>
                    <Contact/>
                </div>
                <div className="row">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        )
    }
}
