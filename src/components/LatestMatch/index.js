/* eslint-disable no-plusplus */
import {v4 as uuidv4} from 'uuid'

import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const LatestMatch = props => {
  const pieChart = () => {
    const {recentMatches} = props
    let matchesWon = 0
    let matchesLost = 0
    let matchesDrawn = 0
    for (let a = 0; a < recentMatches.length; a++) {
      const obj = recentMatches[a]
      if (obj.matchStatus === 'Won') {
        matchesWon++
      } else if (obj.matchStatus === 'Lost') {
        matchesLost++
      } else {
        matchesDrawn++
      }
    }
    const data = [
      {
        name: 'Won',
        value: matchesWon,
        color: '#92df9d', // Green for 'Won'
      },
      {
        name: 'Lost',
        value: matchesLost,
        color: '#df9792', // Red for 'Lost'
      },
      {
        name: 'Draw',
        value: matchesDrawn,
        color: '#f0fa8b', // Yellow for 'Draw'
      },
    ]

    return (
      <PieChart width={280} height={250} className="piechart">
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map(entry => (
            <Cell key={uuidv4()} fill={entry.color} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={35} />
      </PieChart>
    )
  }
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div className="main">
      <div className="latest-match-container">
        <div className="container-1">
          <div className="date-venue-container">
            <p className="heading-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="desc">{venue}</p>
            <p className="desc">{result}</p>
          </div>
          <div className="logo-container">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="team-logo"
            />
          </div>
        </div>
        <hr className="horizontal-rule" />
        <div className="match-details">
          <p className="lm-heading">First Innings</p>
          <p className="desc">{firstInnings}</p>
          <p className="lm-heading">Second Innings</p>
          <p className="desc">{secondInnings}</p>
          <p className="lm-heading"> Man of the Match</p>
          <p className="desc">{manOfTheMatch}</p>
          <p className="lm-heading">Umpires</p>
          <p className="desc">{umpires}</p>
        </div>
      </div>
      {pieChart()}
    </div>
  )
}

export default LatestMatch
