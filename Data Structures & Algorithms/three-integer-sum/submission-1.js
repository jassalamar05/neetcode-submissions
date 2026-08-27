class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let Sum=0;
        let n=[];

        nums.sort((a,b)=>a-b)

        for(let i=0;i<nums.length-2;i++){
        //  most imp jo skip hpo gyi isio

        if(i>0 && nums[i] === nums[i-1]) continue
           let left=i+1;
           let right=nums.length-1;

           while(left<right){
            Sum=nums[i] + nums[left] +nums[right]

            if(Sum === 0){
                n.push([nums[i] , nums[left] ,nums[right]])
                left++
                right--

            while(left<right  && nums[left] === nums[left-1]) left++ 
            while(left<right && nums[right] === nums[right+1]) right--
            }else if(Sum<0){
                left++
            }else{
                right --
            }
           }
        } return n
    }
}
