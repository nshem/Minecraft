class Pixel {
  constructor(type, position) {
    this.type = type; // string
    this.position = position; // (y,x)
  }
}

class Dirt extends Pixel {
  constructor() {
    super("pixel sky dirt", [undefined, undefined]);
  }
}

class Grass extends Pixel {
  constructor() {
    super("pixel sky grass", [undefined, undefined]);
  }
}

class Wood extends Pixel {
  constructor() {
    super("pixel sky wood", [undefined, undefined]);
  }
}

class Leaf extends Pixel {
  constructor() {
    super("pixel sky leaf", [undefined, undefined]);
  }
}

class Stone extends Pixel {
  constructor() {
    super("pixel sky stone", [undefined, undefined]);
  }
}

class Sky extends Pixel {
  constructor() {
    super("pixel sky", [undefined, undefined]);
  }
}

//TODO create Cloud class