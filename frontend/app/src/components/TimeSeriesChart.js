import React from 'react';
import { EventChart, Charts, ChartContainer, ChartRow, YAxis, LineChart, Legend, styler } from "react-timeseries-charts";
import { TimeSeries, Index, TimeRange, TimeRangeEvent } from "pondjs";

class TimeSeriesChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: [],
            tested: []
        };
    };

    componentDidMount() {
        fetch('http://127.0.0.1:5000/case', {mode: "cors"})
            .then(res => res.json())
            .then(
                (result) => {
                    var cases = [], tested = [];
                    for (var i = 0; i < result.length; i++) {
                        var daily_case = [], daily_tested = [];
                        //daily_case.push(Index.getIndexString("1d", new Date(result[i].date)), result[i].case);
                        daily_case.push(result[i].date, result[i].case);
                        cases.push(daily_case);
                        daily_tested.push(result[i].date, result[i].test);
                        tested.push(daily_tested);
                    }
                    this.setState({
                        cases: cases,
                        tested: tested
                    });
                },
            )
    }

    render() {
        const { cases, tested } = this.state;
        const data1 = [
            ["2020-04-01", 264127],
            ["2020-05-01", 1004365],
            ["2020-06-01", 1302154],
        ];
        const data = this.props.type === "CASES" ? cases: this.props.type === "TESTING"? tested : data1;
        var timeseries = new TimeSeries({
            name: "case-data",
            columns: ["index", "num_cases"],
            points: data.map(([d, value]) => [
              Index.getIndexString("1d", new Date(d)),
              value
            ])
        });

        const ordersData = [
            {
                startTime: "2020-03-21",
                endTime: "2020-04-07",
                title: "Phase 1",
                key: "HOME"
            },
            {
                startTime: "2020-04-07",
                endTime: "2020-05-29",
                title: "Phase 2",
                key: "ESSENTIAL"
            },
            {
                startTime: "2020-05-29",
                endTime: "2020-06-03",
                title: "Phase 3A",
                key: "ILDINING"
            },
            {
                startTime: "2020-06-03",
                endTime: "2020-06-15",
                title: "Phase 3B",
                key: "CHIDINING"
            },
        ];

        function ordersStyleCallback(event, state) {
            let color;
            const key = event.get("key");

            if (key === "HOME") {
                color = "#C8D5B8"
            } else if (key === "ESSENTIAL") {
                color = "#9BB8D7"
            } else if (key === "ILDINING") {
                color = "#c0a7d1"
            } else if (key === "CHIDINING") {
                color = "#ffd1e1"
            }

            switch (state) {
                case "normal":
                    return {
                        fill: color,
                        opacity: 0.4,
                        height: 300,
                    };
                case "hover":
                    return {
                        fill: color,
                        opacity: 0.7,
                        height: 300,
                    };
                case "selected":
                    return {
                        fill: color
                    };
            }
        }

        const ordersEvents = ordersData.map(
            ({ startTime, endTime, ...data }) =>
                new TimeRangeEvent(new TimeRange(new Date(startTime), new Date(endTime)), data)
        );

        const ordersSeries = new TimeSeries({ name: "orders", events: ordersEvents});

        const legendStyle = styler([
            { key: "HOME", color: "#C8D5B8" }, 
            { key: "ESSENTIAL", color: "#9BB8D7" },
            { key: "ILDINING", color: "#c0a7d1" },
            { key: "CHIDINING", color: "#ffd1e1" },
        ]);
        return (
            <div>
                <Legend
                    type="swatch"
                    style={legendStyle}
                    categories={[
                        { key: "HOME", label: "Phase 1: Initial Stay at Home Order" },
                        { key: "ESSENTIAL", label: "Phase 2: Outdoor Activities Allowed" },
                    ]}
                />
                <Legend
                    type="swatch"
                    style={legendStyle}
                    categories={[
                        { key: "ILDINING", label: "Phase 3A: Non-Chicago Outdoor Dining" },
                        { key: "CHIDINING", label: "Phase 3B: Chicago Outdoor Dining" }
                    ]}
                />
                <div style={{height:"20px"}}/>
                <ChartContainer timeRange={new TimeRange(new Date("2020-03-15"), new Date("2020-06-10"))} width={1050}>
                    <ChartRow height="300">
                        {this.props.type === "CASES" ? 
                            (<YAxis id="axis1" label="Number of Cases (hundreds)" min={0} max={50} width="60" type="linear"/>) :
                            null
                        }
                        {this.props.type === "TESTING" ?
                            (<YAxis id="axis1" label="Number of Tests Conducted (hundreds)" min={0} max={300} width="60"
                                    type="linear"/>) :

                            null
                        }
                        {this.props.type === "UNEMPLOYMENT" ? 
                            (<YAxis id="axis1" label="Number of Unemployed (hundreds)" min={0} max={300} width="60" type="linear"/>) :
                            null
                        }
                        <Charts>
                            <LineChart axis="axis1" columns={["num_cases"]} series={timeseries}/>
                            <EventChart
                                series={ordersSeries}
                                style={(ordersStyleCallback)}
                                label={e => e.get("title")} />
                        </Charts>
                    </ChartRow>
                </ChartContainer>
                </div>
        );
    }
  }

export default TimeSeriesChart;