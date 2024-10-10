function copyObject(obj) {
   return JSON.parse(JSON.stringify(original));
}

checkStr = (str) => {
   let mas = {
      '(': ')',
      '[': ']',
      '{': '}'
   };
   let checkMas = [];
   let prov = true;
   for (let i = 0; i < str.length; i++) {
      if (prov) {
         let char = str[i];
         if (Object.keys(mas).indexOf(char) != -1) {
            checkMas.push(mas[char]);
         }
         else {
            mas[i] == checkMas[0] ? checkMas.splice(0, 1) : prov = false;
         }
      }
      return prov;
   }
}

checkStr = (str) => {
   let mas = {
      '(': ')',
      '[': ']',
      '{': '}'
   };
   let checkMas = [];
   for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (mas[char]) {
         checkMas.push(mas[char]);
      }
      else if (checkMas.pop() !== char) {
         return false;
      }
   }
   return true;
}
