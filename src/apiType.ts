export interface GrimoireDefinition {
  themeCollection: Array<Theme>
}

export interface Theme {
  themeId: string
  themeName: string
  normalResolution: ImageGroup
  highResolution: ImageGroup
  pageCollection: Array<Page>
}

export interface Page {
  pageId: string
  pageName: string
  normalResolution: ImageGroup
  highResolution: ImageGroup
  cardCollection: Array<CardDefinition>
  cardBriefs: Array<CardBrief>
}

interface CardBrief {
  cardId: number
  points: number
  totalPoints: number
}

export interface UserGrimoire {
  score: number
  cardCollection: Array<Card>
  cardToHide: Array<Card> // à vérifier chez moi c vide
  bonuses: Array<Bonus>
}

export interface GrimoireCardDefinition {
  [key: string]: CardDefinition
}

export interface CardDefinition {
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

/* React Router */

export interface UseParams {
  themeId?: string
  pageId?: string
  cardId?: string
}
