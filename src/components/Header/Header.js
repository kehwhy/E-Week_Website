import React from 'react'
import { Tab, TabNavigation, Text } from 'evergreen-ui'
import { FaBeer } from 'react-icons/fa';
import logo from "../../logo.png"
import StyledHeader from './styled/styled'

const Header = () => {
    console.log(FaBeer)
    return (
        <StyledHeader>
            <div className="logo-wrapper">
                <a href="/">
                <img classname='logo-pic' alt="logo"  src={logo}></img>
                </a>
            </div>
            <TabNavigation className="header-tabs">
            {['E-Week 2021', 'Our Sponsors'].map((tab, index) => (
                <Tab className="header-tab"  key={tab} is="a" href={tab.replace(" ", "-")} id={tab} >
                <Text className="button-tab-text" size={400}>{tab}</Text>
                </Tab>
            ))}
            <Tab className="button-tab"  key="Register" is="a" href={'https://linktr.ee/EWEEK'} id="Register" >
            <Text size={400} className="button-tab-text">Register</Text>
            </Tab>
            </TabNavigation>
        </StyledHeader>
    )
}

export default Header