// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import VideoListEntry from './components/VideoListEntry.js';
import VideoList from './components/VideoList.js';
import VideoPlayer from './components/VideoPlayer.js';
import Search from './components/Search.js';

import exampleVideoData from './data/exampleVideoData.js';

// class TodoListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//     this.state = {
//       done: false,
//       bolded: false
//     };
//   }

//   onListItemClick() {
//       this.setState({
//         done: !this.state.done
//       });
//   }
//   onMouseOver() {
//       this.setState({
//           bolded: !this.state.bolded
//       });
//   }

//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {

//       var style = {
//           textDecoration: this.state.done ? 'line-through' : 'none',
//           fontWeight: this.state.bolded ? 'bold' : 'none'
//       };

//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );

//   }

// }
// var toDoListArr = ['Learn React', 'Crush Recast.ly', 'Maybe sleep', 'sleep all sunday', 'eat pizza']

// var TodoList = (props) => (
//   <ul>
//       {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//       )}
//   </ul>
// );

// var VideoList = () => (
// <div>
//   <h2>My Todo List</h2>
//   <TodoList todos={toDoListArr}/> // Here we are creating an instance of the `TodoList` component
// </div>
// );



ReactDOM.render(<App />, document.getElementById('app'));