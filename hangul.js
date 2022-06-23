function getConstantVowel(kor) {
    const f = [
      'ㄱ', 'ㄱㄱ', 'ㄴ', 'ㄷ', 'ㄷㄷ', 'ㄹ', 'ㅁ',
      'ㅂ', 'ㅂㅂ', 'ㅅ', 'ㅅㅅ', 'ㅇ', 'ㅈ', 'ㅈㅈ',
      'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];
    const s = [
      'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
      'ㅖ', 'ㅗ', 'ㅗㅏ', 'ㅗㅐ', 'ㅗㅣ', 'ㅛ', 'ㅜ',
      'ㅜㅓ', 'ㅜㅔ', 'ㅜㅣ', 'ㅠ', 'ㅡ', 'ㅡㅣ', 'ㅣ'
    ];
    const t = [
      '', 'ㄱ', 'ㄱㄱ', 'ㄱㅅ', 'ㄴ', 'ㄴㅈ', 'ㄴㅎ',
      'ㄷ', 'ㄹ', 'ㄹㄱ', 'ㄹㅁ', 'ㄹㅂ', 'ㄹㅅ', 'ㄹㅌ',
      'ㄹㅍ', 'ㄹㅎ', 'ㅁ', 'ㅂ', 'ㅂㅅ', 'ㅅ', 'ㅅㅅ',
      'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];
    let uni = kor.charCodeAt(0);
    if(uni >= 44032 && uni <= 55203) {
      uni = uni - 44032;

      let fn = parseInt(uni / 588);
      let sn = parseInt((uni - (fn * 588)) / 28);
      let tn = parseInt(uni % 28);
      return f[fn]+s[sn]+t[tn];
    } else {
      if(kor == "ㄲ") return "ㄱㄱ";
      if(kor == "ㄳ") return "ㄱㅅ";
      if(kor == "ㄵ") return "ㄴㅈ";
      if(kor == "ㄶ") return "ㄴㅎ";
      if(kor == "ㄸ") return "ㄷㄷ";
      if(kor == "ㄶ") return "ㄴㅎ";
      if(kor == "ㄺ") return "ㄹㄱ";
      if(kor == "ㄻ") return "ㄹㅁ";
      if(kor == "ㅃ") return "ㅂㅂ";
      if(kor == "ㅄ") return "ㅂㅅ";
      if(kor == "ㅆ") return "ㅅㅅ";
      if(kor == "ㅉ") return "ㅈㅈ";
      if(kor == "ㅘ") return "ㅗㅏ";
      if(kor == "ㅙ") return "ㅗㅐ";
      if(kor == "ㅚ") return "ㅗㅣ";
      if(kor == "ㅝ") return "ㅜㅓ";
      if(kor == "ㅞ") return "ㅜㅔ";
      if(kor == "ㅟ") return "ㅜㅣ";
      if(kor == "ㅢ") return "ㅡㅣ";
      return kor;
    }
}
