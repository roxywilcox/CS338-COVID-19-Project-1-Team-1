import {Bar, Doughnut, Line} from "react-chartjs-2";
import React from "react";
import { Nav, Navbar, Container, Row, Col, Card } from "react-bootstrap";
import TimeSeriesChart from "./components/TimeSeriesChart"
import "./App.css";


const line_graph = {
    labels: [],
    datasets: [
        {
            label: "Number of Cases",
            data: [],
            fill: false,
            borderColor: "#DC143C",
        },
        {
            label: "Number of Tests Conducted",
            data: [],
            fill: false,
            borderColor: "#006400",
        },
        {
            label: "Number of Unemployment Claims",
            data: [],
            fill: false,
            borderColor: "#00008B",
        },
    ],
};

const line_graph_cases = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Number of Daily confirmed",
            //backgroundColor: "rgba(75,192,192,0.2)",
            //borderColor: "rgba(255,99,132,1)",
            //borderWidth: 3,
            data: [2, 1, 2, 1, 1, 1],
            fill: false,
            borderColor: "#DC143C",
        },
    ],
};

const line_graph_testing = {
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

const bar_graph_cases = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Number of Daily confirmed",
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

const bar_graph_testing = {
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


var TabName = [
    "Project Overview",
    "Impact on Cases",
    "Impact on Testing",
    "Impact on Unemployment",
];

var TabData = [
    {name: TabName[0], isActive: true},
    {name: TabName[1], isActive: false},
    {name: TabName[2], isActive: false},
    {name: TabName[3], isActive: false},
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
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cases: [],
            tested: [],
            date: [],
            daily_confirmed: [],
            daily_tested: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/case19', {mode: "cors"})
            .then(res => res.json())
            .then(
                (result) => {
                    var cases = [], date = [], daily_confirmed = [], tested = [], daily_tested = [];
                    for (var i = 0; i < result.length; i++) {
                        cases.push(result[i].case);
                        date.push(result[i].date.substr(4,2) + "-" + result[i].date.substr(6,2) );
                        daily_confirmed.push(result[i].positiveIncrease);
                        tested.push(result[i].totalTestResults);
                        daily_tested.push(result[i].totalTestResultsIncrease);
                    }
                    this.setState({
                        isLoaded: true,
                        cases: cases,
                        date: date,
                        tested: tested,
                        daily_confirmed: daily_confirmed,
                        daily_tested: daily_tested,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, cases, date, daily_confirmed, tested, daily_tested} = this.state;
        line_graph.datasets[0].data = cases;
        line_graph.datasets[1].data = tested;
        line_graph.labels = date;
        line_graph_cases.datasets[0].data = daily_confirmed;
        line_graph_cases.labels = date;
        bar_graph_cases.datasets[0].data = daily_confirmed;
        bar_graph_cases.labels = date;
        line_graph_testing.labels = date;
        line_graph_testing.datasets[0].data = daily_tested;
        bar_graph_testing.labels = date;
        bar_graph_testing.datasets[0].data = daily_tested;
        return (
            <Container className="content">
                {this.props.activeTab.name === TabName[0] ? (
                    <Container fluid>
                        <section className="panel panel-danger">
                            <h2 className="panel-heading">Project Overview</h2>
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
                            <Line id="line_graph" data={line_graph}/>
                            {/* <Polar data={polarchartall} /> */}
                            <Doughnut data={doughnutchartall}/>
                        </Container>
                    </Container>
                ) : null}
                {this.props.activeTab.name === TabName[1] ? (
                    <Container fluid>
                        <section className="panel panel-danger">
                            <h2 className="panel-heading">Comparing State Orders with Number of Cases</h2>
                            <p className="panel-body">
                                These visualizations highlight the effects of Stay-At-Home
                                orders in regards to the number of COVID-19 cases.
                            </p>
                        </section>
                        <Container fluid>
                            <Line data={line_graph_cases}/>
                            <div className="graphspacing"/>
                            <Bar data={bar_graph_cases}/>
                            <div className="graphspacing"/>
                        </Container>
                    </Container>
                ) : null}
                {this.props.activeTab.name === TabName[2] ? (
                    <Container fluid>
                        <section className="panel panel-danger">
                            <h2 className="panel-heading">Comparing State Orders with Testing Conducted</h2>
                            <p className="panel-body">
                                These visualizations highlight the effects of Stay-At-Home
                                orders in regards to the amount of testing conducted.
                            </p>
                        </section>
                        <Container fluid>
                            <div className="spacing"/>
                            <TimeSeriesChart type="TESTING"/>
                            <div className="graphspacing"/>
                            <Line data={line_graph_testing}/>
                            <div className="graphspacing"/>
                            <Bar data={bar_graph_testing}/>
                            <div className="graphspacing"/>
                            />
                        </Container>
                    </Container>
                ) : null}
                {this.props.activeTab.name === TabName[3] ? (
                    <Container fluid>
                        <section className="panel panel-danger">
                            <h2 className="panel-heading">Comparing State Orders with Unemployment Claims</h2>
                            <p className="panel-body">
                                These visualizations highlight the effects of Stay-At-Home
                                orders in regards to the number of unemployment claims filed.
                            </p>
                        </section>
                        <Container fluid>
                            {/* <Polar data={polarchartall} /> */}
                            <Line data={linegraphunemployment}/>
                            <div className="graphspacing"/>
                            <Bar data={bargraphunemployment}/>
                            <div className="graphspacing"/>
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
        this.setState({activeTab: MyTab});
    };

    render() {
        return (
            <Container fluid>
                <MyTabs activeTab={this.state.activeTab} changeTab={this.handleClick}/>
                <TabContent activeTab={this.state.activeTab}/>
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
                    <Card.Title className="mainheader-text" as="h1">STATE ORDERS & COVID-19</Card.Title>
                    <Card.Text className="subheader-text" as="h3">
                        A collection of live data visualizations studying the impact of state goverment orders on
                        COVID-19.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Container fluid>
                <Navv/>
            </Container>
        </Container>
    );
}

const App = () => <NavDropdownExample/>;

export default App;
