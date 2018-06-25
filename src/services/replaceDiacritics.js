const replaceDiacritics = (str) => {
  const diacritics = [
    { char: 'A', base: /[\300-\306]/g },
    { char: 'a', base: /[\340-\346]/g },
    { char: 'E', base: /[\310-\313]/g },
    { char: 'e', base: /[\350-\353]/g },
    { char: 'I', base: /[\314-\317]/g },
    { char: 'i', base: /[\354-\357]/g },
    { char: 'O', base: /[\322-\330]/g },
    { char: 'o', base: /[\362-\370]/g },
    { char: 'U', base: /[\331-\334]/g },
    { char: 'u', base: /[\371-\374]/g },
    { char: 'N', base: /[\321]/g },
    { char: 'n', base: /[\361]/g },
    { char: 'C', base: /[\307]/g },
    { char: 'c', base: /[\347]/g },
  ];
  let strReplace = str;
  diacritics.map((letter) => {
    strReplace = strReplace.replace(letter.base, letter.char);
    return strReplace;
  });

  return strReplace;
};

export default replaceDiacritics;
