import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import App from "../../pages/_app";

export default class Hero extends React.Component<unknown, { particles: any[] }> {
	constructor(props: unknown) {
		super(props);

		this.state = {
			particles: [],
		};
	}

	async componentDidMount(): Promise<void> {
		let particles = [];

		for (let i = 0; i <= 100; i++) {
			console.log("running");

			particles.push(<div className={App.style.circleContainer}></div>);
		}

		this.setState({ particles });
	}

	render() {
		return (
			<div>
				<div style={{ height: "100vh", background: "linear-gradient(#000, #090e10)", overflowX: "hidden" }}>
					{...this.state.particles.map((val: any, index: number) => val)}

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
              height: '100%',
							justifyContent: "center",
							alignItems: "center",
              margin: 'auto 0px auto 0px',
              transform: 'translateZ(0)'
						}}
					>
						<div style={{ backgroundColor: "red", height: "20rem", width: "20rem", borderRadius: "20rem" }}></div>
						<Typography component="h1" variant="h1" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignSelf: "center", textAlign: "center" }}>
							Pedro Henrique Bohn Costa
						</Typography>
						<Typography variant="body1" textAlign="center" color="text.secondary">
							Uma central para todas as minhas experiências, projetos e conquistas 😉
						</Typography>
					</div>
				</div>
			</div>
		);
	}
}
