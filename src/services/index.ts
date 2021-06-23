import axiosClient from "./axiosClient"
import { MoviesClient } from "./movieClient"
import settings from "../appSettings.json"

const moviesClient = new MoviesClient(
  axiosClient.instance,
  settings.omdbApi.apiKey
)

export default moviesClient
