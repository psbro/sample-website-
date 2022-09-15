import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"

const Page8 = () => {
  return (
    <>
      <Page_Section>
         

         <div className="box">
         
         </div>
         <p>
         With Diana, you’re in control of your health, your every day, and your story
         </p>
      </Page_Section>
    </>
  )
}

export default Page8;

const Page_Section = styled(motion.div)`
width: 100vw;
height: 70vh;
background: linear-gradient(180deg, #FFF6FB 0%, #E7F6FC 100%);
justify-content: center;
text-align: center;

p{
font-family: 'Oswald', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 44px;
color: rgba(0, 0, 0, 0.8);
margin-top: auto;
margin-bottom: auto;
}

.box{
width: 287px;
height: 142px;
display: flex;
justify-content: center;
text-align: center;
margin-right: auto;
margin-left: auto;
position: relative;
top: 9rem;
background: linear-gradient(156.97deg, rgba(255, 10, 186, 0.52) 0%, rgba(24, 160, 251, 0.52) 86.68%);
opacity: 0.33;
filter: blur(46.5px);
}

`