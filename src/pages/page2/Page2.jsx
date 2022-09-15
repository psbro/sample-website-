import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"

const Page2 = () => {
    return (
        <Page_Sec>
            <h1>What makes us different?</h1>

            <h2>Reimagining and rewiring self-care </h2>

            <div className="content">
                <p>
                    You care about conscious consumption, and so do we.
                </p>

                <p>
               when it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best
                </p>

                <p>
                We collaborate with researchers and doctors to
                </p>

                <p>
                  1. Help you get granular about your health and self-care with personalized insights, and
                </p>

                <p>
                  2. Equip you with simple, sustainable products that get the job done
                </p>

                <p>
                No to-the-moon-and-back claims in this neck of the woods.
                </p>

                <p>
                We’re just solving real problems for real people here
                </p>
            </div>
        </Page_Sec>
    )
}

export default Page2;

const Page_Sec = styled(motion.div)`
width: 100vw;
height: 700px;
/* border: 3px solid black; */
background: linear-gradient(165.41deg, #D99EC9 0%, rgba(246, 240, 196, 0) 100%);
justify-content: center;
text-align: center;

@media(max-width: 410px){
    position: relative;
    top: 5rem;
}

@media(max-width: 330px){
    position: relative;
    top: 9rem;
}

h1{
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 33px;
color: #1B1B50;
position: relative;
top: 1rem;
justify-content: center;
text-align: center;
}

h2{
font-family: 'Oswald', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 43px;
color: #1B1B50;
position: relative;
top: 3rem;
justify-content: center;
text-align: center;
}

.content{
    /* border: 3px solid black; */
    width: 100vw;
    height: 80vh;
    position: relative;
    top: 3.5rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-direction: column;

    p{
    font-family: 'DM Sans';
    font-style: normal;
   font-weight: 300;
   font-size: 14px;
   line-height: 25px;
   color: #1B1B50;
   text-align: left;
    margin-left: 1.3rem;
    }
}

`