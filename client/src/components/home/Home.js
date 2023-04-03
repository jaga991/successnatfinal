import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import HomeCard from "./HomeCard";

import './home.css';

import heroImg from './img/homemainimg.jpg';
import medal from './img/medal-.gif';
import improvement from './img/bar-chart.gif';
import teaching from './img/presentation.gif';



import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
    let cards = [
        {
            title: "MOE Recognized",
            text: "We are a MOE Recognized Tuition Centre since 2008",
            icon: medal
        },

        {
            title: "Improvement in grades",
            text: "Improvements in grades or your money back",
            icon: improvement
        },

        {
            title: "Unique Pedagogy",
            text: "We focus on critical thinking instead of route memorization",
            icon: teaching
        }
    ]

    return(
        <Container id="home-container" fluid>
            <Row id="heroSection">
                <img id="heroImg" src={heroImg} />
                <div id="heroIntro">
                    <h1>#1 Most Trusted Tuition Centre In Singapore</h1>
                    <a href="/contact">Contact Us <FontAwesomeIcon icon={faArrowRight} beatFade /></a>
                </div>
            </Row>
            <Row className="justify-content-center background-main row-padding background-l" md={4}>
                {cards.map(item => <HomeCard title={item.title} text={item.text} icon={item.icon} />)}
            </Row>
        </Container>
    )
}