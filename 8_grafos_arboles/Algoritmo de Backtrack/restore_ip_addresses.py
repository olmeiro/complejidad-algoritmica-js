class Solution(object):
    def valid(self, s):
        if len(s)==0:
            return False #empty string
        if len(s)>1 and s[0]=='0': #if length>1, then s[0] must be not 0, could be 0 only when length==1
            return False
        return int(s)>=0 and int(s)<=255 #int(s) converts string s to integer type
    
    def restoreIpAddresses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """
        solutions = [] #solutions is the output vector
        self.restoreIp(s, solutions, 0, "", 0) #idx is the index of the string s, restored is the string that is being restored, count is the number of dots
        return solutions
    
    def restoreIp(self, ip, solutions, idx, restored, count):
        if count > 4:
            return #count > 4 means there are more than 4 dots, which is not valid
        if count == 4 and idx == len(ip):
            solutions.append(restored)#count == 4 && idx == ip.length() means there are 4 dots and the index is at the end of the string, which is valid
        for i in range(1,4): #i <= 3 digits to form a number between 0-255
            if idx+i > len(ip): 
                break #out of bound 0-255
            s = ip[idx:idx+i] #s = ip.substring(idx, idx+i); diff between java and python
            if not self.valid(s):
                continue #if not valid, continue
            self.restoreIp(ip, solutions, idx+i, restored+s+('.' if count==3 else ''), count+1) #count==3?"" : "." means if count==3, then no need to add "." to the end of the string
    
    #implementation:
    # Path: 8_grafos_arboles\Algoritmo de Backtrack\restore_ip_addresses.cpp
    
    # /* This is an example for calling this function: */
    # string s = "25525511135";

def main():
    s = "25525511135"
    solucion = Solution()
    listaPalabras = solucion.restoreIpAddresses(s)
    print(listaPalabras)  

if __name__ == "__main__":
    main()