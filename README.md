# UsingAPIs-Project-Footballer

<br>
 <a href ="https:#"><b><em> Footballer - Home </em></b></a>
<br>

----------------------------------------------------------------
## Project' Description:

This app shows the results of the most important football' competitions, standings, matches, teams...<br>
This app fetched it data from API <a href="http://api.football-data.org/index" rel="nofollow">Football-Data.org</a><br>

<img alt="demo" src="https://github.com/mahermer88/UsingAPIs-Project-Footballer/blob/main/assets/App-Demo%5B1%5D.gif" width="700" height="350"/><br>

----------------------------------------------------------------

## About the project
This project is for the final week of Using API's module. The project must be a SPA connected to an API!
To good use and build this project, we should use everythings we have learned in previous HYF - modules:
 
<a href="https://github.com/HackYourFuture/HTML-CSS" style="display: inline">HTML/CSS/GIT</a><br>
<a href="https://github.com/HackYourFuture/JavaScript" style="display: inline">JavaScript</a><br>
<a href="https://github.com/HackYourFuture/Browsers" style="display: inline">Browsers</a><br>
<a href="https://github.com/HackYourFuture/UsingAPIs" style="display: inline">Using-APIS</a><br>


## Backlog
Description of Some requirements and features for this project: ...

## Must-Haves
> these are necessary for basic usability

- [ ] The app needs to be a single page application. That means only one index.html and JavaScript file needs to update the html using DOM manipulation.
- [ ] The app needs to interact with an API to grab data.
- [ ] The app needs to have loading/error handling for the interaction with the API.
- [ ] The app needs some user interaction such that you need to grab different data from the API. So you cannot just grab everything from the API and store it locally.

#### Best competitions:
The app shows a list of 12 free available competitions out of the API.
User can select any one of them and will get a small table with some chosen competition details, such as name, country, last update...<br>

<img alt="demo" src="https://github.com/mahermer88/UsingAPIs-Project-Footballer/blob/main/assets/App-comp%5B1%5D.gif" width="700" height="350"/><br>

----------------------------------------------------------------

## Should-Haves
> these are not necessary but nice to have

### - The app needs to fetch data from more than one endpoint (from the same API)

#### Competition' standing: 
The app at first fetches data from an endpoint called competitions, then it uses a different endpoint called "standing" to show teams' results tables depending on chosen competition button (first endpoint).<br>

<img alt="demo" src="https://github.com/mahermer88/UsingAPIs-Project-Footballer/blob/main/assets/App-stand%5B1%5D.gif" width="700" height="350"/><br><br><br>


# 
### - The app needs to use filter data methods if provided by the API.

#### Competition matches:
The app uses a filter method provided by the API to show the matches' results depending on the matchday's number and chosen competition. Matchday's number list starts at 1 until a provided current matchday's.<br>

<img alt="demo" src="https://github.com/mahermer88/UsingAPIs-Project-Footballer/blob/main/assets/App-match%5B1%5D.gif" width="700" height="350"/><br><br><br>



# 
### -  The app needs to render the HTTP and Network errors.

#### Error handeling:
The app will show this "toast" wherever it catches an error. The app shows the error' message and refresh button, or it will show an alert confirmation to refresh after few seconds.<br>

<img alt="demo" src="https://github.com/mahermer88/UsingAPIs-Project-Footballer/blob/main/assets/App-error%5B1%5D.gif" width="700" height="350"/><br><br><br>

----------------------------------------------------------------
 
## Could-Haves
> would be really cool ... if there's time
> 
- [ ] The apps needs to show teams and squad.
- [ ] The user can select and fetch data from many endpoints at same time.(multiple select)

 


