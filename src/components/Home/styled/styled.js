import styled from 'styled-components'

const StyledHome = styled.div`
    padding-top: 80px;
    width: 100%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    
    .home-img {
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .card-1 {
        float:left;
        padding: 25px;
        padding-left: 50px;
        width: 25%;
    }
    .card-2 {
        margin: 0;
        float:left;
        padding: 25px;
        width: 34%;
        text-align: center;
        margin-top: 30px;

        img {
            width: 75%
        }
    }
    .card-3 {
        float: right;
        padding: 25px;
        padding-right: 50px;
        width: 25%;
    }
`

export default StyledHome