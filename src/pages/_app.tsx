import { ThemeProvider, createTheme } from '@mui/material/styles'
import MiniDrawer from '../components/navigation/navigation.component'
import React from 'react'
import { PaletteMode } from '@mui/material'
import getTheme from '../config/theme'
import { AppProps } from 'next/app'

interface IProps {
    Component: any,
    pageProps: any
}

interface IStates {
    design: PaletteMode
}
 
export default class App extends React.Component<IProps, IStates> {

    state: IStates = {
        design: 'dark'
    }
    
    LPtheme = createTheme(
        getTheme(this.state.design)
    );

    render() {

        return (
        <ThemeProvider theme={this.LPtheme}>
            <MiniDrawer theme={this.LPtheme}>
                {<this.props.Component theme={this.LPtheme}></this.props.Component>}
            </MiniDrawer>
        </ThemeProvider>
        )
    }
}