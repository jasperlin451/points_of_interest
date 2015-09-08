var LocationList= React.createClass({
    render: function () {
        console.log(this.props)
        return(
        <div className="locationList">
            <h1> Create Your Route </h1>
            <div id='start' style={{display: "inline"}}> Start Location: <Location location='start'/> </div>
            <div id='end' style={{display: "inline"}}> End Location: <Location location='end'/> </div>
        </div>
        );
    }
})

var Location = React.createClass({
    getInitialState: function () {
        return {value: 'Enter ' + this.props.location+ ' Location!'};
    },
    handleChange: function(event){
        this.setState({value: event.target.value});
    },
    render: function () {
        var value = this.state.value;
        return ( 
            <div className="location">
            <input type="text" value={value} onChange={this.handleChange}/>
            </div>
            );
    }
});

React.render(
    <LocationList />,
    document.getElementById('content')
);
