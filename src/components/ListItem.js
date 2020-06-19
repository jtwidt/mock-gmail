import React from 'react';

const ListItem = ({ email, emailView }) => {
  let index = email.id - 1;
  return (
    <div
      className="list-item"
      key={email.id}
      onClick={() => (emailView = `inbox[${index}]`)}
    >
      Sender: {email.sender}
      <br />
      Subject: {email.subject}
    </div>
  );
};

export default ListItem;
