import axios, { AxiosInstance } from "axios"
import settings from "../appSettings.json"

class AxiosClient {
  public baseUrl: string | undefined
  public instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: settings.omdbApi.url,
      headers: {
        "Content-Type": "application/json",
      },
    })
    this.baseUrl = settings.omdbApi.url
  }
}

export default new AxiosClient()
