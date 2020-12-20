import { Heading, Text } from 'evergreen-ui'
import euslogo from '../../eus_logo.png'
import gstorelogo from "../../gstore.png"
import frostbitelogo from "../../frostbite.png"
import blueslogo from "../../blues.png"
import ssmu from "../../ssmu.png"
import StyledSponsors from './styled/styled'

const Sponsors = () => {
    return (
        <StyledSponsors>
            <div className="sponsor-intro">
            <Heading className='sponsor-intro-heading' size={900}>Every year, E-Week relies on help from our generous sponsors.</Heading>
            <Text className='sponsor-intro-text' size={400}>Without the following organizations, our event would not be 
            possible. Thank you endlessly for your partnership and support.</Text>
            </div>
            <div className="sponsor-logos">
                <img className="eus" src={euslogo} alt="Engineering Undergraduate Society of Mcgill University"></img>
                <img className="gstore" src={gstorelogo} alt="The General Store"></img>
                <img className="frostbite" src={frostbitelogo} alt="Frostbite"></img>
                <img className="blues" src={blueslogo} alt="Blues Pub"></img>
                <img className="ssmu" src={ssmu} alt="The Student Society of McGill University"></img>
            </div>
        </StyledSponsors>
    )
}

export default Sponsors