# Nodejs Graphql Service
## Database

Run your own mongodb database at port: 27888, login:mongoadmin, secret:secret

## Microservices

1. Clone/download repo [here](https://github.com/rolling-scopes-school/node-graphql-service)
2. `npm install`
3. Follow instructions in ReadMe.md

## GraphQL

**Installation**

1. Clone/download repo [here](https://github.com/Leytek/nodejs-graphql-service)
2. `npm install`

**Usage**

`npm run start`

- App served @ `http://localhost:3000` with nodemon

**Configuration**

If you want to change Apollo server port or microservices urls, please modify `.env` (it was added to the hithub to ease verification).

## Queries

- artist
- artists
- genre
- genres
- track
- tracks
- band
- bands
- album
- albums
- jwt
- user
- favourites (available only for logged in user)

## Mutation

Mutation requests available only for logged in users. (except Users.register)

- Artists

* createArtist
* deleteArtist
* updateArtist

- Genres

* createGenre
* deleteGenre
* updateGenre

- Bands

* createBand
* deleteBand
* updateBand

- Tracks

* createTrack
* deleteTrack
* updateTrack

- Albums

* createAlbum
* deleteAlbum
* updateAlbum

- Users

* register

- Favourites

* addTrackToFavourites
* addBandToFavourites
* addArtistToFavourites
* addGenreToFavourites