import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const defaultLang = 'en';
const apiKey = 'k_84kkttat'

export class Movie {
  id = "";
  rank ="";
  title = "";
  year = "";
  image = "";
  imDbRating = "";
}

// Define a service using a base URL and expected endpoints
export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb-api.com/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<{items: Movie[]}, string>({
        query: (lang=defaultLang) => `${lang}/API/Top250Movies/${apiKey}`,
    })
  }),
})

export const { useGetMoviesQuery } = imdbApi

