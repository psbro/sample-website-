import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import pic3 from "../../assets/images/pic3.jpeg"

const Page6 = () => {
  return (
    <Page_Section>
      <h1>
         Consult with wellness experts
      </h1>

      <p>
      Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you. 
      </p>

      <button>
        Get a consultation
      </button>

      <img src={pic3} alt="" />
    </Page_Section>
  )
}

export default Page6;

const Page_Section = styled(motion.div)`
width: 100vw;
height: 115vh;
background: linear-gradient(270deg, #DADAE4 0.25%, #EEEEF0 24.33%, #F8F8F8 52.08%, #FEFEFE 100%);
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
background: linear-gradient(288.62deg, #6E8CF6 42.36%, rgba(110, 213, 246, 0.93) 115.74%);
box-shadow: 0px 2px 16px rgba(71, 222, 255, 0.33);
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
  width: 100%;
  height: 300px;
  position: relative;
  top: 14.85rem;

  @media(max-width: 345px){
    height: 270px;
  }

  @media(max-width: 330px){
    height: 230px;
  }
}
`

