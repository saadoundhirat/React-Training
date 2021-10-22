import React, { Component } from "react";
import ReactDom from "react-dom";
// React portals used to render dom node out side the Dom tree hierarchy that means outside the "root ID"
//  Portals are used to render dom element out side the tree node


// export default class Portals extends Component {
//   render() {
//     return ReactDom.createPortal(
//       <div>
//         <h3>Portal out side the dom node tree root</h3>
//       </div>,
//       document.getElementById("portal-root")
//     );
//   }
// }

const Portals = () => {
  return ReactDom.createPortal(
    <div>
      <h3>Portal out side the dom node tree root</h3>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Portals;