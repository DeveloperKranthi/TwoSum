let twoSum = function (nums, target) {
  const previousValues = {};
  console.log(previousValues);
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    console.log(currentValue);
    const neededValue = target - currentValue;
    console.log(neededValue);
    const index2 = previousValues[neededValue];
    console.log(index2);

    if (index2 != null) {
      console.log([index2, i]);
      return [index2, i];
    } else {
      previousValues[currentValue] = i;
      console.log(previousValues[currentValue]);
    }
  }
};
twoSum([11, 13, 7, 2], 9);
