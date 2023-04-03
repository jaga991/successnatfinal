import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {motion} from "framer-motion";

import './about.css';

export default function Intro({title, text}) {
    return(
        <motion.div initial={{opacity:0}} transition={{duration:2, delay:0.5}} whileInView={{opacity:1}} viewport={{once:true}} className="text-center about-text-div">
            <h2 className="about-header-font">{title}</h2>
            <hr className="solid"></hr>
            {text.map(item => <p>{item}</p>)}
        </motion.div>
    )
}