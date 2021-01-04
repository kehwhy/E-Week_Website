import React from 'react'
import home from '../../home.jpg'
import participants from '../../eweek-participants.png'
import StyledHome from './styled/styled';
import { Heading, Text } from 'evergreen-ui';

const Home = () => {
    return (
        <StyledHome className="home">
            <img className="home-img" src={home} alt="EWeek Home"></img>
            <div className='cards'>
                <div className='card-1'>
                    <Heading className='header-reg' size={700}>WHAT IS EWEEK?</Heading>
                    <Text className='text-reg' size={400}>
                    With the start of every year, energy rises among the 10 engineering 
                    departments of McGill University as they get ready for a week-long 
                    competition known as “Engineering Week” (E-Week for short). 
                    Each departmental team hopes to collect enough points by participating in a
                     variety of events, ranging from scavenger hunts to drinking games to design competitions 
                     to sports and much more in the hopes of obtaining the E-Week Trophy and the glorious title of E-Week Champions.
                    </Text>
                </div>
                <div className="card-2">
                <img className='card-img' alt="E-Week Participants" src={participants}></img>
                </div>
                <div className='card-3'>
                    <Heading className='header-reg' size={700}>WHY DOES E-WEEK MATTER?</Heading>
                    <Text className='text-reg' size={400}>
                    As mentioned, E-Week is an interdisciplinary competition consisting of 
                    numerous smaller events and challenges spread out through the month of February. 
                    These activities have the purpose to provide exciting experiences and enable participants 
                    to form new friendships and reinforce existing ones between students of different years and departments 
                    through an extra-curricular platform. 
                    <br/>
                    With this idea in mind,we present our mission statement:
                    <br/>
                    <strong>E-Week strives to promote and uphold the spirit of camaraderie and community amongst Engineers and Friendgineers through a month-long interdepartmental competition that fosters a fun, safe, and inclusive environment.</strong>

                    </Text>
                </div>
            </div>
        </StyledHome>
        
    );
}

  export default Home