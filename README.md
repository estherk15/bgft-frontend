# BigFoot Finder: The Front End

[Demo Video](placeholder for the demo video)

This JavaScript Single Page Application was built to help BigFoot enthusiasts keep track of all their BigFoot sightings as well as comment on other sightings to corroborate. Through the incorporation of Leaflet Library, enthusiasts are able to interact with a visual map of the United States and click on the location of their sighting.

## Installation
In order to persist your sightings and comments, you will need fork and clone the Ruby on Rails backend located [here](https://github.com/estherk15/bgft-backend).

Keep track of your BigFoot sightings! To begin, fork this repository and clone it to your hard drive. CD into the folder and if you're in your terminal, enter ```npm start``` to get your app running.

## Built with
- [React](https://reactjs.org/) : BigFoot Finder was built with [create-react-app](https://github.com/facebook/create-react-app).
- [React Router](https://reacttraining.com/react-router/) : Allows for a better user experience when navigating throughout the different components of the app.
- [Ruby on Rails](https://rubyonrails.org/) : API backend with endpoints for the User, Sightings, and Comments.
- [postgreSQL](https://www.postgresql.org/) : Database that holds all BigFoot Finder data a user persists.
- [React-Leaflet](https://react-leaflet.js.org/) : Allows the user to pin the location of their sighting to a map, making sighting experience visually appealing.

## Structure

The `index.html` file hold the structure of the app. An `src` folder contains the `index.js` file which holds the JavaScript and DOM manipulation logic.

## Using the Application

#### User Login  
In order to save your sightings and comments, you have to identify yourself as an existing user or create an account. If this is your first time using this app, click the "Make a user" button, input your desired username, then submit. If you are a returning user, enter your username in the "Enter Username" field.
<!-- Insert a gif of the user login page -->

#### BigFoot Sighting
Once you are logged in, a sighting form will appear above the map with the ```Location```, ```Latitude```, ```Longitude```, ```Description```, and ```Photo``` fields. Enter a the location, brief description and photo url in the fields. The Latitude and Longitude fields are derived from where you click on the map. Wherever the blue pin is on the map is the lat and long that will be auto populated on the form.
<!-- Insert a gif of the sighting -->

#### BigFoot Sighting Comments
Once you've saved a sighting, you can see it on the map by the footprint icon. Clicking on the footprint icon will display a modal of information regarding that sighting. If you want to add amplifying information, or read other enthusiasts' comments, click on the `Bigger View` button.
<!-- Insert a gif of the comments feature -->
