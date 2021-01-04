import React from 'react'
import { Heading, Icon, Text } from 'evergreen-ui'
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'
import stars from '../../stars.png'
import StyledFooter from './styled/styled'

const Footer = () => {

    const iconColor = 'white'

    return (
        <StyledFooter>
                <Heading className='heading' size={100}>McGill Engineering Week</Heading>
                <div className="footer-icons">
                    <div className='icon'>
                        <a href={"https://www.instagram.com/mcgilleweek/"}>
                            <Icon color={iconColor} icon={FaInstagram} size={32}></Icon>
                        </a>
                    </div>
                    <div className='icon'>
                        <a href={"https://www.facebook.com/McGillEWeek"}>
                            <Icon color={iconColor} icon={FaFacebook} size={32}></Icon>
                        </a>
                    </div>
                    <div className='icon'>
                        <a href={"https://www.tiktok.com/@mcgilleweek"}>
                            <Icon color={iconColor} icon={SiTiktok} size={32}></Icon>
                        </a>
                    </div>
                    <div className='icon'>
                        <a href={"mailto:eweek@mcgilleus.ca"}>
                            <Icon color={iconColor} icon={FaEnvelope} size={32}></Icon>
                        </a>
                    </div>
                </div>
                <img className="stars" alt="stars" src={stars}></img>
                <Text className="land-awknowledgement"> 
                    While we are meeting from across the globe, we acknowledge that the EUS and McGill University, 
                    share spaces that we all engage with, are located on the traditional territory of the Kanien'kehá:ka, 
                    Haudenosaunee and Anishinabeg nations. 
                    <br/>
                    We affirm the living relationship that the Kanien'kehá:ka maintain with the land. 
                    <br/>
                    We must all also educate ourselves about the continued systemic forms of colonialism that impact the 
                    lives of indigenous peoples across Canada both historically and presently. 
                    <br/>
                    We invite you to consider your relationship with the land you are currently sitting on and take a moment 
                    to honour this land and reflect upon its past, present and future.
                </Text>
        </StyledFooter>
    )
}

export default Footer