function rot13(str) {
  // match all UpperCase letters 
  return str.replace(/[A-Z]/g, char => {
    // replace it with  rot13 compliment
    return String.fromCharCode((char.charCodeAt(0) % 26) + 65)
  });
}
