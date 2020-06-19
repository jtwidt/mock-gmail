import React, { useState, useEffect } from 'react';
import './App.css';
import Context from './components/Context';
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
  const [detailView, setDetailView] = useState(inbox[0]);

  useEffect(() => {
    axios.get('http://localhost:3001/emails').then((response) => {
      setInbox(response.data.map((email) => email));
    });
  }, []);

  return (
    <Context>
      <div className="navbar">
        <Nav />
      </div>
      <div className="email-container">
        <div className="list-view">
          <ListView inbox={inbox} setDetailView={setDetailView} />
        </div>
        <div className="detail-view">
          <DetailView email={detailView} />
        </div>
      </div>
    </Context>
  );
};

export default App;
