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
                    <Heading className='header-reg' size={700}>HEADER</Heading>
                    <Text className='text-reg' size={400}>
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
                <div className="card-2">
                <img className='card-img' alt="E-Week Participants" src={participants}></img>
                </div>
                <div className='card-3'>
                    <Heading className='header-reg' size={700}>HEADER</Heading>
                    <Text className='text-reg' size={400}>
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
            </div>
        </StyledHome>
        
    );
}

  export default Home