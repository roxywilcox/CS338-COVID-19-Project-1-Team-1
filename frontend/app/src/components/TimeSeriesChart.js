import React from 'react';
import { EventChart, Charts, ChartContainer, ChartRow, YAxis, LineChart, Legend, styler } from "react-timeseries-charts";
import { TimeSeries, Index, TimeRange, TimeRangeEvent } from "pondjs";

class TimeSeriesChart extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const data = [
            ["2020-03-17", 1],
            ["2020-03-18", 1],
            ["2020-03-19", 1],
            ["2020-03-20", 1],
            ["2020-03-21", 2],
            ["2020-03-22", 3],
            ["2020-03-23", 5],
            ["2020-03-25", 8],
            ["2020-03-26", 11],
            ["2020-03-27", 20],
            ["2020-03-28", 27],
            ["2020-03-29", 37],
            ["2020-03-30", 50],
            ["2020-03-31", 55],
            ["2020-04-01", 60],
            ["2020-04-02", 80],
            ["2020-04-03", 85],
            ["2020-04-04", 90],
            ["2020-04-05", 91],
            ["2020-04-06", 92],
            ["2020-04-07", 93],
            ["2020-04-08", 94],
            ["2020-04-09", 100],
            ["2020-04-11", 100],
            ["2020-04-12", 100],
            ["2020-04-13", 100],
            ["2020-04-14", 100],
            ["2020-04-15", 100],
            ["2020-04-16", 100],
            ["2020-04-17", 100],
            ["2020-04-18", 100],
            ["2020-04-19", 100],
            ["2020-04-20", 100],
            ["2020-04-21", 100],
            ["2020-04-22", 100],
            ["2020-04-23", 100],
            ["2020-04-24", 100],
            ["2020-04-25", 100],
        ];

        const timeseries = new TimeSeries({
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
                title: "Phase 1: Initial Stay at Home Order. Essential businesses open only.",
                key: "HOME"
            },
            {
                startTime: "2020-04-07",
                endTime: "2020-04-29",
                title: "Phase 2: Outdoor Activities Allowed. Non-essential businesses open for curbside pickup/delivery.",
                key: "ESSENTIAL"
            },
        ];

        function ordersStyleCallback(event, state) {
            const color = event.get("key") === "HOME" ? "#C8D5B8" : "#9BB8D7";
            switch (state) {
                case "normal":
                    return {
                        fill: color,
                        opacity: 0.4,
                        height: 200,
                    };
                case "hover":
                    return {
                        fill: color,
                        opacity: 0.7,
                        height: 200,
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
            { key: "ESSENTIAL", color: "#9BB8D7" }
        ]);

        return (
            <div>
                <Legend
                    type="swatch"
                    style={legendStyle}
                    categories={[
                        { key: "HOME", label: "Phase 1: Initial Stay at Home Order" },
                        { key: "ESSENTIAL", label: "Phase 2: Outdoor Activities Allowed" }
                    ]}
                />
                <div style={{height:"20px"}}/>
                <ChartContainer timeRange={timeseries.range()} width={1050}>
                    <ChartRow height="200">
                        {this.props.type === "CASES" ? 
                            (<YAxis id="axis1" label="Number of Cases (in thousands)" min={0} max={100} width="60" type="linear"/>) :
                            null
                        }
                        {this.props.type === "TESTING" ? 
                            (<YAxis id="axis1" label="Number of Tests Conducted (hundreds)" min={0} max={100} width="60" type="linear"/>) :
                            null
                        }
                        {this.props.type === "UNEMPLOYMENT" ? 
                            (<YAxis id="axis1" label="Number of Unemployed (in thousands)" min={0} max={100} width="60" type="linear"/>) :
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