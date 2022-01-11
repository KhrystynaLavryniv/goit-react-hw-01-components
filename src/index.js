// import React from 'react';
import ReactDOM from "react-dom";
import { App } from "./App";
// import user from './data/user.json'
// import './index.css';

// function Profile(props) {
//   return <div >
//   <div >
//     <img
//       src={user.avatar}
//       alt={user.username}
//       // class="avatar"
//     />
//     <p >{user.username}</p>
//     <p >{user.tag}</p>
//     <p >{user.location}</p>
//   </div>

//     <ul >
//     <li>
//       <span className="label">Followers </span>
//       <span className="quantity">{user.stats.followers}
// </span>
//     </li>
//     <li>
//       <span className="label">Views </span>
//       <span className="quantity">{user.stats.views}</span>
//     </li>
//     <li>
//       <span className="label">Likes </span>
//         <span className="quantity">{user.stats.likes}</span>
//     </li>
//   </ul>
// </div>
// }
// const element = React.createElement('div', {a:5, b:10, children:'hello world',})
// console.log(element)
// ReactDOM.render(element, document.querySelector('#root'))
ReactDOM.render(<App />, document.querySelector("#root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
