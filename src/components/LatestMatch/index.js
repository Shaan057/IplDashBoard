import './index.css'

const LatestMatch = props => {
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
  )
}

export default LatestMatch
