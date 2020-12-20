import React from 'react'
import { Heading, Icon } from 'evergreen-ui'
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
        </StyledFooter>
    )
}

export default Footer