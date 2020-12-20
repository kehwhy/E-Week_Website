import { Heading, Text } from 'evergreen-ui'
import React from 'react'
import mech from "../../mechwins.png"
import StyledAbout from './styled/styled'

const AboutEvent = () => {
    return (
        <StyledAbout >
            <img className="mech-wins" src={mech} alt='mech-wins'></img>
            <div className='event-desc'>
                <Heading className="header-reg" size={700}>HEADER</Heading>
                <Text className="text-reg" size={400}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc consequat eros ac nisi ullamcorper venenatis. 
                    Ut mauris elit, vestibulum quis scelerisque nec, lacinia a magna. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Nam sit amet nulla eget turpis tristique mattis vel ac lectus. Proin tristique a nisi ac convallis. 
                    Nam lacinia dolor sed ligula lacinia, vitae lobortis odio auctor. Mauris varius vitae diam dapibus accumsan.
                    In finibus sem nibh, eu convallis magna eleifend non. Praesent feugiat eros vel cursus sagittis. 
                    Sed sed tortor laoreet massa ultrices congue at a lorem. Nam et mauris eu ante efficitur gravida. 
                    Duis sapien elit, ullamcorper a nisl a, finibus rhoncus risus. Aliquam erat volutpat.
                </Text>
            </div>
        </StyledAbout>
    )
}

export default AboutEvent