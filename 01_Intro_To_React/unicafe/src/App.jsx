import { useState } from 'react'

function Button({ name, onClick}) {
  return (
    <button onClick={onClick}>{name}</button>
  );
}

function Stats({ good, neutral, bad, all }) {
  const average = (good - bad / good + neutral + bad).toFixed(2);
  const positive = (good / all * 100).toFixed(2);

  return (
    <>
      <h2>Statistics</h2>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatsLine text='Good' value={good} />
            <StatsLine text='Neutral' value={neutral} />
            <StatsLine text='Bad' value={bad} />
            <StatsLine text='All' value={all} />
            <StatsLine text='Average' value={average} />
            <StatsLine text='Positive' value={positive} />
          </tbody>
        </table>
      )}
    </>
  );
}

function StatsLine({ text, value }) {
  return (
    <tr>
      <th>{text}:</th>
      <td>{value}</td>
    </tr>
  );
}

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allFeedback = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} name='good' />
      <Button onClick={() => setNeutral(neutral + 1)} name='neutral' />
      <Button onClick={() => setBad(bad + 1)} name='bad' />
      <Stats good={good} neutral={neutral} bad={bad} all={allFeedback} />
    </div>
  );
}
