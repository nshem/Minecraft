class Tool {
  constructor(name,ores) {
    this.name = name; //string
    this.ores = ores; //array
  }

  canMine(clickedOre) {
    return this.ores.includes(clickedOre);
  }
}

