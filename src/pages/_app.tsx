import { ThemeProvider, createTheme } from "@mui/material/styles";
import MiniDrawer from "../components/navigation/navigation.component";
import React from "react";
import { PaletteMode } from "@mui/material";
import getTheme from "../config/theme";
import HeadComponent from "../components/head/head.component";

// GLOBAL CSS
import './_app.scss'
import styles from './_app.module.scss'

interface IProps {
	Component: any;
	pageProps: any;
}

interface IStates {
	design: PaletteMode;
}

export default class App extends React.Component<IProps, IStates> {
	state: IStates = {
		design: "dark",
	};

	public static style = styles;

	LPtheme = createTheme(getTheme(this.state.design));

	render() {
		return (
			<React.Fragment>
				<HeadComponent />
				<ThemeProvider theme={this.LPtheme}>
					<MiniDrawer theme={this.LPtheme}>{<this.props.Component theme={this.LPtheme}></this.props.Component>}</MiniDrawer>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}
