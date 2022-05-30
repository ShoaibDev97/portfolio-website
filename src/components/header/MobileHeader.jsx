import React from "react";
import ScrollSpy from "react-scrollspy";

class MobileHeader extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="dizme_tm_mobile_menu">
					<div className="mobile_menu_inner">
						<div className="mobile_in">


							<div className="trigger">
								<div className="hamburger hamburger--slider">
									<div className="hamburger-box">
										<div className="hamburger-inner"></div>
									</div>
								</div>
							</div>
							<div className="mobile_download">
								<a href="#"><i className="fa fa-download " style={{ color: "#" }}></i></a>
							</div>
						</div>
					</div>
					<div className="dropdown">
						<div className="dropdown_inner">
							<ul className="anchor_nav">
								<ScrollSpy items={["home", "service", "portfolio", "about", "packages", "testimonials", "contact"]} currentClassName="current" offset={-200}>
									{this.props.navLinksData.map(({ name, hRef, currentClass }) => {
										return (
											<li key={name} onClick={this.props.onhandlerAddCurrentClass} className={currentClass} ><a href={hRef} >{name}</a></li>
										)
									})}
								</ScrollSpy>
							</ul>
						</div>
					</div>
				</div>


			</React.Fragment>)
	}
}

export default MobileHeader