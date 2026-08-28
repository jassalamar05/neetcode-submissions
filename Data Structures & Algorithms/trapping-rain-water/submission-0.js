class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left=0;
        let right=height.length-1;
        let Sum=0

        let leftMax=0;
        let rightMax=0;

        while(left<right){
            if(height[left] < height[right]){
                if(height[left] > leftMax){
                    leftMax=height[left]
                    height[left]=leftMax
                }else{
                    Sum+= leftMax - height[left]
                }
                   left++;
        }
         

             else {
                height[right] >= height[left]
                    if(height[right] > rightMax){
                        rightMax = height[right]
                        height[right] = rightMax
                    }else{
                        Sum+=rightMax - height[right]
                    }
                  right--
                }
            }return Sum
        }
    }

