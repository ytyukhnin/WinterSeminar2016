const Example = React.createClass({
  getInitialState() {
    return { show: false };
  },

  toggle() {
    this.setState({ show: !this.state.show });
  },

  render() {
    const style = {
      position: 'absolute',
      backgroundColor: '#EEE',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      border: '1px solid #CCC',
      borderRadius: 3,
      marginLeft: -5,
      marginTop: 5,
      padding: 10
    };

    return (
      <div style={{ height: 100, position: 'relative' }}>
        <Button ref="target" onClick={this.toggle}>
          I am rendered sever-side using React.NET
        </Button>

        <Overlay
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          placement="right"
          container={this}
          target={() => ReactDOM.findDOMNode(this.refs.target)}
        >
          <div style={style}>
            <strong>Holy guacamole!</strong> It works!
          </div>
        </Overlay>
      </div>
    );
  }
});

ReactDOM.render(<Example/>, document.getElementById('guacamole'));