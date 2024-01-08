# IPL Dashboard App

### Get the stats of the IPL Teams

### Refer to the image below:

<details>

<summary>Click to view</summary>

![Link](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif)

</details>

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

**teamMatchesApiUrl**

#### API: `https://apis.ccbp.in/ipl/:id`
</details>

<details>
<summary>Components Structure</summary>

[Home Components Structure](https://assets.ccbp.in/frontend/content/react-js/home-component-structure-img.png)

[team matches component structure](https://assets.ccbp.in/frontend/content/react-js/team-matches-component-structure-img.png)

</details>

<details>
<summary>Implementation Files</summary>

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
