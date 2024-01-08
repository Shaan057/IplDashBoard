# IPL Dashboard App

#### Get the stats of the IPL Teams

### Refer to the image below:

![Link](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif)

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-lg-output-v2.png)

</details>

### Features

<details>
<summary>Functionality</summary>

- When the app is opened, Home Route is displayed
- When the Home Route is opened,
  - Make HTTP GET request to the **teamsApiUrl**
  - **_loader_** is displayed while fetching the data
  - After fetching the data, the list of teams is displayed
- When a team card in Home Route is clicked,
  - Page is navigated to the Team Matches Route with the URL `/team-matches/:id`
- When the Team Matches Route is opened,
  - Make HTTP GET request to the **teamMatchesApiUrl** with the team id to get the recent matches data of the team
    - Example: `https://apis.ccbp.in/ipl/KKR`
  - **_loader_** is displayed while fetching the data
  - After fetching the data, the team banner, latest match, and list of recent matches is displayed

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**teamsApiUrl**

#### API: `https://apis.ccbp.in/ipl`

#### Method: `GET`

#### Description:

Returns a response containing the list of all IPL teams

#### Response

```json
{
  "teams": [
    {
      "name": "Royal Challengers Bangalore",
      "id": "RCB",
      "team_image_url": "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
      // use value of the key 'name' for alt as `${name}`
    },
    ...
  ],
}
```

**teamMatchesApiUrl**

#### API: `https://apis.ccbp.in/ipl/:id`

#### Example: `https://apis.ccbp.in/ipl/KKR`

#### Method: `GET`

#### Description:

Returns a response containing details of all recent matches of a team

#### Response

```json
{
  "team_banner_url": "https://assets.ccbp.in/frontend/react-js/kkr-team-img.png",
  "latest_match_details": {
    "umpires": "CB Gaffaney, VK Sharma",
    "result": "Kolkata Knight Riders Won by 7 wickets",
    "man_of_the_match": "Shubman Gill",
    "id": "1216545",
    "date": "2020-09-26",
    "venue": "At Sheikh Zayed Stadium, Abu Dhabi",
    "competing_team": "Sunrisers Hyderabad",
    "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
    // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
    "first_innings": "Sunrisers Hyderabad",
    "second_innings": "Kolkata Knight Riders",
    "match_status": "Won",
  },
  "recent_matches": [
    {
      "umpires": "RK Illingworth, K Srinivasan",
      "result": "Royal Challengers Bangalore Won by 82 runs",
      "man_of_the_match": "AB de Villiers",
      "id": "1216540",
      "date": "2020-10-12",
      "venue": "At Sharjah Cricket Stadium, Sharjah",
      "competing_team": "Royal Challengers Bangalore",
      "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
      // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
      "first_innings": "Royal Challengers Bangalore",
      "second_innings": "Kolkata Knight Riders",
      "match_status": "Lost",
    },
    ...
  ],
}
```

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/home-component-structure-img.png" alt="home component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/team-matches-component-structure-img.png" alt="team matches component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Home/index.js`
- `src/components/Home/index.css`
- `src/components/TeamCard/index.js`
- `src/components/TeamCard/index.css`
- `src/components/TeamMatches/index.js`
- `src/components/TeamMatches/index.css`
- `src/components/LatestMatch/index.js`
- `src/components/LatestMatch/index.css`
- `src/components/MatchCard/index.js`
- `src/components/MatchCard/index.css`
</details>

### Preview

### [Link](https://ipl-dash-board-shaan.vercel.app/)
