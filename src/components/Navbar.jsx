import { useEffect, useState } from "react";
import BtnMenu from "./BtnMenu";
import { Link } from "react-router-dom";

const SCREEN = 780;

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [width, setWidth] = useState(() => window.innerWidth);

	function handleToggle() {
		setIsOpen((x) => !x);
	}

	useEffect(() => {
		width >= SCREEN ? setIsMobile(false) : setIsMobile(true);

		window.addEventListener("resize", () => {
			setWidth(window.innerWidth);
			setIsOpen(false);
		});
	}, [width]);

	return (
		<nav className="navbar">
			<section className="navbar__contents">
				<Link className="brand" to="/">
					<img src="ov.png" alt="logo" />
				</Link>

				{isMobile && <BtnMenu onToggleMenu={handleToggle} isOpen={isOpen} />}

				<ul className={`navList ${isOpen && "opened"}`}>
					<li className="navItem">
						<a href="/#about" className="navlink">
							About
						</a>
					</li>
					<li className="navItem">
						<a href="#projects" className="navlink">
							Projects
						</a>
					</li>
					<li className="navItem">
						<a href="#contact" className="navlink">
							Contact
						</a>
					</li>
				</ul>
			</section>
		</nav>
	);
}

export default Navbar;
