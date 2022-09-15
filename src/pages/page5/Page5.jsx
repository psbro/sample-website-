import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import pic2 from "../../assets/images/pic2.jpg"

const Page5 = () => {
  return (
    <Page_Section>
      <h1>
        Track your Period
      </h1>

      <p>
        Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.
      </p>

      <button>
        Track your period on the app
      </button>

      <img src={pic2} alt="" />

      
    </Page_Section>
  )
}

export default Page5

const Page_Section = styled(motion.div)`
width: 100vw;
height: 120vh;
background: linear-gradient(176.88deg, #F3B8BC 2.58%, #FFDAD4 93.07%);
justify-content: center;
text-align: center;


h1{
font-family: 'Oswald', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 43px;
color: #000000;
position: relative;
top: 1.8rem;
}

p{
font-family: 'DM Sans';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 29px;
color: rgba(0, 0, 0, 0.8);
position: relative;
top: 4rem;
}

button{
position: relative;
top: 9rem;
width: 315px;
height: 66px;
background: linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%);
box-shadow: 0px 2px 6px rgba(255, 22, 64, 0.33);
border-radius: 70px;
outline: none;
border: none;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 19.8px;
line-height: 30px;
text-align: center;
color: #FFFFFF;



@media(max-width: 330px){
    width: 285px;
    font-size: 15px;
}


}

img{
  height: 350px;
  width: 100%;
  position: relative;
  top: 12rem;
}


`