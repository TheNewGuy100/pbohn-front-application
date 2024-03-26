import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import Hero from "../../components/hero/hero.component";
import FAQ from "../../components/faq/faq.component";
import Footer from "../../components/footer/footer.component";
import Pricing from "../../components/pricing/pricing.component";
import Highlights from "../../components/highlights/highlights.component";
import Features from "../../components/features/features.component";
import Referencias from "../../components/references/references.component";

interface ToggleCustomThemeProps {
	showCustomTheme: Boolean;
	toggleCustomTheme: () => void;
}

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }: ToggleCustomThemeProps) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100dvw",
				position: "fixed",
				bottom: 24,
			}}
		>
			<ToggleButtonGroup
				color="primary"
				exclusive
				value={showCustomTheme}
				onChange={toggleCustomTheme}
				aria-label="Platform"
				sx={{
					backgroundColor: "background.default",
					"& .Mui-selected": {
						pointerEvents: "none",
					},
				}}
			>
				<ToggleButton value>
					<AutoAwesomeRoundedIcon sx={{ fontSize: "20px", mr: 1 }} />
					Custom theme
				</ToggleButton>
				<ToggleButton value={false}>Material Design 2</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
}

const customStyle: React.CSSProperties = {
	width: "15px",
};

export default class IntroductionPage extends React.Component<{ theme: any }> {
	render() {
		return (
			<div style={{ overflowX: 'hidden' }}>
				<CssBaseline />
				<Hero />
				<Divider sx={{ marginBottom: "80px" }} />
				<Features />
        <Divider sx={{ margin: "80px 0 80px 0px" }} />
				<Referencias theme={this.props.theme} />
				<Divider />
				<Highlights />
				<Divider />
				<Pricing />
				<Divider />
				<FAQ />
				<Divider />
				<Footer />
			</div>
		);
	}
}
