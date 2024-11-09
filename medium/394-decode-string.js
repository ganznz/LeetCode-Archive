/*

possible non-iterative algo

- loop through every char of string
- if number: while s[i] not number do numTemp += tostring(s[i])
-- -- numberStack.push(number)
- if [: bracketStack.push("[")
- if letter: stringStack.push(stringSequence)
- if ]:
-- bracketStack.pop()
-- if bracketStack is empty, finalStr += numberStack.pop() * stringStack.pop()
-- if bracketStack not empty, stringTemp = numberStack.pop() * stringStack.pop() + stringTemp

*/

const decodeString = s => {}

decodeString("3[a]2[bc]"); // "aaabcbc"
decodeString("4[x]"); // "xxxx"
decodeString("5[z]"); // "zzzzz"

decodeString("3[a2[b]]"); // "abbabbabb"
decodeString("2[ab3[c]]"); // "abcccabccc"
decodeString("2[2[x]y]"); // "xxyxxy"

decodeString("2[a2[b3[c]]]"); // "abcccbcccabcccbccc"
decodeString("3[a2[b3[c2[d]]]]"); // "abcdcdcdcdcdabcdcdcdcdcdabcdcdcdcdcd"

decodeString("2[a3[b]1[c]]"); // "abbcbabbcb"
decodeString("2[x2[y3[z]]]"); // "xyzzzyzzzyzxyzzzyzzzyz"


decodeString("3[a2[c]]"); // "accaccacc"
decodeString("2[abc]3[cd]ef"); // "abcabccdcdcdef"