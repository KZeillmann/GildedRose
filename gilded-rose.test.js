const updateQuality = require("./");

test("should do something", () => {
  updateQuality([]);
});

// todo: make test more clear
test("should update quality non-conjured items", () => {
  const result = updateQuality([
       { name: "+5 Dexterity Vest", sellIn: 10, quality: 20 },
       { name: "Aged Brie", sellIn: 2, quality: 0 },
       { name: "Elixir of the Mongoose", sellIn: 5, quality: 7 },
       { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
       {
        name: "Backstage passes to a TAFKAL80ETC concert",
         sellIn: 15,
         quality: 20
       }
     ]);

     expect(result).toEqual([
       {"name": "+5 Dexterity Vest", "quality": 19, "sellIn": 9}, 
       {"name": "Aged Brie", "quality": 1, "sellIn": 1},
       {"name": "Elixir of the Mongoose", "quality": 6, "sellIn": 4}, 
       {"name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0}, 
       {"name": "Backstage passes to a TAFKAL80ETC concert", "quality": 21, "sellIn": 14}
      ]);
});

test("should update quality with conjured items", () => {
  const result = updateQuality([
    { name: "Conjured Mana Cake", sellIn: 3, quality: 6 }
  ]);

  expect(result).toEqual( [{"name": "Conjured Mana Cake", "quality": 4, "sellIn": 2}])
});

test("should update quality of conjured items with 0 sellIn", () => {
  const result = updateQuality([
    { name: "Conjured Mana Cake", sellIn: 0, quality: 1 }
  ]);
  expect(result).toEqual([{ name: "Conjured Mana Cake", sellIn: -1, quality: 0 }])
});


test("should update quality of conjured items with <0 sellIn", () => {
  const result = updateQuality([
    { name: "Conjured Mana Cake", sellIn: -1, quality: 1 }
  ]);
  expect(result).toEqual([{ name: "Conjured Mana Cake", sellIn: -2, quality: 0 }])
});

test("should update quality with item with < 0 days sellIn value", () => {

});

test("should not update Sulfuras, Hand of Ragnaros", () => {
  const result = updateQuality([
    { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
  ]);

  expect(result).toEqual([{"name": "Sulfuras, Hand of Ragnaros", "quality": 80, "sellIn": 0}]);
});

//ensure negatives are handled