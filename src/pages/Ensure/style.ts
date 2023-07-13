import styled from 'styled-components';
import { motion } from 'framer-motion';
import Background from '../../assets/background.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction:column;
    background-image: url("${Background}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    background-color:#0A0A0A;
`

export const Content = styled(motion.div)`
    display:flex;
    margin-top: 33px;
    margin-left: 25px;
    flex-direction:column;
    margin-right: 15px;
`

export const Title = styled.h1`
    margin-top: 29px;
    color: #7159C1;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Description = styled.p`
    color: rgba(255, 255, 255, 0.20);
    font-family: Arial;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 3px;
`

export const CmdContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 30px;
`

export const Cmd = styled.div`
    display:flex;
    width: 458px;
    height: 222px;
    border-radius: 10px 10px 0px 0px;
    border: 1px solid rgba(255, 255, 255, 0.03);
    background: #0A0A0A;
    flex-direction:column;
    justify-content:space-between;
`

export const InputContainer = styled.div`
    display:flex;
    width: 100%;
    align-items:flex-end;
    background-color:green;
`

export const Input = styled.input`

    width: 100%;
    height: 25px;
    display:flex;
    align-items: flex-end;
    border: none;
    background-color: rgb(15,15,15);

    font-family: Arial;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color:rgba(255,255,255,0.4);
    padding: 8px;

    &::placeholder {
        color: #343434;
    }

    &:focus {
        outline: none;
        border: none;
    }

`
export const LogsContainer = styled.div`
    margin-top: 5px;
    width: 100%;
    height: 90;
    padding: 5px;
    overflow-y: scroll;
`

export const Logs = styled.p`
    margin-top: 5px;
    color: #FFF;
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-weight: 300px
`

export const RightContainer = styled.div`

`

export const MtaServerContainer = styled.div`
    display:flex;
    flex-direction:row;
`

export const MtaServerInput = styled.input`

    width: 511px;
    height: 23px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.01);
    background: rgba(85, 85, 85, 0.02);

    color: rgba(255, 255, 255, 0.20);
    font-family: Arial;
    font-size: 9px;
    padding-left: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &:focus {
        outline:none;
    }
`

export const Button = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 95px;
    height: 23px;
    border-radius: 5px;
    background: #7159C1;
    margin-left: 15px;

    color: #FFF;
    text-align: center;
    font-family: Arial;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    transition: all 500ms;
    &:hover {
        cursor:pointer;
        opacity: 0.6;
    }

    margin-bottom: 10px;
`

export const Mod = styled.div`
    width: 621px;
    height: 26px;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.01);
    background: rgba(85, 85, 85, 0.02);

    display:flex;
    flex-direction:row;
    align-itens:center;
    margin-bottom: 2px;
`

export const CheckBox = styled.input`
    margin: 5px;
`

export const ModName = styled.p`
    display: flex;
    height: 23px;
    flex-direction: column;
    justify-content: center;

    color: rgba(255, 255, 255, 0.10);
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Mods = styled(motion.div)`
    max-height: 200px;
    overflow-y: scroll;
`