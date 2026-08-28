class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let arr=nums.map((value,index)=>{
            return [value,index]
        })

        arr=arr.sort((a,b)=> a[0] - b[0])

        let left=0;
        let right=arr.length-1;

        while(left<right){
           let  Sum=arr[left][0] + arr[right][0]

            if(Sum === target){
                return [arr[left][1] , arr[right][1]]

            }else if(Sum<target){
                left++
            }else{
                right--
            }
        } 
        return []
    }

}
