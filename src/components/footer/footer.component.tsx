import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";

import styles from "./footer.module.css";
import { footerIconsSX } from "./footer.sx";

export default class Footer extends React.Component {
	render(): React.ReactNode {
		return (
			<Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: { xs: 4, sm: 8 }, py: { xs: 8, sm: 10 }, textAlign: { sm: "center", md: "left" } }}>
				{/* TODO - fazer texto que se auto escreve em exibição */}
				<Typography variant="h3">Me Encontre também em...</Typography>

				<Stack direction="row" justifyContent="center" spacing={12} useFlexGap sx={{ color: "text.secondary" }}>
					<IconButton target="_blank" color="inherit" href="https://github.com/TheNewGuy100" aria-label="GitHub" sx={{ alignSelf: "center" }}>
						<FacebookIcon sx={footerIconsSX} />
					</IconButton>
					<IconButton target="_blank" color="inherit" href="https://twitter.com/QSSJohnCena" aria-label="X" sx={{ alignSelf: "center" }}>
						<TwitterIcon sx={footerIconsSX} />
					</IconButton>
					<IconButton target="_blank" color="inherit" href="https://www.linkedin.com/in/pedro-henrique-bohn-costa-a5b0b1203/" aria-label="LinkedIn" sx={{ alignSelf: "center" }}>
						<LinkedInIcon sx={footerIconsSX} />
					</IconButton>
				</Stack>

				<Typography variant="body2" color="text.secondary" mt={1}>
					{"Copyright © "}
					<Link href="https://mui.com/">Pedro Henrique Bohn Costa&nbsp;</Link>
					{new Date().getFullYear()}
				</Typography>
			</Container>
		);
	}
}
