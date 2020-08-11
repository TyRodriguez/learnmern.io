// import React from 'react';
import Search from '../components/Search';
import NavBar from '../components/NavBar'
import React, { Component } from 'react';

class Jobs extends Component {
    render(){
        return (
            <div>
              <NavBar />
              <Search />
            </div>
          );
    }
}
// const Jobs = () => {
//   return (
//     <div>
//       <NavBar />
//       <Search />
//     </div>
//   );
// };
export default Jobs;