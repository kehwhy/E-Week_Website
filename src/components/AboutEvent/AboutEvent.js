import { Heading, Text } from 'evergreen-ui'
import React from 'react'
import mech from "../../mechwins.png"
import StyledAbout from './styled/styled'

const AboutEvent = () => {
    return (
        <StyledAbout >
            <div className="img_wrapper">
                <img className="mech-wins" src={mech} alt='mech-wins'></img>
            </div>
            <div className='event-desc'>
                <Heading className="header-reg" size={700}>OUR CAPTAINS</Heading>
                <Text className="text-reg" size={400}>
                Up to 10 people are selected by their department’s VP Internal to be Captains for their team. 
                As of E-Week 2020, each team has had to appoint a Rookie Captain, an Equity Captain as well as a Points Captain 
                who have more specific roles tailored to their position. However, all Captains are in charge of:
                <ul>
                    <li>Creating and facilitating new ways to hype up their team and making  sure as many people participate and feel included!</li>
                    <li>Communicating  with the coords</li>
                    <li>Communicating with their team</li>
                    <li>Recruiting people to their team</li>
                    <li>Making sure the team environment is inclusive and equitable!!!</li>
                    <li>Promoting the Captains Package (a document with everything they need to know about E-Week that year)</li>
                </ul>
                </Text>
            </div>
        </StyledAbout>
    )
}

export default AboutEvent