import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import {
  Row,
  Col,
  Container,
  Form,
  Input,
  Label
} from 'reactstrap';

import * as d3 from 'd3';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      lat: 51.505,
      long: -0.09
    }

    this.search = this.search.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(results) {
    this.setState({ cities: results });
  }

  componentDidMount() {
    let cityList = [{
      country: 'Afghanistan',
      name: 'Kabul',
      lat: 34.5166667,
      long: 69.1833344
    }];

    d3.csv("https://raw.githubusercontent.com/bahar/WorldCityLocations/master/World_Cities_Location_table.csv").then(function (data) {

      for (let i = 0; i < data.length; i++) {
        cityList.push({
          country: data[i].Afghanistan,
          name: data[i].Kabul,
          lat: parseFloat(data[i][34.5166667]),
          long: parseFloat(data[i][69.1833344])
        });
      }
    }).then(() => {
      this.updateState(cityList);
    }).catch(function (err) {
      console.log(err);
    });
  }

  search(cityName) {
    this.setState((state) => {
      let currentCity = {}; 
      state.cities.forEach((city) => {
        if (city.name === cityName) {
          currentCity = city;
        }
      });
      console.log(currentCity);
      state.lat = currentCity.lat;
      state.long = currentCity.long;
      return state;
    })
  }

  render() {
    return (
      <body>
        <Container>
          <Row className="pt-3 px-3">
            <h2>Safety</h2>

          </Row>
          <Row className="pt-3 px-3">
            <CityForm search={this.search} />
          </Row>
          <Row className="px-3">
            <p>In any major city, zoom in to find hospital locations marked with a red cross.</p>
          </Row>
          <Row className="px-3">
            <Col sm="6" className="py-3">
              <li>Emergency Phone Number: <em>9-1-1</em></li>
              <li>Nearest Emergency Room: <em>Virginia Mason </em></li>
              <li>Non-Emergency Police Phone Number: <em>206-625-5011</em></li>
            </Col>
            <Col sm="6">
              <CityMap lat={this.state.lat} lng={this.state.long} />
            </Col>
          </Row>
          <Row className="pt-3 px-3">
            <p>
              This is an example of a few bits of emergency information that would be provided for a
              user that has selected Seattle as their location. Other examples of resources could be
              pest control, poison control, or fire department.
            </p>
          </Row>
        </Container>
      </body>
    )
  }
}

class CityMap extends Component {
  render() {
    const position = [this.props.lat, this.props.lng]
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    )
  }
}


class CityForm extends Component {

  constructor(props) {
    super(props);
    this.state = { city: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.search(this.state.city);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={5}>
            <Label>Search for a major city...</Label>
          </Col>
          <Col md={4}>
            <Input type="text" value={this.state.city} onChange={this.handleChange} />
          </Col>
          <Col md={3}>
            <Input type="submit" value="Submit" />
          </Col>
        </Row>
      </Form>
    );
  }
}

