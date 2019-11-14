const checkForSpam = string => {
  const lowerString = string.toLowerCase();
  return lowerString.includes("sale") || lowerString.includes("spam");
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
