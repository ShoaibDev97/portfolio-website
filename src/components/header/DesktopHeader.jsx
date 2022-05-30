import React, { Component } from 'react'
import ScrollSpy from 'react-scrollspy'
class DesktopHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="dizme_tm_header">
                    <div className="container">
                        <div className="inner">
                            <div className="menu">
                                <ul className="anchor_nav">
                                    <div>
                                        <ScrollSpy items={["home", "service", "portfolio", "about", "packages", "testimonials", "contact"]} currentClassName="current" offset={-200}>
                                            {this.props.navLinksData.map(({ name, hRef, currentClass }) => {
                                                return (
                                                    <li key={name} onClick={this.props.onhandlerAddCurrentClass} className={currentClass} ><a href={hRef} >{name}</a></li>
                                                )
                                            })}
                                        </ScrollSpy>
                                    </div>
                                    <div>
                                        <button className="download-btn"></button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DesktopHeader