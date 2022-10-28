//this is a function to shorten the address
//showing the first 5 chars and ... and last 4 chars
export const shortAddress = (address) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
