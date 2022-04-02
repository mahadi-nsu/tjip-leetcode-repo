/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let counter = 1;
    let winner = nums[0];
    
    for(let i = 1 ; i < nums.length ; i++){
        if(counter == 0){
            counter++;
            winner = nums[i] ;
        }
        else if(nums[i] == winner){
            counter++;
        }else counter--;
    }
    
    return winner;
};
