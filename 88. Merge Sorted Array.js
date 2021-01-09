/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//nums1 有效数字中 从后往前读 与nums2从后往前相比较 大的数放在nums1从后往前放

var merge = function(nums1, m, nums2, n) {

    const len = nums1.length;
    var p1 = m - 1     //two pointers one for each nums
    var p2 = n - 1
    
    for(i= nums1.length - 1; i>=0; i--){
        if(p2 < 0){
            break
        }
        if(nums1[p1]>nums2[p2]){          //p1 bigger
            nums1[i] = nums1[p1]
            p1 --
        }else{
            nums1[i] = nums2[p2]
            p2 --
        }  
    }

};
