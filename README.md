# Bandom

[Live Link!](https://bandom.herokuapp.com/#)

Bandom is a full-stack web application inspired by Bandcamp, a music-sharing
website and marketplace between "fans" (users), artists, and labels.
Bandom uses Ruby on Rails on the backend, a PostgreSQL database,
and React.js with Redux framework on the frontend.

## Features and Implementation

### 1. Artist & Album Show Pages

![show gif](app/assets/images/album-artist.gif)

- Users can view other artist's pages that display all of the artist's discography and background information. On an album page, users can view the full information for a specific album, including title, genre, description, release year and its full track list. An album page also has a link to its artist's page and an artist page has links to each of its album's pages.

### 2. Song Player

![playback gif](app/assets/images/bandom-playback.gif)

- Users can preview and play through tracks in album show page and can download a track to their computer

### 3. Search Bar

![search gif](app/assets/images/bandom-search.gif)

- Users can search for an artist or album with results that display and update in real-time based on pattern matching. For a more intuitive UI, search results for artists have their pictures in a circular frame while album search results have square framing.

### 4. User Authentication

![login gif](app/assets/images/bandom-login.gif)

- The user authentication features login and sign up options in separate forms as well as links to these pages while browsing, including a signup modal that redirects to signup form. In the login form, there is also a guest login option with a button that when clicked, displays an animated self-typing login of a guest user.

## Future Plans

In addition to the features already implemented, I plan to continue work on this project. The next steps for Bandom are outlined below:

- Search function for tracks

- Browse by Genre section on Landing page

- Recently Downloaded section on Landing page

- Creating, Editing, and Deleting tracks and albums in a user's own collection

- Follows: Allowing users to follow each other and artist pages

- Large-scale Playback: Bigger Viewer of current song that's playing, with album art as background.

- Favorites: Users can favorite each other's collections and access them in their Favorite Collections

## Credits

* Code by: Max Currier
* Demo Login Animation from: Typed.js Library by Matt Boldt
