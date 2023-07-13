import styled, {keyframes} from 'styled-components';
import { motion } from "framer-motion"
import Background from '../../assets/background.png';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Container = styled(motion.div)`
    background-image: url("${Background}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    background-color:#0A0A0A;
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction:column;
`

export const Loader = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    height: 90vh;
    flex-direction:column;
`

export const Spinner = styled.div`
    width: 120px;
    height: 120px;
    border: 4px solid rgba(113,89,193,0.5);
    border-top: 4px solid #7159C1;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`

export const Image = styled.img`
    position: absolute;
    margin-bottom: 90px;
`

export const Text = styled.p`
    margin-top: 66px;
    color: rgba(255, 255, 255, 0.15);
    font-family: Arial, sans-serif;
    font-size: 15px;
    font-weight: normal;
    line-height: normal;
`

export const Content = styled(motion.div)`

`