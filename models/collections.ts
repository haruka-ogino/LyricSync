export interface CollectionData {
  name: string
  user_id: string
}

export interface Collection extends CollectionData {
  id: number
}

export interface CollectionDataFE {
  name: string
  userId: string
}
