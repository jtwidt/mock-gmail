import React, { Fragment } from 'react';

const Compose = () => {
  return (
    <Fragment>
      <form>
        Recepient: <input type="text" placeholder="To..." />
        Subject: <input type="text" placeholder="Subject..." />
        <input type="text" placeholder="Message..." />
      </form>
    </Fragment>
  );
};

export default Compose;
