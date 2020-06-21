import React, { useState, useEffect, outbox, setOutbox } from 'react';
import ListItem from './ListItem';
import Popup from 'reactjs-popup';
import axios from 'axios';

const ListView = ({ inbox, onClick, outbox, setOutbox }) => {
  const [subject, setSubject] = useState('Compose email');
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');

  const postEmail = () => {
    let body = {
      sender: sender,
      recipient: recipient,
      subject: subject,
      message: message,
    };
    axios
      .post('http://localhost:3001/send', body)
      .then((response) => alert(response.data.message))
      .catch(() => alert('Something went wrong. Please try again'));
    let newOutbox = [...outbox, body];
    setOutbox(newOutbox);
    setMessage('');
    setRecipient('');
    setSender('');
    setSubject('Compose email');
  };

  return (
    <div>
      <h2>Inbox</h2>
      {inbox.map((email, index) => {
        if (email.id !== undefined) {
          return (
            <div
              className="list-item"
              key={index}
              onClick={() => onClick(index)}
            >
              <ListItem email={email} />
            </div>
          );
        } else {
          return null;
        }
      })}
      <Popup trigger={<button>Compose</button>} modal>
        {(close) => (
          <div className="modal">
            <div className="header">{subject}</div>
            <div className="content">
              <form className="compose-email">
                <div className="recepient-subject">
                  <span className="recepient-block">
                    Recipient:
                    <input
                      type="text"
                      placeholder="To..."
                      name="recepient"
                      className="recepient-input"
                      onChange={(event) => setRecipient(event.target.value)}
                    />
                  </span>
                  <span className="sender-block">
                    Sender:
                    <input
                      type="text"
                      placeholder="From..."
                      name="sender"
                      className="sender-input"
                      onChange={(event) => setSender(event.target.value)}
                    />
                  </span>
                  <span className="subject-block">
                    Subject:
                    <input
                      type="text"
                      placeholder="Subject..."
                      name="subject"
                      className="subject-input"
                      onChange={(event) => setSubject(event.target.value)}
                    />
                  </span>
                </div>
                <div>
                  <textarea
                    rows="5"
                    cols="120"
                    name="message-body"
                    placeholder="Message..."
                    onChange={(event) => setMessage(event.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  if (
                    recipient === '' ||
                    sender === '' ||
                    message === '' ||
                    subject === ''
                  ) {
                    alert('All fields must be filled out.');
                    return;
                  }
                  postEmail();
                  close();
                }}
              >
                Send
              </button>
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ListView;
