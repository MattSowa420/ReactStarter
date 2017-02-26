class MyClass extends React.Component {
  render() {
    return (
      <p>Hello {this.props.name}, I am now loaded. </p>
    );
  }
}

ReactDOM.render(<MyClass name="Steve" />, document.getElementById('output'));

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 20);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds Elapsed: {this.state.secondsElapsed}
      </div>
    );
  }
}

class TimerCanvas extends Timer {
  constructor(props) {
    super(props);
    this.x = 0;
    this.y = 0;
  }

  tick() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(this.x, this.y, 10, 10);
    this.x+=2;
    ++this.y;
  }

  render() {
    return (
      <canvas ref="canvas" width={400} height={400} style={{ borderWidth: 1, borderStyle: 'solid', borderColor: '#000000' }}>
      </canvas>

    );

  }
}

ReactDOM.render(<TimerCanvas />, document.getElementById('timer'));