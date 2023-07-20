function isPalindrome(s) {
  let d = [];
  d = s.split("").reverse().join("");
  let flag = false;
  for (i = 0; i < s.length; i++) {
    if (d[i] == s[i]) {
      flag = true;
    } else return false;
  }
  return flag;
}
console.log(isPalindrome("rotor"));
