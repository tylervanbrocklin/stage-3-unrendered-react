import {Component} from "react";
import React from "react";
import {
    Jumbotron,
    Button,
    Card,
    CardDeck,
    CardBody,
    CardTitle,
    CardText,
    Container,
    Row,
    FormGroup,
    Form,
    Label,
    Input
} from 'reactstrap';
import {Link} from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbo></Jumbo>
                <HomeCards></HomeCards>
                <ContactForm></ContactForm>
            </React.Fragment>
        );
    }
}

class Jumbo extends Component {
    render() {
        return(
            <Jumbotron className="text-center">
                <h1 className="display-3 text-white">Welcome to Dawg House</h1>
                <p className="lead text-white">Dawg House is a new site designed to help students at the University of
                    Washington
                    find off-campus housing. Whether you're searching for a room to rent, apartment,
                    or house for your group, we've got you covered.</p>
                <Button color="light" size="lg" href="#">Learn more</Button>
            </Jumbotron>
        );
    }
}

class HomeCards extends Component {
    render() {
        return(
            <Container>
                <Row className="px-3">
                    <CardDeck>
                        <Card className="shadow text-center">
                            <CardBody>
                                <CardTitle>Houses for Rent</CardTitle>
                                <CardText>Have a large group and looking to rent a house near campus? We have
                                    listings
                                    ranging from 5-15 bedrooms and restrict listings to be no more than a 15min walk from
                                    campus.</CardText>
                                <Button tag={Link} to="/Houses" color="primary">Find Houses</Button>
                            </CardBody>
                        </Card>
                        <Card className="shadow card text-center">
                            <CardBody>
                                <CardTitle>Apartments for Rent</CardTitle>
                                <CardText>Have a smaller group, or looking for your own place? We have
                                    listings
                                    ranging
                                    from studios to 4 bedroom apartments. All apartments are no more than a 15min walk to
                                    campus.</CardText>
                                <Button color="primary" disabled>Coming Soon</Button>
                            </CardBody>
                        </Card>
                        <Card className="shadow card text-center">
                            <CardBody>
                                <CardTitle>Subleases</CardTitle>
                                <CardText>Wanting to sublease, or find a subleaser? We match people with
                                    large
                                    groups
                                    looking to fill a room for either a quarter or full-year. Our site helps you find the
                                    perfect
                                    match.</CardText>
                                <Button color="primary" disabled>Coming Soon</Button>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Row>
            </Container>
        );
    }
}

class ContactForm extends Component {
    render() {
        return(
            <Container>
                    <Form className="px-5 py-5">
                        <FormGroup>
                            <Label for="name">Your Full Name:</Label>
                            <Input id="name" type="text" placeholder="Enter full name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Your Email Address:</Label>
                            <Input id="email" type="email" placeholder="Enter your email address"></Input>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <Label for="message">Your Message:</Label>
                            <Input id="message" type="textarea" name="text" id="messageText" />
                        </FormGroup>
                        <Button type="submit" color="primary">Submit</Button>
                    </Form>
            </Container>
        );
    }
}