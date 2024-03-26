import React from "react"
import Head from 'next/head'


export default class HeadComponent extends React.Component<any, {}> {
    
    constructor(props: any){
        super(props)
    }
    
    render() {
        return(
            <Head>
                <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            </Head>
        )
    }
}