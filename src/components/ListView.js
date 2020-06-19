import React, { PureComponent } from 'react';
import ListItem from './ListItem';
import Popup from 'reactjs-popup';
import Compose from './Compose';

const ListView = ({ inbox, onClick }) => {
  return (
    <div>
      <h2>Inbox</h2>
      {inbox.map((email) => (
        <div
          className="list-item"
          key={email.id}
          onClick={() => onClick(email.id - 1)}
        >
          <ListItem email={email} />
        </div>
      ))}
      <Popup trigger={<button>Compose</button>} modal>
        {(close) => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header">Compose email</div>
            <div className="content">
              <Compose />
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ListView;
