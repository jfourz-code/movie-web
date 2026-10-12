
# Project Movie Web (CineScope)

A responsive movie and TV series discovery web app. Browse trending titles,
search with live suggestions, and explore details such as cast, genres, and
production companies. Data is provided by the TMDB API.

## Features

- Discover page with a random trending hero section and daily trending
  movie and TV carousels
- Detail page for movies and TV series (rating, runtime or episode count,
  overview, genres, cast, production companies)
- Search with debounced live suggestions and a full results page
- Skeleton loading states and error alerts
- Responsive layout for mobile and desktop


## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router
- Axios
- TanStack Query
- TMDB API


## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file and add your TMDB API key
   (variable name: <Exampe: API_KEY>, must start with `VITE_`)
4. Run the dev server: `npm run dev`

## What I Learned

- Dynamic routing with `useParams` and `useSearchParams`
- Data fetching, caching, and loading/error states
- Custom hooks and separating API, hooks, and UI layers
- Debouncing and handling race conditions


## Acknowledgements

This product uses the TMDB API but is not endorsed or certified by TMDB.


## Preview

![HomeDesktop](/src/photo/HomeDesktop.png)

![DetailFilm](/src/photo/DetailFilmDesktop.png)

![SearchResult](/src/photo/SearchResultDesktop.png)


## Authors

- [@jfourz-code](https://github.com/jfourz-code)
