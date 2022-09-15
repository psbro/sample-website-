import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
    return (
        <>
            <Page_Section>
                 <FacebookOutlinedIcon style={{
                    height: "24px",
                    width: "24px",
                    background: "#E9F4FF",
                    position: "relative",
                    top: "60px",
                     left: "210px"

                }} />

                <TwitterIcon style={{
                    height: "24px",
                    width: "24px",
                    background: "#E9F4FF",
                    position: "relative",
                    top: "60px",
                     left: "230px"
                }} /> 

                <div className="foot_cont">
                     <ul>
                        <li>Products  <ChevronRightIcon style={{ position: "relative", top: "0.5rem" }} /> </li>
                        <li>Our Science <ChevronRightIcon style={{ position: "relative", top: "0.5rem" }} /> </li>
                        <li>Vision & Mission <ChevronRightIcon style={{ position: "relative", top: "0.5rem" }} /> </li>
                        <li>About Us <ChevronRightIcon style={{ position: "relative", top: "0.5rem" }} /> </li>
                    </ul> 

                     <h6></h6> 
                     <p>Subscribe to our newsletter</p> 
                     <div className="entry">
                        <div className="inp_box">
                            Enter your E-mail
                        </div>

                        <div className="mail_box">
                            Activate
                        </div>
                    </div> 
                </div>

            </Page_Section>
        </>
    )
}

const Page_Section = styled(motion.div)`
width: 100vw;
height: 80vh;
background: #050506;

.foot_cont{
position: relative;
top: 8rem;
height: 160px;

ul{
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1rem;
    margin-left: 1.5rem;
}

ul li {
    color: white;
    text-decoration: none;
    list-style: none;
}

h6{
    border: 0.5px solid #E3F4FF;
    width: 306px;
    background-color: #E3F4FF;
    position: relative;
    top: 2rem;
    margin-left: auto;
    margin-right: auto;
    

    @media(max-width: 320px){
        width: 266px;
    }
}

p{
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 8.94737px;
line-height: 18px;
color: #FFFFFF;
position: relative;
top: 3.5rem;
margin-left: 1.5rem;

}

.entry{
    display: flex;
    position: relative;
    top: 5rem;
    height: 70px;
    justify-content: space-around;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    .inp_box{
        background: rgba(255, 255, 255, 0.62);
        border: 1px solid #E7F6FC;
        border-radius: 4px;
        width: 196px;
        height: 30px;
        margin-top: auto;
        margin-bottom: auto;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 25px;
        color: #000000;
        @media(max-width: 320px){
        width: 166px;
    }

    }

    .mail_box{
        background: #D6F4FB;
       border: 1.2782px solid #E9F4FF;
       border-radius: 17.2556px;
       width: 85px;
      height: 27px;
      margin-top: auto;
      margin-bottom: auto;
      font-family: 'Poppins';
     font-style: normal;
     font-weight: 600;
    font-size: 10px;
     line-height: 18px;
    color: #1B1B50;
    display: flex;
    text-align: center;
    justify-content: space-around;

    @media(max-width: 320px){
        width: 75px;
    }
    

    }
}



}
`

export default Footer