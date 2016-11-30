describe("Gilded Rose", function() {

  describe("regular items", function() {
    beforeEach(function() {
      items = [ new Item('+5 Dexterity Vest', 10, 20) ];
    });

    it("should decrease quality by 1 per day", function() {
      updateQuality();
      expect(items[0].quality).toEqual(19);
    });

    it("should decrease sellIn by 1 per day", function() {
      updateQuality();
      expect(items[0].sellIn).toEqual(9);
    });

    describe("when sell by date passed", function() {
      it("should decrease quality by 2 per day", function() {
        items = [ new Item('+5 Dexterity Vest', 0, 20) ];
        updateQuality();
        expect(items[0].quality).toEqual(18);
      });
    });

    describe("when quality is 0", function() {
      it("quality can't be less than 0", function() {
        items = [ new Item('+5 Dexterity Vest', -4, 0) ];
        updateQuality();
        updateQuality();
        expect(items[0].quality).toEqual(0);
      });
    });
  });

  describe("Aged Brie", function() {
    beforeEach(function() {
      items = [ new Item('Aged Brie', 2, 5) ];
    });

    it("should increase quality by 1 per day", function() {
      updateQuality();
      expect(items[0].quality).toEqual(6);
    });

    it("should decrease sellIn by 1 per day", function() {
      updateQuality();
      expect(items[0].sellIn).toEqual(1);
    });

    describe("when sell by date passed", function() {
      it("should increase quality by 2 per day", function() {
        items = [ new Item('Aged Brie', 0, 20) ];
        updateQuality();
        expect(items[0].quality).toEqual(22);
      });
    });

    describe("when quality is 50", function() {
      it("quality can't be more than 50", function() {
        items = [ new Item('Aged Brie', -2, 50) ];
        updateQuality();
        expect(items[0].quality).toEqual(50);
      });
    });

  });

  describe("Sulfuras", function() {
    beforeEach(function() {
      items = [ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ];
    });

    it("should never decrease quality", function() {
      updateQuality();
      updateQuality();
      expect(items[0].quality).toEqual(80);
    });

    it("should not decrease sellIn", function() {
      updateQuality();
      expect(items[0].sellIn).toEqual(0);
    });

  });

  describe("Backstage passes", function() {
    describe("increases in quality as sellIn approaches 0", function() {
      it("increases by 1 when there are over 10 days", function() {
        items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 12, 20) ];
        updateQuality();
        updateQuality();
        expect(items[0].quality).toEqual(22);
      });

      it("increases by 2 when there are 10 days or less", function() {
        items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20) ];
        updateQuality();
        updateQuality();
        expect(items[0].quality).toEqual(24);
      });

      it("increases by 3 when there are 5 days or less", function() {
        items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20) ];
        updateQuality();
        updateQuality();
        expect(items[0].quality).toEqual(26);
      });
    });

    it("quality drops to 0 after the concert", function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20) ];
      updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    describe("when quality is 50", function() {
      it("quality can't be more than 50", function() {
        items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50) ];
        updateQuality();
        expect(items[0].quality).toEqual(50);
      });
    });

  });

  describe("Conjured items", function() {
    beforeEach(function() {
      items = [ new Item('Conjured', 10, 20) ];
    });

    it("should decrease quality by 2 per day", function() {
      updateQuality();
      expect(items[0].quality).toEqual(18);
    });

    it("should decrease sellIn by 1 per day", function() {
      updateQuality();
      expect(items[0].sellIn).toEqual(9);
    });

    describe("when sell by date passed", function() {
      it("should decrease quality by 4 per day", function() {
        items = [ new Item('Conjured', 0, 20) ];
        updateQuality();
        expect(items[0].quality).toEqual(16);
      });
    });

    describe("when quality is 0", function() {
      it("quality can't be less than 0", function() {
        items = [ new Item('Conjured', -4, 0) ];
        updateQuality();
        updateQuality();
        expect(items[0].quality).toEqual(0);
      });
    });
  });







});
