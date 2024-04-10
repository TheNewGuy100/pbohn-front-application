import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavigationDrawer from "../components/navigation/navigation.component";
import React, { createContext, useState } from "react";
import { PaletteMode } from "@mui/material";
import getTheme from "../config/theme";
import HeadComponent from "../components/head/head.component";

// GLOBAL CSS
import "./_app.scss";
import { ApplicationContext, IApplicationContext, defaultApplicationCTX } from "../config/application";

const App = ({ props, Component, pageProps }: { props: any; Component: any; pageProps: any }) => {

	const [applicationCTX, setApplicationCTX] = useState<IApplicationContext>(defaultApplicationCTX);

	return (
		<ApplicationContext.Provider value={applicationCTX}>
			<HeadComponent />
			<ThemeProvider theme={createTheme(getTheme(applicationCTX.theme.scheme))}>
				<NavigationDrawer>
					<Component {...pageProps} />
				</NavigationDrawer>
			</ThemeProvider>
		</ApplicationContext.Provider>
	);
};

export default App;
