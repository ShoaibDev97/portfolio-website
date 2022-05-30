import React from "react";
import ShoaibResume from "../../assets/Shoaib.pdf"
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            navLinksData: [
                {
                    name: "Home",
                    hRef: "#home",
                    currentClass: 'current'
                },
                {
                    name: "Service",
                    hRef: "#service",
                    currentClass: ''
                },
                {
                    name: "Portfolio",
                    hRef: "#portfolio",
                    currentClass: ''
                },
                {
                    name: "About",
                    hRef: "#about",
                    currentClass: ''
                },

                {
                    name: "Packages",
                    hRef: "#packages",
                    currentClass: ''
                },
                {
                    name: "Testimonials",
                    hRef: "#testimonials",
                    currentClass: ''
                },

                {
                    name: "Contact",
                    hRef: "#contact",
                    currentClass: ''
                },
            ]
        }
    }


    handlerAddCurrentClass = (e) => {
        const clearClassObject = this.state.navLinksData;
        clearClassObject.forEach((item) => {
            item.currentClass = ""
        })
        const navLinkObj = this.state.navLinksData;
        const singleNavLinkObj = navLinkObj.find((obj) => obj.name === e.target.innerText)
        singleNavLinkObj.currentClass = "current";
        this.setState({
            navLinkObj: {
                ...this.state.navLinksData,
                singleNavLinkObj
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <MobileHeader navLinksData={this.state.navLinksData} onhandlerAddCurrentClass={this.handlerAddCurrentClass} />
                <DesktopHeader navLinksData={this.state.navLinksData} onhandlerAddCurrentClass={this.handlerAddCurrentClass} />
            </React.Fragment>
        )
    }
}
export default Header;