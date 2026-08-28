class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;
        
        let MaxArea=0;
        while(left<right){
            let MIN=Math.min(heights[left] , heights[right])
                let width=right-left
                let Area=MIN*width;
                MaxArea=Math.max(MaxArea,Area)
            if(heights[left] < heights[right]){
                left++
            }else {
                right--
            }
        }
        return MaxArea
    }
}
