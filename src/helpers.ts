import { Bonus, Card, Image, Theme } from "./apiType"

export function getNumberOfCardsInTheme(theme: Theme): number {
  let number = 0
  theme.pageCollection.map(page => {
    number += page.cardBriefs.length
  })
  return number
}

export function getUserCardFromCollection(cardId: number | string, cardCollection: Array<Card>) {
  if (cardCollection) {
    const filteredCollection = cardCollection.filter(item => item.cardId == cardId)
    if (filteredCollection.length > 0) {
      return filteredCollection[0]
    }
  }
  return false
}

export function getCardBonus(cardId: number | string, bonuses: Array<Bonus>) {
  if (bonuses) {
    const filteredBonuses = bonuses.filter(item => item.cardId == cardId)
    if (filteredBonuses.length > 0) {
      return filteredBonuses[0]
    }
  }
  return false
}

export function cardImageStyle(image: Image, small?: boolean) {
  return {
    width: (small ? image.rect.width / 2 : image.rect.width) + "px",
    height: (small ? image.rect.height / 2 : image.rect.height) + "px",
    background: "url(https://www.bungie.net" + image.sheetPath + ") -" + (small ? image.rect.x / 2 : image.rect.x) + "px -" + (small ? image.rect.y / 2 : image.rect.y) + "px",
    backgroundSize: (small ? image.sheetSize.width / 2 : image.sheetSize.width) + "px " + (small ? image.sheetSize.height / 2 : image.sheetSize.height) + "px"
  }
}
