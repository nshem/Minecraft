class Tool {
  constructor(name,ore) {
    this.name = name;
    this.ore = ore;
  }

  canMine(clickedOre) {
    return this.ore === clickedOre;
  }
}