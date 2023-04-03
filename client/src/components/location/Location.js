import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './location.css';

export default function Location() {
    return(
        <Container>
            <Row className='row-padding'>
                <h1 className='h1-style text-center'>Getting Here</h1>
            </Row>
            <Row lg={2}>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141215.32249253526!2d103.74159770470038!3d1.3554618310901294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d16a1400001%3A0xc3bd7b46ed50fc11!2sSuccess.Nat%20International%20Institute!5e0!3m2!1sen!2ssg!4v1679993802266!5m2!1sen!2ssg"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <Container className="d-flex justify-content-center align-items-center">
                    <Row className="d-block">
                        <h3 className="text-center">@Tampines</h3>
                        <p className="text-center">
                            Blk 144 Tampines St 12 #01-398 S(521144) <br></br>
                            Monday to Friday: 2pm - 10PM <br></br>
                            Saturday to Sunday: 9am - 5pm <br></br>
                        </p>
                    </Row>
                </Container>
            </Row>
            <hr className='solid'></hr>
            <Row lg={2}>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.678056389703!2d103.86794511394852!3d1.3698534618944076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1763b73c369b%3A0x519c0087e7b38813!2sSuccess.Nat%20Tutorial%20Centre!5e0!3m2!1sen!2ssg!4v1679995637538!5m2!1sen!2ssg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                <Container className="d-flex justify-content-center align-items-center">
                    <Row className="d-block">
                        <h3 className="text-center">@Serangoon North</h3>
                        <p className="text-center">
                            Blk 107 Serangoon North Avenue 1 #01-683 S(550107) <br></br>
                            Monday to Friday: 2pm - 10PM <br></br>
                            Saturday to Sunday: 9am - 5pm <br></br>
                        </p>
                    </Row>
                </Container>
            </Row>
            <hr className='solid'></hr>
            <Row lg={2}>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5172.517921767369!2d103.78894749065724!3d1.4408919744591306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1309f592e9d1%3A0x1300f7ac70ee16c2!2sSingapore%20730849!5e0!3m2!1sen!2ssg!4v1679996345629!5m2!1sen!2ssg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                <Container className="d-flex justify-content-center align-items-center">
                    <Row className="d-block">
                        <h3 className="text-center">@Tampines</h3>
                        <p className="text-center">
                            Blk 144 Tampines St 12 #01-398 S(521144) <br></br>
                            Monday to Friday: 2pm - 10PM <br></br>
                            Saturday to Sunday: 9am - 5pm <br></br>
                        </p>
                    </Row>
                </Container>
            </Row>
            <hr className='solid'></hr>
        </Container>
    )
}