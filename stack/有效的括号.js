/** 测试用例
"()"
"()[]{}"
"(]"
"([)]"
"{[]}"
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if(s.length % 2 === 1){
      return false
  }
  const stack = []
  for(let i = 0; i< s.length; i++){
      const c = s[i]
      if(c === '(' || c==='[' || c==='{'){
          stack.push(c)
      }
      else{
          const n = stack[stack.length - 1]
          if(c=== ')' && n === '(' || c==='}' && n === '{' ||  c===']' && n === '['){
              stack.pop()
          }else{
              return false
          }
      }
  }
  return stack.length === 0
};
