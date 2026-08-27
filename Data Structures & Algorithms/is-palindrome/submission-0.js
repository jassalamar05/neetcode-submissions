class Solution {
    isPalindrome(s) {
        let left = 0;
        let result = "";

        for(let ch of s){
            if(
                (ch >= "a" && ch <= "z") ||
                (ch >= "A" && ch <= "Z") ||
                (ch >= "0" && ch <= "9")
            ){
                result += ch.toLowerCase();
            }
        }

        let right = result.length - 1;

        while(left < right){
            if(result[left] !== result[right]){
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}