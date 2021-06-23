import { AxiosInstance } from "axios"

export class MoviesClient {
  constructor(private axios: AxiosInstance, private apiKey: string) {
    this.axios = axios
    this.apiKey = apiKey
  }

  // Fetch movies by user input
  fetch = async (searchTerm: string) => {
    const filter = {
      s: searchTerm ?? "all",
      apikey: this.apiKey,
      type: "movie",
    }
    const response: any = await this.axios.get("/", {
      params: filter,
    })
    return response.data
  }
}
