import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { borderBottomColorChange } from "../styles/animations"
import colors from "../styles/colors"

const Layout = props => {
	return (
		<Container>
			<NavBar>
				<Band>
					<Link
						to="/mantrayouth"
						style={{ textDecoration: "none" }}
						activeClassName={"active"}
						partiallyActive={false}
					>
						| mantra youth percussion |
					</Link>
				</Band>
				<BandMember>
					<Link
						to="/mantrayouth/necessary-noise-festival"
						style={{ textDecoration: "none" }}
						activeClassName={"active"}
					>
						necessary noise festival
					</Link>
				</BandMember>
				<Divider>|</Divider>
			</NavBar>
			<Content>{props.children}</Content>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1300px;
	margin: 70px auto;
	display: grid;
	grid-template-rows: 3vh 10vh 5fr;

	@media (max-width: 450px) {
		max-width: 1300px;
		margin: 50px auto;
	}
`

const NavBar = styled.div`
	line-height: 3em;
	grid-row-start: 2;

	@media (max-width: 500px) {
		max-width: 360px;
		margin: 30px auto;
	}

	a {
		color: ${colors.black};
	}
`
const Content = styled.div`
	grid-row-start: 3;
`

const Band = styled.span`
	display: inline-block;
	font-weight: bold;
	font-size: 2em;
	cursor: pointer;

	@media screen and (max-width: 500px) {
		font-size: 1.7rem;
		display: block;
		text-align: center;
	}

	a {
		display: inline-block;
	}
	a.active,
	a:hover {
		animation: ${borderBottomColorChange} 2.5s linear infinite;
	}
`

const BandMember = styled.span`
	display: inline-block;
	margin: 0 20px;
	font-weight: 200;
	letter-spacing: 2px;
	font-size: 1.5em;
	cursor: pointer;

	a {
		display: inline-block;
	}

	a.active,
	a:hover {
		font-weight: 550;
		animation: ${borderBottomColorChange} 2.5s linear infinite;
	}
`

const Divider = styled.span`
	font-size: 1.5em;
`

export default Layout
