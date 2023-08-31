class Solution:
    def romanToInt(self, s: str) -> int:
        keys = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        total = 0
        as_list = list(s)
        while len(as_list ) > 0:
            
            if len(as_list) == 1:
                total += keys[as_list[0]]
                break;
            else:
                print('----', len(as_list))
                if keys[as_list[0]] >= keys[as_list[1]]:
                    total += keys[as_list[0]]
                    as_list.pop(0)
                else:
                    total = total +   (keys[as_list[1]] - keys[as_list[0]])
                    as_list.pop(0)
                    as_list.pop(0)
                    
                    
            
        
        
        return total
        