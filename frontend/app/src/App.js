import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Polar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import React, { useState, Component } from "react";

// import Jumbotron from "react-bootstrap/Jumbotron";
// import Toast from "react-bootstrap/Toast";
// import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
// import { connect } from 'react-redux';
import { Nav, Navbar, Container, Row, Col, Card } from "react-bootstrap";
// import header_img from "./header.jpeg";

import "./App.css";

const linegraphall = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of Cases",
      //backgroundColor: "rgba(75,192,192,0.2)",
      //borderColor: "rgba(255,99,132,1)",
      //borderWidth: 3,
      data: [2, 1, 2, 1, 1, 1],
      fill: false,
      borderColor: "#DC143C",
    },
    {
      label: "Number of Tests Conducted",
      data: [4, 5, 7, 10, 9, 10],
      fill: false,
      borderColor: "#006400",
    },
    {
      label: "Number of Unemployment Claims",
      data: [10, 20, 12, 15, 10, 15],
      fill: false,
      borderColor: "#00008B",
    },
    //<Options />,
    /* display: true,
  labelString: "Number of Cases",
  lineHeight: 1.2,
  fontColor: "#666",
  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  fontSize: 12,
  fontStyle: "normal",
  padding: 4, */
  ],
};

const linegraphcases = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of Cases",
      //backgroundColor: "rgba(75,192,192,0.2)",
      //borderColor: "rgba(255,99,132,1)",
      //borderWidth: 3,
      data: [2, 1, 2, 1, 1, 1],
      fill: false,
      borderColor: "#DC143C",
    },
  ],
};

const linegraphtesting = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of Tests Conducted",
      data: [4, 5, 7, 10, 9, 10],
      fill: false,
      borderColor: "#006400",
    },
  ],
};

const linegraphunemployment = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of Unemployment Claims Filed",
      data: [10, 20, 12, 15, 10, 15],
      fill: false,
      borderColor: "#00008B",
    },
  ],
};

const bargraphcases = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of Cases",
      data: [1, 3, 6, 10, 20, 36],
      backgroundColor: "#DC143C",
      borderColor: "DC143C",
      borderWidth: 1,
      hoverBackgroundColor: "#CD5C5C",
      hoverBorderColor: "#CD5C5C",
      display: true,
      labelString: "Number of Cases",
      lineHeight: 1.2,
      fontColor: "#666",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: 12,
      fontStyle: "normal",
      padding: 4,
    },
  ],
};

const bargraphtesting = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of Tests Conducted",
      data: [1, 3, 6, 10, 20, 36],
      backgroundColor: "#006400",
      borderColor: "#006400",
      borderWidth: 1,
      hoverBackgroundColor: "#8FBC8F",
      hoverBorderColor: "#8FBC8F",
      display: true,
      labelString: "Number of Cases",
      lineHeight: 1.2,
      fontColor: "#666",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: 12,
      fontStyle: "normal",
      padding: 4,
    },
  ],
};

const bargraphunemployment = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Number of Unemployment Claims Filed",
      data: [1, 3, 6, 10, 20, 36],
      backgroundColor: "#00008B",
      borderColor: "#00008B",
      borderWidth: 1,
      hoverBackgroundColor: "#6495ED",
      hoverBorderColor: "#6495ED",
      display: true,
      labelString: "Number of Cases",
      lineHeight: 1.2,
      fontColor: "#666",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: 12,
      fontStyle: "normal",
      padding: 4,
    },
  ],
};

const polarchartall = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["#DC143C", "#006400", "#00008B", "#E7E9ED", "#36A2EB"],
      label: "Effects of Govt Orders in June 2020, IL", // for legend
    },
  ],
  labels: ["Number of Cases", "Tests Conducted", "Unemployment Claims"],
};

const doughnutchartall = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["#DC143C", "#006400", "#00008B", "#E7E9ED", "#36A2EB"],
      label: "Effects of Govt Orders in June 2020, IL", // for legend
    },
  ],
  labels: ["Number of Cases", "Tests Conducted", "Unemployment Claims"],
};

/* const timeline = {
  rectangle: {
    width: "80px",
    height: "10px",
  },
}; */

// export default function App() {
//   return (
//     <div className="App">
//       <Line data={graph1} />
//       <Bar
//         data={graph2}
//         width={100}
//         height={50}
//         options={{
//           maintainAspectRatio: false,
//         }}
//       />
//       <Polar data={graph3} />
//     </div>
//   );
// }
/*
import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    },
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Line chart</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;
*/
// =======
var TabName = [
  "Home",
  "Number of Cases",
  "Testing Conducted",
  "Unemployment Claims",
];

var TabData = [
  { name: TabName[0], isActive: true },
  { name: TabName[1], isActive: false },
  { name: TabName[2], isActive: false },
  { name: TabName[3], isActive: false },
];

class MyTabs extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs">
        {TabData.map(
          function (tab) {
            return (
              <MyTab
                data={tab}
                isActive={this.props.activeTab === tab}
                handleClick={this.props.changeTab.bind(this, tab)}
              />
            );
          }.bind(this)
        )}
      </ul>
    );
  }
}
class MyTab extends React.Component {
  render() {
    return (
      <li
        onClick={this.props.handleClick}
        className={this.props.isActive ? "active" : null}
      >
        <a href="#">{this.props.data.name}</a>
      </li>
    );
  }
}

class TabContent extends React.Component {
  render() {
    return (
      <Container fluid>
        {this.props.activeTab.name === TabName[0] ? (
          <Container fluid>
            <section className="panel panel-danger">
              <h2 className="panel-heading">Home</h2>
              <p className="panel-body">
                State government Stay-At-Home orders have been one of the
                strongest agents against the spread of COVID-19, but also one of
                the most controversial. In order to examine their impact, we
                must look at how the modifications in orders have affected each
                state. The largest concerns surrounding COVID-19 are associated
                with the increase in cases, a lack in testing, and the crumbling
                economy. These visualizations, starting with Illinois, plot the
                extent of Stay-At-Home orders against these three factors. The
                data can provide an understanding of which orders and
                modifications affect what and by how much. The conclusions can
                be used to shape orders and action for COVID-19 and future
                pandemics.
              </p>
            </section>
            <Container fluid>
              <Line data={linegraphall} />
              {/* <Polar data={polarchartall} /> */}
              <div className="timelinepart1" />
              <Doughnut data={doughnutchartall} />
            </Container>
          </Container>
        ) : null}
        {this.props.activeTab.name === TabName[1] ? (
          <Container fluid>
            <section className="panel panel-danger">
              <h2 className="panel-heading">Number of Cases</h2>
              <p className="panel-body">
                These visualizations highlight the effects of Stay-At-Home
                orders in regards to the number of COVID-19 cases.
              </p>
            </section>
            <Container fluid>
              <Line data={linegraphcases} />
              <div className="timelinepart1" />
              <Bar data={bargraphcases} />
              <div className="timelinepart1" />
            </Container>
          </Container>
        ) : null}
        {this.props.activeTab.name === TabName[2] ? (
          <Container fluid>
            <section className="panel panel-danger">
              <h2 className="panel-heading">Testing Conducted</h2>
              <p className="panel-body">
                These visualizations highlight the effects of Stay-At-Home
                orders in regards to the amount of testing conducted.
              </p>
            </section>
            <Container fluid>
              <Line data={linegraphtesting} />
              <div className="timelinepart1" />
              <Bar data={bargraphtesting} />
              <div className="timelinepart1" />
              />
            </Container>
          </Container>
        ) : null}
        {this.props.activeTab.name === TabName[3] ? (
          <Container fluid>
            <section className="panel panel-danger">
              <h2 className="panel-heading">Unemployment Claims</h2>
              <p className="panel-body">
                These visualizations highlight the effects of Stay-At-Home
                orders in regards to the number of unemployment claims filed.
              </p>
            </section>
            <Container fluid>
              {/* <Polar data={polarchartall} /> */}
              <Line data={linegraphunemployment} />
              <div className="timelinepart1" />
              <Bar data={bargraphunemployment} />
              <div className="timelinepart1" />
            </Container>
          </Container>
        ) : null}
      </Container>
    );
  }
}

class Navv extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: TabData[0],
    };

    // Bind the handleSelect function already here (not in the render function)
    // this.handleSelect = (tab) => this.setState({ activeTab: tab });
  }

  handleClick = (MyTab) => {
    this.setState({ activeTab: MyTab });
  };

  render() {
    return (
      <Container fluid>
        <MyTabs activeTab={this.state.activeTab} changeTab={this.handleClick} />
        <TabContent activeTab={this.state.activeTab} />
      </Container>
    );
  }
}

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Container fluid className="header-image-style">
      {/* <Image className="header-style" src={header_img} fluid /> */}
      <Card className="text-center transparent-0 header-text">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title as="h1">COVID-19</Card.Title>
          <Card.Text as="h3">
            The Effect of State Government Orders during COVID-19
          </Card.Text>
        </Card.Body>
      </Card>

      <Container fluid>
        <Navv />
      </Container>
    </Container>
  );
}

const App = () => <NavDropdownExample />;

export default App;
