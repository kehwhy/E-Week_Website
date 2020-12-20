import styled from 'styled-components'
import { keyframes } from 'styled-components'

const StyledHeader = styled.div`
    position: fixed;
    top: 0;    
    width: 100%;
    height: 75px;
    display: table;
    background-color: #173f5c;
    box-shadow: 0px 2px 3px #173f5c;

    .logo-wrapper {
        width: 25%;
        display: table-cell;
        vertical-align: middle;
        padding-left: 30px;

        img {
            width: 75px;
            padding: 10px;
        }
    }

    .header-tab, .button-tab {
        background-color: transparent;
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;

        .button-tab-text {
            font-size: 15px;
            color: white;
        }

        &:hover{
            box-shadow: 0px 0px 25px 5px #12344a;
            transform: scale(1.05);
        }
    }

    .button-tab {
        border: solid 5px white;
    }

    .header-tabs {
        display: table-cell;
        vertical-align: middle;
        padding: 15px;
        width: 75%;
        background-color: transparent;
        text-align: right;
    }
`;

export default StyledHeader