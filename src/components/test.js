// import React from "react";
// // import reactDom from "react-dom";
// import Styles from "./contact.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// class Contact extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     }
//     this.Increment = this.Increment.bind(this)
//     this.Decreament = this.Decreament.bind(this)
//   }

//   Increment() {
//     this.setState(() => {
//       return {
//         count: this.state.count + 1,
//       }
//     })
//   }

//   Decreament() {
//     this.setState((prevDelete)=> {
//         if (prevDelete.count > 0)
//         return {
//             count: prevDelete.count -1
//         }
//     })
// }

//   render() {
//     return (
//       <>
//         <div className={Styles.card}>
//           <h1 className={Styles.header}>{this.state.count}</h1>
//           <button onClick={this.Increment} className="btn btn-success">
//             {" "}
//             Change
//           </button>
//           <button onClick={this.Decreament} className="btn btn-danger ms-2">
//             {" "}
//             Dec.
//           </button>
//         </div>
//       </>
//     );
//   }
// }

// export default Contact;
