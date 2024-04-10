import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import FeaturesInfosTypescript from "./infos/info.typescript";

const items = [
	{
		icon: <i style={{ fontSize: "2rem" }} className="devicon-typescript-plain"></i>,
		title: "Typescript",
		description: "This item could provide a snapshot of the most important metrics or data points related to the product.",
    menu: <FeaturesInfosTypescript/>
	},
	{
		icon: <i style={{ fontSize: "2rem" }} className="devicon-javascript-plain"></i>,
		title: "Javascript",
		description: "This item could provide information about the mobile app version of the product.",
	},
	{
		icon: <i style={{ fontSize: "2rem" }} className="devicon-csharp-plain"></i>,
		title: "C#",
		description: "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
	},
	{
		icon: <i style={{ fontSize: "2rem" }} className="devicon-java-plain-wordmark"></i>,
		title: "Java 8/11",
		description: "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
	},
  {
		icon: <i style={{ fontSize: "2rem" }} className="devicon-unrealengine-original"></i>,
		title: "Unreal Engine",
		description: "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
	},
  {
		icon: <i style={{ fontSize: "2rem" }} className="devicon-unity-plain"></i>,
		title: "Unity Engine",
		description: "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
	},
];

interface StatesMachine {
	selected: number;
}

interface ReceivedProps {}

export default class Aprendizado extends React.Component<ReceivedProps, StatesMachine> {
	constructor(props: any) {
		super(props);

		this.state = {
			selected: 0,
		};

		this.handleItemClick.bind(this);
	}

	private handleItemClick(index: number) {
		this.setState({ selected: index });
	}

	render(): React.ReactNode {
		const selectedFeature = items[this.state.selected];

		return (
			<div id="estudos" style={{ width: "97%", margin: "25px 0px 0px 25px" }}>
				<Grid container spacing={6}>
					<Grid item md={4}>
						<div>
							<Typography component="h2" variant="h4" color="text.primary">
								Estudos
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{ mb: { xs: 2, sm: 4 } }}>
								O estudo não é apenas a busca por diplomas ou títulos, mas sim uma jornada que nos permite expandir nossos horizontes, desafiar nossas próprias limitações e explorar novas ideias e
								conceitos. Cada página virada, cada problema resolvido, cada discussão em sala de aula nos aproxima um pouco mais da compreensão do mundo que nos cerca.
							</Typography>
						</div>

						<Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={2} useFlexGap sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}>
							{items.map(({ icon, title, description }, index) => (
								<Card
									key={index}
									component={Button}
									onClick={() => this.handleItemClick(index)}
									sx={{
										p: 3,
										width: "100%",
										background: "none",
										backgroundColor: this.state.selected === index ? "action.selected" : undefined,
									}}
								>
									<Box sx={{ width: "100%", display: "flex", textAlign: "left", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, gap: 2.5 }}>
										<Box>{icon}</Box>
										<div style={{ display: 'flex', width: '100%' }}>
											<Typography color="text.primary" variant="body2">
												{title}
											</Typography>
											<ChevronRightRoundedIcon fontSize="small" sx={{ mt: "1px", ml: "2px" }} style={{ marginLeft: 'auto' }} />
										</div>
									</Box>
								</Card>
							))}
						</Stack>
					</Grid>

					<Grid item md={8}>
						{
              items[this.state.selected].menu ?? 
                <div style={{ background: "linear-gradient(30deg, rgba(7,4,136,1) 0%, rgba(0,187,255,1) 100%)", width: "100%", height: "100%", borderRadius: "15px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography fontSize={35} fontWeight={'bold'}>NOT IMPLEMENTED</Typography>
                </div>
            }
					</Grid>
				</Grid>
			</div>
		);
	}
}
