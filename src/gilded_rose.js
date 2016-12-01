function Item(name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

var items = [];

function updateQuality() {
  for (var i = 0; i < items.length; i++) {
    switch (items[i].name) {
      case 'Sulfuras, Hand of Ragnaros':
        break;
      case 'Aged Brie':
        brieLogic(items[i]);
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        backstagePassLogic(items[i]);
        break;
      case 'Conjured Mana Cake':
        conjuredLogic(items[i]);
        break;
      default:
        regularItemLogic(items[i]);
      }
  }
}

function brieLogic(item) {
  increaseQuality(item);
  decreaseSellInDays(item);
  if (outOfDate(item)) {
    increaseQuality(item);
  }
}

function backstagePassLogic(item) {
  increaseQuality(item);
  backstagePassIncreaseQuality(item);
  decreaseSellInDays(item);
  if (outOfDate(item)) {
    item.quality = 0;
  }
}

function regularItemLogic(item) {
  decreaseQualityBy(1, item);
  decreaseSellInDays(item);
  if (outOfDate(item)) {
    decreaseQualityBy(1, item);
  }
}

function conjuredLogic(item) {
  decreaseQualityBy(2, item);
  decreaseSellInDays(item);
  if (outOfDate(item)) {
    decreaseQualityBy(2, item);
  }
}

// HELPERS

function backstagePassIncreaseQuality(item) {
  if (item.sellIn < 11) {
    increaseQuality(item);
  }
  if (item.sellIn < 6) {
    increaseQuality(item);
  }
  if (item.sellIn === 0) {
      item.quality = 0;
  }
}

function outOfDate(item) {
  return item.sellIn < 0;
}

function decreaseQualityBy(amount, item) {
  if (item.quality > 0) {
    item.quality -= amount;
  }
}

function increaseQuality(item) {
  if (item.quality < 50) {
    item.quality += 1;
  }
}

function decreaseSellInDays(item) {
  item.sellIn -= 1;
}
