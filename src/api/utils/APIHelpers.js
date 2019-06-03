function getAverage(sizeSum, sizeLength) {
  if (!sizeSum || !sizeLength || sizeSum < 1 || sizeLength < 1) return false;

  sizeSum = Number(sizeSum);
  sizeLength = Number(sizeLength);

  return sizeSum / sizeLength;
}


module.exports = { getAverage };