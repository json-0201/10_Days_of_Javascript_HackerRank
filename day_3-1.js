/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    for (let i=0; i<nums.length-1; i++)
    {
        for (let j=0; j<nums.length; j++)
        {
            if (nums[j] > nums[j+1])
            {
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    let new_nums = [...new Set(nums.reverse())]

    return new_nums[1]

}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
