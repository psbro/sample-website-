import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import pic1 from "../../assets/images/pic1.jpg"

const Page3 = () => {
    return (
        <Home_Section>
            <h1>
                Liberate your everyday wellness !
            </h1>

            <h2>
                Shop our self-care products
            </h2>

            <h6>
                Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.
            </h6>

            <button>
                upgrade your self-care
            </button>

            <p>
                #NoNasties, we promise!
            </p>

            <img src={pic1} alt="" />
        </Home_Section>
    )
}

export default Page3;

const Home_Section = styled(motion.div)`
width: 100vw;
height: 120vh;
background: #DCE9E9;
justify-content: center;
text-align: center;

@media(max-width: 433px){
    position: relative;
    top: 3rem;
}

@media(max-width: 395px){
    position: relative;
    top: 6rem;
}

h1{
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 33px;
color: #1B1B50;
position: relative;
top: 1.5rem;
}

h2{
font-family: 'Oswald', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 43px;
color: #000000;
position: relative;
top: 3rem;
}

h6{
font-family: 'Poppins';
font-style: normal;
font-weight: lighter;
font-size: 14px;
line-height: 29px;
color: rgba(0, 0, 0, 0.8);
position: relative;
top: 5rem;
}

button{
    position: relative;
    top: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 45px;
    gap: 10px;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(297.28deg, #F66E6E 67.01%, rgba(246, 110, 110, 0) 123.71%);
    box-shadow: 0px 2px 6px rgba(255, 22, 64, 0.33);
   border-radius: 70px;
   width: 375px;
   height: 66px;
   outline: none;
   border: none;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;

  @media(max-width: 395px){
    width: 300px;
    font-size: 15px;
}

@media(max-width: 320px){
    width: 280px;
    font-size: 13px;
}
}

p{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 33px;
text-align: center;
color: rgba(0, 0, 0, 0.8);
position: relative;
top: 10rem;
}

img{
    width: 100%;
    height: 440px;

    @media(max-width: 320px){
        height: 400px;
    }
}

`