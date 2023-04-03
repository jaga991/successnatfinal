import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel';
import {motion} from "framer-motion";

import Intro from "./Intro";
import alexImage from "./img/alex_add.jpg";
import belindaImage from "./img/belinda_add.jpg";
import daniaImage from "./img/dania_add.jpg";
import elysiaImage from "./img/elysia_add.jpg";
import gerardImage from "./img/gerard_add.jpg";
import guilanImage from "./img/guilan_add.jpg";
import michelleImage from "./img/michelle_add.jpg";
import nicholasImage from "./img/nicholas_add.jpg";
import niyiImage from "./img/niyi_add.jpg";
import rachelImage from "./img/rachel_add.jpg";
import shihsuanImage from "./img/shihsuan_add.jpg";
import shuqinImage from "./img/shuqin_add.jpg";
import yiyingImage from "./img/yiying_add.jpg";


import './about.css';


export default function About() {

    let aboutText = [
        {
            title: "Our Brief History",
            text: [
                "We started with the philosophy of providing quality education for all students who are willing to learn.",
                "Being school teachers in Singapore for several years, we decided to establish Success.NAT in 2008.",
                "Since then, we have been fighting alongside students to prepare them for all major exams and send them into their dream schools",
                "As many of our students came from all over Asia, parents continue to recommend their friends to us for assistance to send their children to Singapore as well."
            ],

        },
        {
            title: "Our Beliefs",
            text: [
                "We firmly believe that success is not all talent",
                "10% aspiration and 90% effort. All students can achieve success through proper education and character development"
            ]
        }

    ]

    let teachers = [
        {
            name: "Alex",
            image: alexImage
        },
        {
            name: "Belinda",
            image: belindaImage
        },
        {
            name: "Dania",
            image: daniaImage
        },
        {
            name: "Elysia",
            image: elysiaImage
        },
        {
            name: "Gerard",
            image: gerardImage
        },
        {
            name: "Guilan",
            image: guilanImage
        },
        {
            name: "Michelle",
            image: michelleImage
        },
        {
            name: "Nicholas",
            image: nicholasImage
        },
        {
            name: "Niyi",
            image: niyiImage
        },
        {
            name: "Rachel",
            image: rachelImage
        },
        {
            name: "Shih Suan",
            image: shihsuanImage
        },
        {
            name: "Shu Qin",
            image: shuqinImage
        },
        {
            name: "Yiying",
            image: yiyingImage
        },
        

    ]

    return(
        <Container id="about-container" fluid>
            <Row className="row-padding background-light">
                {aboutText.map(item => <Intro title={item.title} text={item.text} />)}
            </Row>
            <Row className="row-padding background-dark">
                <h2 className="text-center bg-light">Meet Our Teachers</h2>
                <Carousel>
                    {teachers.map(item=>
                        <Carousel.Item>
                            <h3 className="text-center">{item.name}</h3>
                            <img
                            className="carousel-image"
                            src={item.image}
                            alt="First slide"
                            />
                        </Carousel.Item> 
                    )}
                </Carousel>
            </Row>
        </Container>
    )

    
}