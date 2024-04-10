import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../config/application";

const Hero = ({ children, props }: any) => {
	const [particles, setParticles] = useState<any[]>([]);
	const applicationCTX = useContext(ApplicationContext)

	useEffect(() => {
		let tempParticles = [];

		for (let i = 0; i <= 100; i++) {
			tempParticles.push(<div className={applicationCTX?.theme.styles.circleContainer}></div>);
		}

		setParticles(tempParticles);
	});

	return (
		<div>
			<div style={{ height: "100vh", background: "linear-gradient(#000, #090e10)", overflowX: "hidden" }}>
				{...particles.map((val: any, index: number) => val)}

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
						margin: "auto 0px auto 0px",
						transform: "translateZ(0)",
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
};

export default Hero