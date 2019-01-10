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

module.exports = function updateQuality(items) {
  for (var i = 0; i < items.length; i++) {
    if (
      items[i].name != "Aged Brie" &&
      items[i].name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (items[i].quality > 0) {
        if (items[i].name != "Sulfuras, Hand of Ragnaros") {
          items[i].quality = items[i].quality - 1;
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1;
        if (items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          if (items[i].sellIn < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
          if (items[i].sellIn < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
        }
      }
    }
    if (items[i].name != "Sulfuras, Hand of Ragnaros") {
      items[i].sellIn = items[i].sellIn - 1;
    }
    if (items[i].sellIn < 0) {
      if (items[i].name != "Aged Brie") {
        if (items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
          if (items[i].quality > 0) {
            if (items[i].name != "Sulfuras, Hand of Ragnaros") {
              items[i].quality = items[i].quality - 1;
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality;
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1;
        }
      }
    }
  }

  return items;
};
