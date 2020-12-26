import React from 'react';

const Child = React.memo(
    props => {
      console.log("child props"); //sy-log
      return <div>Child</div>;
    },
    (prevProps, nextProps) => prevProps.count.count === nextProps.count.count
);

export default Child;
  