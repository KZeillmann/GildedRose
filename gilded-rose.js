/**
 * The update quality function
 * @example
 * updateQuality([
 *   { name: "+5 Dexterity Vest", sellIn: 10, quality: 20 },
 *   { name: "Aged Brie", sellIn: 2, quality: 0 },
 *   { name: "Elixir of the Mongoose", sellIn: 5, quality: 7 },
 *   { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
 *   {
 *     name: "Backstage passes to a TAFKAL80ETC concert",
 *     sellIn: 15,
 *     quality: 20
 *   },
 *   { name: "Conjured Mana Cake", sellIn: 3, quality: 6 }
 * ]);
 */

const calculateSellIn = (item) => {
  if (item.name == "Sulfuras, Hand of Ragnaros") {
    return item.sellIn;
  }
  return item.sellIn - 1;
}

const decrementQuality = (item) => {
  const defaultSubtract = 1;
  let multiplier = 1;
  if(item.name === "Conjured Mana Cake") {
    multiplier = multiplier * 2;
  }
  if(item.sellIn <= 0) {
    multiplier = multiplier * 2
  }
  const calculatedQuality = item.quality - (defaultSubtract * multiplier);

  return Math.max(0, calculatedQuality);
  
};

module.exports = function updateQuality(items) {
  return items.map((item) => {
    if(item.name === "Sulfuras, Hand of Ragnaros") {
      return item;
    }

    const newSellIn = calculateSellIn(item);

    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
        item.quality = decrementQuality(item);
    } else { //items that increase in value
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6 && item.quality < 50) {
              item.quality = item.quality + 1;
          }
        }
      }
    }
    item.sellIn = newSellIn;

    if (item.sellIn < 0) {
      if (item.name == "Aged Brie") {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      } else {
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          item.quality = 0;
        }
      }
    }

    return item;
  });

};
