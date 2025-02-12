function maximumGap(nums) {
    if (nums.length < 2) return 0;

    function radixSort(arr) {
        let maxNum = Math.max(...arr);
        let exp = 1;
        let n = arr.length;
        let output = new Array(n);

        while (maxNum / exp >= 1) {
            let count = new Array(10).fill(0);


            for (let i = 0; i < n; i++) {
                count[Math.floor(arr[i] / exp) % 10]++;
            }


            for (let i = 1; i < 10; i++) {
                count[i] += count[i - 1];
            }

            for (let i = n - 1; i >= 0; i--) {
                let digit = Math.floor(arr[i] / exp) % 10;
                output[count[digit] - 1] = arr[i];
                count[digit]--;
            }

            for (let i = 0; i < n; i++) {
                arr[i] = output[i];
            }

            exp *= 10;
        }
    }

    radixSort(nums);


    let maxGap = 0;
    for (let i = 1; i < nums.length; i++) {
        maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
    }

    return maxGap;
}

//output
console.log('Task 2: Maximum Gap of Sorted Array');
console.log(maximumGap([3, 6, 9, 1])); 
console.log(maximumGap([10])); 
console.log(maximumGap([1, 10000000]));

