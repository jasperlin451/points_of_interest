var React = require('react/addons')

var HelloMessage = React.createClass({
    handleClick: function () {
    alert('You clicked!')
    },

    render: function() {
        return <div onClick={this.handleClick}>Hello {this.props.name}</div>
    }
  });
exports.HelloMessage = HelloMessage;
