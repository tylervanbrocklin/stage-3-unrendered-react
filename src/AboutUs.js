import React, { Component } from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import './App.css';

export default class AboutUsPage extends Component {
    render() {
        return(
            <Container>
                <Row className="px-5 pt-3">
                    <h2>Why Dawg House was Created</h2>
                    <p>Around junior or senior year, many students in the dorms seek to move off-campus into an
                        apartment or house
                        with friends. This is partly due to the desire for more independence, but also the fact that UW
                        campus housing
                        has been getting increasingly more expensive and it is often cheaper to live off campus.
                        Similarly, around this time those in fraternities and sororities tend to move out of their
                        chapter
                        houses to find what's often referred to as a 'live out'. With leases often 12 months long,
                        selecting an affordable and reasonable place
                        to live for your last two years of school is a critical time in each college student's
                        life. </p>
                </Row>
                <Row className="px-5">
                    <img src={require('./uw-alder.jpg')} className="aboutImg" alt="UW's Alder Residence Hall."></img>
                </Row>
                <Row className="px-5">
                    <p>Alder Hall, photo from University of Washington
                            <a href="https://hfs.uw.edu/Live/Undergraduate-Residence-Halls-and-Apartments"> HFS</a>.</p>
                </Row>
                <Row className="px-5">
                        <h2>Why a Solution is Needed</h2>
                        <p>While there are websites dedicated to finding apartments for rent, it tends to be extremely
                            difficult to find
                            houses in the U-District as there are no centralized websites or apps. Rather, the numerous
                            property
                            management companies that own much of the real estate north of 45th each have their own,
                            often dated, websites
                            detailing their listings. Further, UW-area houses often are often leased out roughly 10
                            months before the start
                            of the lease which complicates things when each rental house has it's own deadlines and
                            application requirements.
                            Some of these UW rental house websites include:</p>
                        <ul>
                            <li><a href="http://www.udistricthousing.com/">http://www.udistricthousing.com/</a></li>
                            <li><a href="http://www.uwhousing.net/">http://www.uwhousing.net/</a></li>
                            <li><a href="http://www.uwrentalhomes.com/">http://www.uwrentalhomes.com/</a></li>
                            <li><a href="https://www.uwstudenthouses.com/">https://www.uwstudenthouses.com/</a></li>
                        </ul>
                        <p>Additionally, for those living off campus in a house, but have a spare room or two, it can be
                            difficult
                            to find someone to sublease as none of the above listed offer functionality for this. For
                            those seeking to
                            sublease a room for a quarter or full-year must search UW Facebook groups to find one which
                            can be
                            troublesome for both the subleaser and the owner.</p>
                        <img src={require('./uwhousing.png')} className="aboutImg img-responsive" alt="Screenshot of UWhousing.com home page."></img>
                </Row>
                <Row className="px-5">
                        <p>Screenshot of <a href="http://www.uwhousing.com">www.uwhousing.com</a>.</p>
                </Row>
            </Container>
        );
    }
}