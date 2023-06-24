# Welcome 

This repo can be viewed by visiting <a href="https://imdb-aa034.web.app/">https://imdb-aa034.web.app/</a>

For this repo, I use React-testing-library as the automation test

# Stack used:
- React18
- React packages: 
  - React-router
  - React-error-boundary
  - Redux Toolkit
- Testing: **React-testing-library**
- Test packages: **mock-service-worker**
- Styles: **scss**
- Bundler: **Vite**
- language: **Typescript**
- Deployment: **Firebase**

# How to run dev
run at localhost:5173
```
  npm run dev
```

# How to run test

```
   npm run test
```


# Folder structure

The code structure utilize module based.

```
├── main.tsx                    -> Main file
├── app.test.tsx
├── app.store.tsx               -> Gloval Redux store
├── app.tsx
├── app.scss
├── reset.scss
├── mockData                    -> mockData for unit test
│   └── movies.tsx
├── services                    -> Contain all Rest API with RTK Query
│   └── imdb.ts
├── sharedComponents            -> Contain all general shared components
│   ├── NoMatch.tsx
│   └── Header
│       ├── BackButton.tsx
│       ├── Header.scss
│       └── Header.tsx
├── modules         
│   ├── favorites
│   │   ├── component           -> Each module can have components (page)
│   │   │   └── Favorites.tsx
│   │   ├── reducer             -> folder for reducer
│   │   │   ├── favoritesReducer.tsx
│   │   └── index.tsx
│   ├── movies
│   │   ├── components          -> Each module can have components (page)
│   │   │   ├── movie
│   │   │   │   ├── movie.scss
│   │   │   │   ├── movie.test.tsx
│   │   │   │   └── movie.tsx
│   │   │   └── movies
│   │   │       ├── movies.scss
│   │   │       ├── movies.test.tsx
│   │   │       └── movies.tsx
│   │   └── index.tsx
└── vite-env.d.ts
```