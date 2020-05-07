function telephoneCheck(str) {
  str = str.replace(/\s/g,'');
  console.log(str)
  let patterntype1 = /^\d{3}-\d{3}-\d{4}$/;
  let patterntype2 = /^\(\d{3}\)\d{3}-\d{4}$/;
  let patterntype3 = /^\d{10}$/;
  let patterntype4 = /^1\d{10}$/;
  let patterntype5 = /^1\(\d{3}\)\d{3}-\d{4}$/;
  let patterntype6 = /^1\d{3}-\d{3}-\d{4}$/;

  if (patterntype1.test(str)) {
    return true
  }

  if (patterntype2.test(str)) {
    return true
  }

  if (patterntype3.test(str)) {
    return true
  }

  if (patterntype4.test(str)) {
    return true
  }

  if (patterntype5.test(str)) {
    return true
  }

  if (patterntype6.test(str)) {
    return true
  }

  return false;
}

telephoneCheck("555-555-5555");
