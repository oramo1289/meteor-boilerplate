import React from 'react';


import PrivateHeader from './PrivateHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title='Dashboard'/>
      <div className="page-content">
        Dashboard page content
      </div>
    </div>
  );
};


// export default class Links extends React.Component {
//   render() {
//     return (
      // <div>
      //   <PrivateHeader title='Your Links from Link'/>
      //   <LinksList/>
      //   <AddLink/>
      // </div>
//     );
//   }
// }
