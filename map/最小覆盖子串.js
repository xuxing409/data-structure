/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  let l = 0;
  let r = 0
  const need = new Map()
  for(let c of t){
      need.set(c,need.has(c) ? need.get(c) + 1 : 1)
  }
   let needType = need.size
   let str = ''
  while(r < s.length){
      const c = s[r]
      if(need.has(c)){ 
          need.set(c, need.get(c) - 1)
          if(need.get(c) === 0) needType--
      }
      while(needType === 0){
          const newStr = s.substring(l,r+1)
          
          str = (!str || newStr.length < str.length ) ?  newStr : str
          const c2 = s[l]
          if(need.has(c2)){
              need.set(c2, need.get(c2) + 1)
              if(need.get(c2) === 1){
                  needType++
              }
          }
          l++;

      }
      r++
  }
  return str
};
