import React from "react";
import { PROJECT_LIST } from "./ProjectConfig"
class Projects extends React.Component {

    constructor(props) {
        super(props)
        this.clearAll = React.createRef();
        this.clearReact = React.createRef();
        this.clearWordpress = React.createRef();
        this.clearFun = React.createRef();
        this.clearVanilla = React.createRef();
        this.clearOpen = React.createRef();

        this.state = {
            filteredProjectList: PROJECT_LIST
        }
    }

    componentDidMount = () => {
        this.clearAll.current.classList.add("active")
    }


    projectListChangeHandler = (e, type) => {
        this.clearAll.current.classList.remove("active")
        this.clearReact.current.classList.remove("active")
        this.clearVanilla.current.classList.remove("active")
        this.clearWordpress.current.classList.remove("active")
        this.clearFun.current.classList.remove("active")
        this.clearOpen.current.classList.remove("active")
        e.target.classList.add("active")
        if (type == undefined) {
            this.setState({ filteredProjectList: PROJECT_LIST })
        }
        else {
            const filteredList = PROJECT_LIST.filter((project) => project.projectType.includes(type))
            this.setState({ filteredProjectList: filteredList })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="dizme_tm_section" id="portfolio">
                    <div className="dizme_tm_portfolio">
                        <div className="container-fluid">
                            <div className="dizme_tm_main_title" data-align="center">
                                <span>Portfolio</span>
                                <h3>My Amazing Works</h3>
                                {/* <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p> */}
                            </div>
                            <div className="container">
                                <ul className="project-list">
                                    <li ref={this.clearAll} onClick={(e) => this.projectListChangeHandler(e, undefined)}>All</li>
                                    <li ref={this.clearReact} onClick={(e) => this.projectListChangeHandler(e, "react")}>React Project</li>
                                    <li ref={this.clearWordpress} onClick={(e) => this.projectListChangeHandler(e, "wordpress")}>Wordpress Project</li>
                                    <li ref={this.clearVanilla} onClick={(e) => this.projectListChangeHandler(e, "vanilla")}>Vanilla Javascript Projects</li>
                                    <li ref={this.clearFun} onClick={(e) => this.projectListChangeHandler(e, "fun")}>Fun Made Projects</li>
                                    <li ref={this.clearOpen} onClick={(e) => this.projectListChangeHandler(e, "open")}>Open Source</li>
                                </ul>

                                <div className="row">
                                    {this.state.filteredProjectList.length > 0 ? this.state.filteredProjectList.map(({ id, ProjectName, imageUrl }) => {
                                        return (
                                            <div className="col-lg-4" key={id}>
                                                <div className="single_project_imagewrapper" >
                                                    <figure className="c4-izmir c4-border-ccc-2"  >
                                                        <img src={imageUrl} alt="Sample Image" />
                                                        <figcaption>
                                                            <div className="c4-reveal-up">
                                                                <h3>
                                                                    {ProjectName}
                                                                </h3>
                                                            </div>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        )
                                    }) : <h1 className="coming-soon" data-aos="fade-up">Coming Soon</h1>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default Projects