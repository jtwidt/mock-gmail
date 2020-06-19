import React from 'react';

const ListItem = ({ email, setDetailView }) => {
  let emailView = `inbox[${email.id}]`;
  return (
    <div
      className="list-item"
      key={email.id}
      onClick={() => setDetailView(emailView)}
    >
      Sender: {email.sender}
      <br />
      Subject: {email.subject}
    </div>
  );
};

export default ListItem;
