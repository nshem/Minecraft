// Namespaces

const GAME = {
  ores: ["wood", "plant", "dirt", "stone"],
  tools: {
    axe: new Tool("axe", ["wood", "leaf"]),
    pickaxe: new Tool("pickaxe", ["stone"]),
    shovel: new Tool("shovel", ["dirt"])
  },
  currentOre: undefined,
  currentTool: undefined
};

const DOM_RELATED = {
  pixels: $('.pixel'),
  tools: $('.tool'),
  heldOre: $('#held-ore')
}