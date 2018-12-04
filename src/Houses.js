import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Label,
    FormGroup,
    Form,
    Input,
    CardTitle,
    CardBody,
    CardText,
    CardLink,
    Card
} from 'reactstrap';
import './App.css';
import Papa from "papaparse";

export default class HouseFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {bedrooms: 0, bathrooms: 0, rent: 0};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let eventType = event.target.name;
        if(eventType === "bedrooms") {
            this.setState({bedrooms: event.target.value});
        } else if(eventType === "bathrooms") {
            this.setState({bathrooms: event.target.value});
        } else {
            this.setState({rent: event.target.value});
        }
    }

    render() {
        return(
            <React.Fragment>
                <Container>
                    <Row className="px-5 pt-3">
                        <h1>Viewing current listings</h1>
                    </Row>
                    <Row className="px-5">
                        <SearchInput submitCallback={this.handleSubmit} changeCallback={this.handleChange}/>
                    </Row>
                    <Row className="px-5"
                        <HouseFeed bed={this.state.bedrooms} bath={this.state.bathrooms} rent={this.state.rent}></HouseFeed>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

class SearchInput extends Component {
    render() {
        return(
            <Form>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="minBedroom">Min Bedrooms</Label>
                            <Input id="minBedroom" type="number" name="bedrooms" onChange={this.props.changeCallback}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="minBathroom">Min Bathrooms</Label>
                            <Input id="minBathroom" type="number" name="bathrooms" onChange={this.props.changeCallback}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="maxRent">Max Rent</Label>
                            <Input id="maxRent" type="number" name="rent" onChange={this.props.changeCallback}/>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}

class HouseCard extends Component {
    render() {
        let cardData = this.props.cardData;
        return(
            <Card className="shadow-sm">
                <CardBody>
                    <CardTitle>{cardData.address}</CardTitle>
                </CardBody>
                <img width="100%" src={cardData.photo} alt="Exterior of home" />
                <CardBody>
                    <CardText>{cardData.bedrooms + " bedrooms"}</CardText>
                    <CardText>{cardData.bathrooms + " bathrooms"}</CardText>
                    <CardText>{cardData.rent + " a month"}</CardText>
                    <CardText>{cardData.parking + " parking spots"}</CardText>
                    <CardLink href={cardData.website}>View Listing</CardLink>
                </CardBody>
            </Card>
        );
    }
}

class HouseFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};

        this.updateState = this.updateState.bind(this);
    }

    updateState(results) {
        this.setState({data: results.data});
    }

    componentWillMount() {
        Papa.parse("https://raw.githubusercontent.com/tylervanbrocklin/fileHost/master/house_data.csv", {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: this.updateState
        });
    }

    render() {
        let bed = this.props.bed;
        let bath = this.props.bath;
        let rent = this.props.rent;
        let cardList = [];
        if(rent === 0 || !rent) {
            this.state.data.forEach((element) => {
                if(element.bedrooms >= bed && element.bathrooms >= bath) {
                    cardList.push(<HouseCard cardData={element}></HouseCard>);
                }
            });
        } else {
            this.state.data.forEach((element) => {
                let rentVal = Number(element.rent.replace(/[^0-9.-]+/g,""))
                if(element.bedrooms >= bed && element.bathrooms >= bath && rentVal < rent) {
                    cardList.push(<HouseCard cardData={element}></HouseCard>);
                }
            });
        }
        return (
            <div className="card-columns" aria-live="polite" role="feedOfCards">{cardList}</div>
        );
    }
}
