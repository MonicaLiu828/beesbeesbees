var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.color = 'yellow';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
};

ForagerBee.prototype.eat = Grub.prototype.eat;