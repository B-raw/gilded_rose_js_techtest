function Item(name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

var items = []

function updateQuality() {
  for (var i = 0; i < items.length; i++) {
    if (itemIsSulfuras(items[i])) {
      return
    }
    else if (itemIsAgedBrie(items[i])) {
      if (items[i].quality < 50) {
        items[i].quality += 1;
      }
      items[i].sellIn -= 1;
      if (items[i].sellIn < 0) {
        if (items[i].quality < 50) {
          items[i].quality += 1
        }
      }
    }
    else if (itemIsBackstagePass(items[i])) {
      if (items[i].quality < 50) {
        items[i].quality += 1
        if (items[i].sellIn < 11) {
          if (items[i].quality < 50) {
            items[i].quality += 1
          }
        }
        if (items[i].sellIn < 6) {
          if (items[i].quality < 50) {
            items[i].quality += 1
          }
        }
      }
      items[i].sellIn -= 1;
      if (items[i].sellIn < 0) {
        items[i].quality -= items[i].quality
      }
    }
    else {
      if (items[i].quality > 0) {
          items[i].quality -= 1
      }
      items[i].sellIn -= 1;
      if (items[i].sellIn < 0) {
        if (items[i].quality > 0) {
          items[i].quality -= 1
        }
        else {
          items[i].quality -= items[i].quality
        }
      }
    }
  }
}

function itemIsSulfuras(item) {
  return item.name === 'Sulfuras, Hand of Ragnaros';
}

function itemIsAgedBrie(item) {
  return item.name === 'Aged Brie';
}

function itemIsBackstagePass(item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}
