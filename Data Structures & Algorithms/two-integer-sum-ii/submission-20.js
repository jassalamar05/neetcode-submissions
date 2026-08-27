class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left=0;
        let right=numbers.length-1;
        console.log(right)
        let arr=[]

        while(left<right){
            let Sum=numbers[left] + numbers[right]
            if(Sum=== target){
                arr.push(left+1, right+1)
                left++;
                right--;   
            }
            else if(Sum> target){
                right--
            }else if(Sum< target){
                left++
            }
        }   return arr
    }  
}
