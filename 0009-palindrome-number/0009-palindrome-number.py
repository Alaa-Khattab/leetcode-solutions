class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        if 0 <= x <= 9:
            return True
        num_as_list = str(x)
        num_len = len(num_as_list)
        i = 0
        j = num_len - 1
        for k in num_as_list:
            if i >= j:
                return True
            if int(num_as_list[i]) != int(num_as_list[j]):
                return False
            i+=1
            j-=1
                
        