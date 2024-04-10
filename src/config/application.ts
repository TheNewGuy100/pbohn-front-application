import { createContext } from "react"
import style from '../pages/_app.module.scss'

interface IApplicationContext {
    theme: IApplicationContextTheme
    primaryColor: string
    secondaryColor: string
}

interface IApplicationContextTheme {
    scheme: 'dark' | 'light'
    navigationDirection: 'vertical' | 'horizontal'
    styles: {readonly [key:string]: string}
}

const ApplicationContext = createContext<IApplicationContext | null>(null)

const defaultApplicationCTX: IApplicationContext = {
    theme: {
        scheme: "dark",
        navigationDirection: 'vertical',
        styles: style
    },
    primaryColor: "#ffffff",
    secondaryColor: "#ffffff",
}

export { ApplicationContext, defaultApplicationCTX }
export type { IApplicationContext }
 