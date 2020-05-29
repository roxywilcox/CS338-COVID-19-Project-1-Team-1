(this["webpackJsonpreact-practice-app"]=this["webpackJsonpreact-practice-app"]||[]).push([[0],{174:function(e,a,t){e.exports=t(319)},317:function(e,a,t){},319:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(55),l=t.n(s),i=t(49),o=t(50),c=t(52),d=t(51),m=t(32),u=t(322),h=t(323),p=t(172),b=t(171),f=t(21),E=t(13),v=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(e){return Object(i.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){var e=new E.TimeSeries({name:"case-data",columns:["index","num_cases"],points:[["2020-03-20",1],["2020-03-21",2],["2020-03-22",3],["2020-03-23",5],["2020-03-25",8],["2020-03-26",11],["2020-03-27",20],["2020-03-28",27],["2020-03-29",37],["2020-03-30",50],["2020-03-31",55],["2020-04-01",60],["2020-04-02",80],["2020-04-03",100],["2020-04-04",100],["2020-04-05",100]].map((function(e){var a=Object(b.a)(e,2),t=a[0],n=a[1];return[E.Index.getIndexString("1d",new Date(t)),n]}))});var a=[{startTime:"2020-03-25",endTime:"2020-03-28",title:"Stay At Home Order",key:"HOME"},{startTime:"2020-04-01",endTime:"2020-04-05",title:"Essential Businesses Open",key:"ESSENTIAL"}].map((function(e){var a=e.startTime,t=e.endTime,n=Object(p.a)(e,["startTime","endTime"]);return new E.TimeRangeEvent(new E.TimeRange(new Date(a),new Date(t)),n)})),t=new E.TimeSeries({name:"orders",events:a}),n=Object(f.styler)([{key:"HOME",color:"#C8D5B8"},{key:"ESSENTIAL",color:"#9BB8D7"}]);return r.a.createElement("div",null,r.a.createElement(f.Legend,{type:"swatch",style:n,categories:[{key:"HOME",label:"Stay At Home Order"},{key:"ESSENTIAL",label:"Essential Businesses Open"}]}),r.a.createElement("div",{style:{height:"20px"}}),r.a.createElement(f.ChartContainer,{timeRange:e.range(),width:1050},r.a.createElement(f.ChartRow,{height:"200"},"CASES"===this.props.type?r.a.createElement(f.YAxis,{id:"axis1",label:"Number of Cases (in thousands)",min:0,max:100,width:"60",type:"linear"}):null,"TESTING"===this.props.type?r.a.createElement(f.YAxis,{id:"axis1",label:"Number of Tests Conducted (in thousands)",min:0,max:100,width:"60",type:"linear"}):null,"UNEMPLOYMENT"===this.props.type?r.a.createElement(f.YAxis,{id:"axis1",label:"Number of Unemployed (in thousands)",min:0,max:100,width:"60",type:"linear"}):null,r.a.createElement(f.Charts,null,r.a.createElement(f.LineChart,{axis:"axis1",columns:["num_cases"],series:e}),r.a.createElement(f.EventChart,{series:t,style:function(e,a){var t="HOME"===e.get("key")?"#C8D5B8":"#9BB8D7";switch(a){case"normal":return{fill:t,opacity:.4,height:200};case"hover":return{fill:t,opacity:.7,height:200};case"selected":return{fill:t}}},label:function(e){return e.get("title")}})))))}}]),t}(r.a.Component),C=(t(317),{labels:[],datasets:[{label:"Number of Cases",data:[],fill:!1,borderColor:"#DC143C"},{label:"Number of Tests Conducted",data:[],fill:!1,borderColor:"#006400"},{label:"Number of Unemployment Claims",data:[],fill:!1,borderColor:"#00008B"}]}),g={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Number of Daily confirmed",data:[2,1,2,1,1,1],fill:!1,borderColor:"#DC143C"}]},y={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Number of Tests Conducted",data:[4,5,7,10,9,10],fill:!1,borderColor:"#006400"}]},N={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Number of Unemployment Claims Filed",data:[10,20,12,15,10,15],fill:!1,borderColor:"#00008B"}]},T={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Number of Daily confirmed",data:[1,3,6,10,20,36],backgroundColor:"#DC143C",borderColor:"DC143C",borderWidth:1,hoverBackgroundColor:"#CD5C5C",hoverBorderColor:"#CD5C5C",display:!0,labelString:"Number of Cases",lineHeight:1.2,fontColor:"#666",fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",fontSize:12,fontStyle:"normal",padding:4}]},O={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Number of Tests Conducted",data:[1,3,6,10,20,36],backgroundColor:"#006400",borderColor:"#006400",borderWidth:1,hoverBackgroundColor:"#8FBC8F",hoverBorderColor:"#8FBC8F",display:!0,labelString:"Number of Cases",lineHeight:1.2,fontColor:"#666",fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",fontSize:12,fontStyle:"normal",padding:4}]},S={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"Number of Unemployment Claims Filed",data:[1,3,6,10,20,36],backgroundColor:"#00008B",borderColor:"#00008B",borderWidth:1,hoverBackgroundColor:"#6495ED",hoverBorderColor:"#6495ED",display:!0,labelString:"Number of Cases",lineHeight:1.2,fontColor:"#666",fontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",fontSize:12,fontStyle:"normal",padding:4}]},A={datasets:[{data:[10,20,30],backgroundColor:["#DC143C","#006400","#00008B","#E7E9ED","#36A2EB"],label:"Effects of Govt Orders in June 2020, IL"}],labels:["Number of Cases","Tests Conducted","Unemployment Claims"]},k=["Project Overview","Impact on Cases","Impact on Testing","Impact on Unemployment"],w=[{name:k[0],isActive:!0},{name:k[1],isActive:!1},{name:k[2],isActive:!1},{name:k[3],isActive:!1}],D=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"nav nav-tabs"},w.map(function(e){return r.a.createElement(j,{data:e,isActive:this.props.activeTab===e,handleClick:this.props.changeTab.bind(this,e)})}.bind(this)))}}]),t}(r.a.Component),j=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{onClick:this.props.handleClick,className:this.props.isActive?"active":null},r.a.createElement("a",{href:"#"},this.props.data.name))}}]),t}(r.a.Component),B=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={error:null,isLoaded:!1,cases:[],tested:[],date:[],daily_confirmed:[],daily_tested:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://127.0.0.1:5000/case19",{mode:"cors"}).then((function(e){return e.json()})).then((function(a){for(var t=[],n=[],r=[],s=[],l=[],i=0;i<a.length;i++)t.push(a[i].case),n.push(a[i].date.substr(4,2)+"-"+a[i].date.substr(6,2)),r.push(a[i].positiveIncrease),s.push(a[i].totalTestResults),l.push(a[i].totalTestResultsIncrease);e.setState({isLoaded:!0,cases:t,date:n,tested:s,daily_confirmed:r,daily_tested:l})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e=this.state,a=(e.error,e.isLoaded,e.cases),t=e.date,n=e.daily_confirmed,s=e.tested,l=e.daily_tested;return C.datasets[0].data=a,C.datasets[1].data=s,C.labels=t,g.datasets[0].data=n,g.labels=t,T.datasets[0].data=n,T.labels=t,y.labels=t,y.datasets[0].data=l,O.labels=t,O.datasets[0].data=l,r.a.createElement(u.a,{className:"content"},this.props.activeTab.name===k[0]?r.a.createElement(u.a,{fluid:!0},r.a.createElement("section",{className:"panel panel-danger"},r.a.createElement("h2",{className:"panel-heading"},"Project Overview"),r.a.createElement("p",{className:"panel-body"},"State government Stay-At-Home orders have been one of the strongest agents against the spread of COVID-19, but also one of the most controversial. In order to examine their impact, we must look at how the modifications in orders have affected each state. The largest concerns surrounding COVID-19 are associated with the increase in cases, a lack in testing, and the crumbling economy. These visualizations, starting with Illinois, plot the extent of Stay-At-Home orders against these three factors. The data can provide an understanding of which orders and modifications affect what and by how much. The conclusions can be used to shape orders and action for COVID-19 and future pandemics.")),r.a.createElement(u.a,{fluid:!0},r.a.createElement(m.c,{id:"line_graph",data:C}),r.a.createElement("div",{className:"timelinepart1"}),r.a.createElement(m.b,{data:A}))):null,this.props.activeTab.name===k[1]?r.a.createElement(u.a,{fluid:!0},r.a.createElement("section",{className:"panel panel-danger"},r.a.createElement("h2",{className:"panel-heading"},"Comparing State Orders with Number of Cases"),r.a.createElement("p",{className:"panel-body"},"These visualizations highlight the effects of Stay-At-Home orders in regards to the number of COVID-19 cases.")),r.a.createElement(u.a,{fluid:!0},r.a.createElement(m.c,{data:g}),r.a.createElement("div",{className:"graphspacing"}),r.a.createElement(m.a,{data:T}),r.a.createElement("div",{className:"graphspacing"}))):null,this.props.activeTab.name===k[2]?r.a.createElement(u.a,{fluid:!0},r.a.createElement("section",{className:"panel panel-danger"},r.a.createElement("h2",{className:"panel-heading"},"Comparing State Orders with Testing Conducted"),r.a.createElement("p",{className:"panel-body"},"These visualizations highlight the effects of Stay-At-Home orders in regards to the amount of testing conducted.")),r.a.createElement(u.a,{fluid:!0},r.a.createElement("div",{className:"spacing"}),r.a.createElement(v,{type:"CASES"}),r.a.createElement("div",{className:"graphspacing"}),r.a.createElement(m.c,{data:y}),r.a.createElement("div",{className:"graphspacing"}),r.a.createElement(m.a,{data:O}),r.a.createElement("div",{className:"graphspacing"}),"/>")):null,this.props.activeTab.name===k[3]?r.a.createElement(u.a,{fluid:!0},r.a.createElement("section",{className:"panel panel-danger"},r.a.createElement("h2",{className:"panel-heading"},"Comparing State Orders with Unemployment Claims"),r.a.createElement("p",{className:"panel-body"},"These visualizations highlight the effects of Stay-At-Home orders in regards to the number of unemployment claims filed.")),r.a.createElement(u.a,{fluid:!0},r.a.createElement(m.c,{data:N}),r.a.createElement("div",{className:"graphspacing"}),r.a.createElement(m.a,{data:S}),r.a.createElement("div",{className:"graphspacing"}))):null)}}]),t}(r.a.Component),x=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this)).handleClick=function(e){n.setState({activeTab:e})},n.state={activeTab:w[0]},n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{fluid:!0},r.a.createElement(D,{activeTab:this.state.activeTab,changeTab:this.handleClick}),r.a.createElement(B,{activeTab:this.state.activeTab}))}}]),t}(r.a.Component);function I(){return r.a.createElement(u.a,{fluid:!0,className:"header-image-style"},r.a.createElement(h.a,{className:"text-center transparent-0 header-text"},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,{className:"mainheader-text",as:"h1"},"STATE ORDERS & COVID-19"),r.a.createElement(h.a.Text,{className:"subheader-text",as:"h3"},"A collection of live data visualizations studying the impact of state goverment orders on COVID-19."))),r.a.createElement(u.a,{fluid:!0},r.a.createElement(x,null)))}var H=function(){return r.a.createElement(I,null)};t(318);l.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.ba208976.chunk.js.map