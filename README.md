# Bandom

[Try out Bandom here!](https://bandom.herokuapp.com/#/login)

Bandom is a full-stack music-sharing and streaming web application designed in mind for more local and lesser-known artists, inspired by Bandcamp. Bandom uses Ruby on Rails and a PostgreSQL database on the backend and a React-Redux framework on the frontend.

## Features

### 1. Artist & Album Show Pages

![show gif](app/assets/images/album-artist2.gif)

- Users can view other artist's pages that display all of the artist's discography and background information. On an album page, users can view the full information for a specific album, including title, genre, description, release year and its full track list. An album page also has a link to its artist's page and an artist page has links to each of its album's pages.

### 2. Song Player

![playback gif](app/assets/images/bandom-playback.gif)

- Users can preview and play through tracks in album show page and can download a track to their computer.

### 3. Album Creation and Deletion

![create gif](app/assets/images/create-album2.gif)

- Using a form on the "add music" page, users can create their own albums and add them to the Bandom index for all users to enjoy streaming and downloading. The album creation form requires a title, genre, description, release year, at least one track, and has an optional album artwork uploading section. The form contains custom error handling and alert messages for incorrect file types and missing parameters. Users also have the option to delete their own albums using a button found on each of their album's respective show pages.

### 4. Search Bar

![search gif](app/assets/images/updated-search.gif)

- Users can search for a track, artist or album with results that display and update in real-time based on three separate client-side pattern-matching functions that simply filter and return results from data already in the state, thus saving on slow and costly database calls. For a more intuitive UI, search results for artists have their pictures in a circular frame, artworks for album search results have square framing, and track search results have a blue music note icon beside them.

### 5. Filter Music by Genre

![genre-filter gif](app/assets/images/genre-filter.gif)

- On the landing page below the featured artists section, there is a genre filter which, as the name suggests, filters the albums by the user's genre choice and returns a sample of albums that are a match for that genre. The genres nav bar only displays the genres that currently have assigned music in the database so there will always be at least one match. For an enhanced UX, each genre input in the genres nav bar has a unique assigned color that is displayed on the user's click.

### 6. User Profile Editing

![edit gif](app/assets/images/edit-info2.gif)

- In the user profile page found under the user's username link in the nav bar, users have the ability to set and change their artist profile picture and can also set their hometown/location to any city in the world using Google Maps Places API.

### 7. User Authentication

![login gif](app/assets/images/bandom-login.gif)

- Bandom's user authentication (built with Rails' ActiveRecord) features login and sign up options in separate forms as well as links to these pages while browsing, including a signup modal that redirects to the sign up form. In the login form, there is also a guest login option with a button that when clicked, displays an animated self-typing login of a guest user.

## Future Plans

In addition to the features already implemented, I plan to continue improving and adding additional features to this project. The next steps for Bandom are outlined below:

- Recently Downloaded section on Landing page

- Editing tracks and albums in a user's own collection

- Follows: Allowing users to follow each other and artist pages

- Large-scale Playback: Bigger Viewer of current song that's playing, with album art as background.

- Favorites: Users can favorite each other's collections and access them in their Favorite Collections

## Credits

* Code by: Max Currier
* Demo Login Animation: [Typed.js](https://github.com/mattboldt/typed.js/) by Matt Boldt
* Autocompleting Places Search: [React Places Autocomplete](https://github.com/kenny-hibino/react-places-autocomplete) by Kenny Hibino
* Places Search Data: [Google Maps Places API](https://developers.google.com/places/web-service/autocomplete)
* Seed Audio Files: [FlyingTunes](https://www.youtube.com/channel/UCdnkfU-V49Xpj_vNyP2BYlg), [Audio Library](https://www.youtube.com/channel/UCht8qITGkBvXKsR1Byln-wA), [No Copyright Music](https://www.youtube.com/channel/UC2iczXFcRRg5nN_IVQOXIaA), and originals by [Max Currier](https://www.noteflight.com/profile/5135f668da06031e18b290482b5d4ce0867642a7)
