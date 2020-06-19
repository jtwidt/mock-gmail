import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const MailContext = createContext();

const Context = (props) => {
  const [inbox, setInbox] = useState([]);
  // const [trashBin, setTrashBin] = useState([]);
  // const [views, setViews] = useState({ list: 'inbox', detail: '' });

  useEffect(() => {
    axios.get('http://localhost:3001').then((response) => {
      setInbox(response.data.map((email) => email));
    });
  }, []);

  return (
    <MailContext.Provider value={inbox}>{props.children}</MailContext.Provider>
  );
};

export default Context;
