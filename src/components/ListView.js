import React from 'react';
import ListItem from './ListItem';

const ListView = ({ inbox, setDetailView }) => {
  return (
    <div>
      <h2>Inbox</h2>
      {inbox.map((email) => (
        <ListItem email={email} onClick={setDetailView} />
      ))}
    </div>
  );
};

export default ListView;
