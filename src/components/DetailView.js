import React from 'react';

const DetailView = ({ email }) => {
  return (
    <div className="email-detail">
      <h3>Subject: {email.subject}</h3>
      <h4>From: {email.sender}</h4>
      <p className="email-body">{email.message}</p>
    </div>
  );
};

export default DetailView;
