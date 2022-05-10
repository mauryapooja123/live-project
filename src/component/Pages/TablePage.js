// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import data from "../User/data";

// const TablePage = (props) => {
//   let sortedProducts = [...products];
//   if (sortedField !== null) {
//     sortedProducts.sort((a, b) => {
//       if (a[sortConfig.key] < b[sortConfig.key]) {
//         return sortConfig.direction === 'ascending' ? -1 : 1;
//       }
//       if (a[sortConfig.key] > b[sortConfig.key]) {
//         return sortConfig.direction === 'ascending' ? 1 : -1;
//       }
//       return 0;
//     });
//   }
//   return sortedProducts;
// }, [products]);
//   return (
//     <div>
//       <table>
//         <tr>
//           <th>
//             <button type="button" onClick={handleSort}>
//               Name
//             </button>
//           </th>
//           <th>email</th>
//           <th>address</th>
//           <th>phone</th>
//         </tr>
//         {simpleData.map((data, key) => (
//           <tr key={key}>
//             <td>{data.name}</td>
//             <td>{data.email}</td>
//             <td>{data.address}</td>
//             <td>{data.phone}</td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// };

// export default TablePage;
