import React from 'react';
import ListItem from './ListItem';

const ListView = ({ inbox, emailView }) => {
  return (
    <div>
      <h2>Inbox</h2>
      {inbox.map((email) => (
        <ListItem email={email} emailView={emailView} />
      ))}
    </div>
  );
};

export default ListView;
