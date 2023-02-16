module.exports = function check(str, bracketsConfig) {
    let brackets=bracketsConfig.flat().join('')
    let stack = [];
for (let i=0;i<str.length;i++) {
        let bracketsIndex = brackets.indexOf(str[i])         
        if (bracketsIndex % 2 === 0) {               
            if (str[i] === brackets[bracketsIndex + 1] && stack[stack.length - 1] === bracketsIndex){                  
                stack.pop();
            } else if (str[i] === brackets[bracketsIndex + 1] && stack[stack.length - 1] !== bracketsIndex) {
                stack.push(bracketsIndex)
            }
            else{
                stack.push(bracketsIndex)
            }
        } 
        else {
            if (stack.pop() !== bracketsIndex-1){
                return false;
            }
        }           
    }
    return stack.length === 0
}
