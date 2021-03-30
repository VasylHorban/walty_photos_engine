export type tag = {
  text: string
  id: number
};

export type photo = {
  id: number
  pageURL: string
  type: string
  tags: string
  previewURL: string
  previewWidth: number
  previewHeight: number
  webformatURL: string
  webformatWidth: number
  webformatHeight: number
  largeImageURL: string
  imageWidth: number
  imageHeight: number
  imageSize: number
  views: number
  downloads: number
  favorites: number
  likes: number
  comments: number
  user_id: number
  user: string
  userImageURL: string
};

export type payload = {
  hits : Array<photo>
  total : number
  totalHits : number
}

