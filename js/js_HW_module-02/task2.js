const calculateEngravingPrice = (message, pricePerWord) => {
  const words = message.split(" ");
  const length = words.length;
  const total = length * pricePerWord;

  return total;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40));

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20));

