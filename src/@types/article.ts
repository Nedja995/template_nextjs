export default interface Article {
  id: string
  name: string
  shortDescription: string
  description: string
  images: string
}

export interface ArticlesResponse {
  articles: Article[]
}
