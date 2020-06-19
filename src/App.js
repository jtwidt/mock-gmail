import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Nav from './components/Nav';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import axios from 'axios';

const App = (props) => {
  const [inbox, setInbox] = useState([
    {
      sender: 'katie@galvanize.com',
      recipient: 'jane@galvanize.com',
      subject: 'Standup meeting',
      message:
        'Mr. and Mrs. Dursley, of number four, Privet Drive, wereproud to say that they were perfectly normal, thankyou very much.',
      date: '2020-08-23T18:25:43.511Z',
      id: 1,
    },
  ]);
  const [emailID, setEmailID] = useState(0);
  const [email, setEmail] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/emails').then((response) => {
      setInbox(response.data.map((email) => email));
    });
  }, [inbox]);

  useEffect(() => {
    setEmail(inbox[emailID]);
  }, [emailID]);

  return (
    <Fragment>
      <div className="navbar">
        <Nav />
      </div>
      <div className="email-container">
        <div className="list-view">
          <ListView inbox={inbox} onClick={(value) => setEmailID(value)} />
        </div>
        <div className="detail-view">
          <DetailView email={email} />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
