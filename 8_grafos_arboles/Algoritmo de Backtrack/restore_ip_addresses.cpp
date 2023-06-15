//Restore IP Addresses problem: Given a string containing only digits, restore it by returning all possible valid IP address combinations.
class Solution {
public:
    bool valid(string s){
        if(s.length()==0) return false; //empty string
        if(s.length()>1 && s[0]=='0'){ //if length>1, then s[0] must be not 0, could be 0 only when length==1
            return false;
        }
        return stoi(s)>=0 && stoi(s)<=255; //stoi: string to int. method stoi() returns the string converted to int type. If the string contains any invalid characters, stoi throws an exception invalid_argument.
    }
    
    vector<string> restoreIpAddresses(string s) { //s is the input string
        vector<string> solutions; //solutions is the output vector
        restoreIp(s, solutions, 0, "", 0); //idx is the index of the string s, restored is the string that is being restored, count is the number of dots
        return solutions;
    }

    void restoreIp(string ip, vector<string>& solutions, int idx, const string& restored, int count) {
    if (count > 4) return; //count > 4 means there are more than 4 dots, which is not valid
    if (count == 4 && idx == ip.length()) solutions.push_back(restored);//count == 4 && idx == ip.length() means there are 4 dots and the index is at the end of the string, which is valid
        for (int i=1; i<4; i++) { //i <= 3 digits to form a number between 0-255
            if (idx+i > ip.length()) break; //out of bound 0-255
            string s = ip.substr(idx,i);//diff between java and c++ 
            if (!valid(s)) continue; //if not valid, continue
            restoreIp(ip, solutions, idx+i, restored+s+(count==3?"" : "."), count+1); //count==3?"" : "." means if count==3, then no need to add "." to the end of the string
        }
    }
};

//implementation:
// Path: 8_grafos_arboles\Algoritmo de Backtrack\restore_ip_addresses.cpp

/* This is an example for calling this function: */
string s = "25525511135";
vector<string> result = restoreIpAddresses(s);
for(int i=0; i<result.size(); i++){
    cout<<result[i]<<endl;
}