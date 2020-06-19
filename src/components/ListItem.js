import React, { Fragment } from 'react';

const ListItem = ({ email }) => {
  return (
    <Fragment>
      Sender: {email.sender}
      <br />
      Subject: {email.subject}
    </Fragment>
  );
};

export default ListItem;
