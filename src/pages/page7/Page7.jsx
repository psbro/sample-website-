import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import pic4 from "../../assets/images/pic4.png"

const Page7 = () => {
    return (
        <Page_Section>

            <h1>Get your personalized period box</h1>
            <div className="box1">
                <img src={pic4} alt="" />
            </div>
            <p>Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. </p>
            <button>Create your box on the app <ChevronRightIcon style={{position: "relative" , top: "8px"}} /> </button>
        </Page_Section>
    )
}

export default Page7;

const Page_Section = styled(motion.div)`
width: 100vw;
height: 110vh;
background: #F66E6E;
justify-content: center;
text-align: center;

h1{
font-family: 'Oswald', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 43px;
color: rgba(255, 255, 255, 0.8);
position: relative;
top: 1.8rem;
}

.box1{
width: 100%;
height: 290px;
margin-left: auto;
margin-right: auto;
position: relative;
top: 4rem;

img{
    width: 100%;
    height: 290px;
}
}

p{
font-family: 'DM Sans';
font-style: normal;
font-weight: lighter;
font-size: 14px;
line-height: 29px;
color: rgba(255, 255, 255, 0.8);
position: relative;
top: 6.5rem;
}

button{
    position: relative;
    top: 9rem;
    background: #000000;
    border-radius: 27px;
    width: 287px;
    height: 43px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 29px;
    color: #FFFFFF;
    outline: none;
    border: none;
    text-align: center;
}

`