export interface UserGrimoire {
  score: number
  cardCollection: Array<Card>
  cardToHide: Array<Card> // à vérifier chez moi c vide
  bonuses: Array<Bonus>
}

export interface GrimoireCardDefinition {
  [key: string]: CardDefinition
}

interface CardDefinition {
  cardId: number
  cardName: string
  cardIntro?: string
  cardIntroAttribution?: string
  cardDescription?: string
  unlockHowToText?: string
  rarity: number
  unlockFlagHash: number
  points: number
  normalResolution: ImageGroup
  highResolution: ImageGroup
  statisticCollection?: Array<StatDefinition>
}

export interface StatDefinition {
  statNumber: number
  cardId: number
  statName: string
  accumulatorHash: number
  rankCollection?: Array<StatRankDefinition>
}

interface StatRankDefinition {
  rank: number
  threshold: number
  unlockFlagHash: number
  points: number
}

interface ImageGroup {
  image: Image
  smallImage: Image
}

export interface Card {
  cardId: number
  score: number
  points: number
  statisticCollection?: Array<Stat>
}

export interface Stat {
  statNumber: number
  value: number
  displayValue: string
  rankCollection: Array<StatRank>
}

interface StatRank {
  rank: number
  points: number
}

export interface Bonus {
  bonusDescription: string
  bonusName: string
  bonusRank: BonusRank
  cardId: number
  cardName: string
  smallImage: Array<Image>
  statName: string
  threshold: number
  value: number
}

interface BonusRank {
  rank: number
  statId: number
}

export interface Image {
  rect: ImageFormat
  sheetPath: string
  sheetSize: ImageFormat
}

interface ImageFormat {
  x: number
  y: number
  height: number
  width: number
}
