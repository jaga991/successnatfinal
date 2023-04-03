import Card from 'react-bootstrap/Card';


export default function HomeCard({title, text, icon}) {
    return(
        <Card className="d-flex align-items-center h-50 border-0">
            <Card.Img className="card-img align-self-center w-25 h-25" variant="top" src={icon} />
            <Card.Body className="text-center justify-content-center">
                <Card.Title className="text-center">{title}</Card.Title>
                <Card.Text className="h-auto">
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}