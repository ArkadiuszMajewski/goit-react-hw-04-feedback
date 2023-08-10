import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './feedback.css';

export const FeedbackWidget = () => {
  // const [members,setMembers] = useState([{id:1,name:'Basia',job:"Programmer"},{id:2,name:'Tomek',job:"UX Designer"}]);

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [visible, setVisible] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState('');

  const handlerButton = evt => {
    const id = evt.target.id;
    setVisible(true);
    setTotalCount(prevState => prevState + 1);
    if (id === '1') {
      setGood(prevState => prevState + 1);
    } else if (id === '2') {
      setNeutral(prevState => prevState + 1);
    } else if (id === '3') {
      setBad(prevState => prevState + 1);
    }
  };

  useEffect(() => {
    const Opinion = good + bad;
    let ssss =
      Opinion > 0 ? `${((100 * good) / Opinion).toFixed(2)}%` : `0.00%`;

    setPositiveFeedbackPercentage(ssss);
  }, [good, neutral, bad]);

  return (
    <div className="FeedbackWidget">
      <h1 className="FeedbackWidget-h1">Please leave feedback</h1>
      <div>
        <button type="button" id="1" onClick={handlerButton}>
          Good
        </button>
        <button type="button" id="2" onClick={handlerButton}>
          Neutral
        </button>
        <button type="button" id="3" onClick={handlerButton}>
          Bad
        </button>
      </div>
      <h2>Ststistics</h2>
      <div className="FeedbackWidget-Ststistics">
        <span className={visible ? '' : 'visible'}>Good= {good} </span>
        <span className={visible ? '' : 'visible'}>Neutral= {neutral} </span>
        <span className={visible ? '' : 'visible'}>Bad= {bad} </span>
        <span className={visible ? '' : 'visible'}>Total= {totalCount}</span>
        <span className={visible ? '' : 'visible'}>
          Positive Feedback= {positiveFeedbackPercentage}
        </span>
        <span className={visible ? 'visible' : ''}>No feedback given</span>
      </div>
    </div>
  );
};
FeedbackWidget.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  visible: PropTypes.bool,
  totalCount: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.string,
};
