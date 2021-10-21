import React, { Component } from "react";

//When Something Component Update
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // // To detect if theres an update in current component, so can compare previous and current to determine whether to make Ajax Call to get
    // // new data from Server
    // if(prevProps.counter.value!== this.props.counter.value){}
  }

  //When Something Removed from DOM
  // Will call this before removing the component from the DOM, so can do cleanup if have setup Timer or Listener before this component is removed
  // from the DOM, so prevent from Memory Leaks
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  renderTags() {
    if (this.props.counter.tags.length === 0) return <p>There are no tags!</p>;

    return [
      <p>2nd Render Method</p>,
      <ul>
        {this.props.counter.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>,
    ];
  }

  // styles = { fontSize: 30, fontWeight: "bold" };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 2 });
  // };

  render() {
    console.log("Counter - Rendered");
    // console.log("props", this.props);
    return (
      <div>
        {/* Pass the value from the main with attributes name, so we can access it in here, something like HBS */}
        {this.props.counter.id}
        {/* Print out the whole content within the Counter tag */}
        {this.props.children}
        {/* <div> */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <div> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* </div> */}
        {/* </div> */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          // style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <p>1st Render Method</p>
        <ul>
          {this.props.counter.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div>{this.renderTags()}</div>

        {/* Set conditional render inside it }
        <div>
          {this.props.counter.tags.length === 0 && (
            <p>Please create new Tag!</p>
          )}
        </div> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const x = <div>Zero</div>;
    //When count equal 0 thn print x, else print count
    return value === 0 ? x : value;
  }
}

export default Counter;
