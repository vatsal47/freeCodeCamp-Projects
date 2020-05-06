function convertToRoman(num) {
  // declare romanNum string to return at the end
  let romanNum = ''
  // add a roman numerals object
  const romanObj = {
    1:'I', 2:'II', 3:'III', 4:'IV', 5:'V', 6:'VI', 7:'VII',8:'VIII', 9:'IX', 
    10:'X', 20:'XX', 30:'XXX', 40:'XL', 50:'L', 60:'LX', 70:'LXX', 80:'LXXX', 90:'XC',
    100:'C', 200:'CC', 300:'CCC', 400:'CD', 500:'D', 600:'DC', 700:'DCC', 800:'DCCC',
    900:'CM', 1000: 'M', 2000:'MM', 3000:'MMM'
  }
  // convert num into string
  const numString = num.toString()
  // loop over that string
  for (let i = 0; i < numString.length; i++) {
    // for each number mutliply it by 10 ** index(backwards)
    let numberPlace = 10 ** (numString.length-1 - i )
    // multiply actual number to its numberPlace
    let number = numString[i] * numberPlace
    // if that number is in romanObj add it to romanNum
    if (romanObj[number]) {
      romanNum += romanObj[number]
    }
  }
    return romanNum
}

convertToRoman(36);
