# Gilded Rose Refactoring Excersise in JavaScript

> **TL;DR; You inherited this NPM package for stock management. You are asked to add support for new product. Feel free to refactor as you like.**

If you want to get cracking:

```
git clone --depth=1 https://github.com/robinpokorny/gilded-rose-javascript.git
cd gilded-rose-javascript
yarn
yarn test
```

---

## This version

- Functional programming friendly

- Only the API of the whole package needs to preserved
- Change the code, add dependencies,use tools, create files or folders – whatever you find helpful
- [Jest](https://jestjs.io/), the unit testing framework, is provided for convinience – it is entirely optional

The original text was slighlty adjusted to reflect those changes.

## Original text

Hi and welcome to team Gilded Rose.

As you know, we are a small inn with a prime location in a prominent city ran
by a friendly innkeeper named Allison. We also buy and sell only the finest
goods. Unfortunately, our goods are constantly degrading in quality as they
approach their sell by date.

We have a system in place that updates our inventory for us. It was developed
by a no-nonsense type named Leeroy, who has moved on to new adventures. Your
task is to add the new feature to our system so that we can begin selling a
new category of items.

First an introduction to our system:

- All items have a _sellIn_ value which denotes the number of days we have to
  sell the item

- All items have a _quality_ value which denotes how valuable the item is

- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the _sellIn_ days is less then zero, _quality_ degrades twice as fast

- The _quality_ of an item is never negative

- "Aged Brie" actually increases in _quality_ the older it gets

- The _quality_ of an item is never more than 50

- "Sulfuras", being a legendary item, never has to be sold nor does it
  decrease in _quality_

- "Backstage passes", like aged brie, increases in _quality_ as it's _sellIn_
  value decreases; _quality_ increases by 2 when there are 10 days or less
  and by 3 when there are 5 days or less but _quality_ drops to 0 after the
  concert

We have recently signed a supplier of conjured items. This requires an update
to our system:

- "Conjured" items degrade in _quality_ twice as fast as normal items

Feel free to make any changes to the _updateQuality_ method and add any new
code as long as everything still works correctly. However, do not alter the
interface of input and output of the function as this belongs to the goblin in the corner
who will insta-rage and one-shot you as he doesn't believe in shared code
ownership.

Just for clarification, an item can never have its _quality_ increase above 50,
however "Sulfuras" is a legendary item and as such its _quality_ is 80 and it
never alters.

### Sources:

- http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/
- https://github.com/professor/GildedRose
- https://github.com/guyroyse/gilded-rose-javascript
