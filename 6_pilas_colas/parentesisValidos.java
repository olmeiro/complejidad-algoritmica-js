import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == ')') {
                if (stack.empty()) {
                    return false;
                }
                stack.pop();
            } else if (c == '(') {
                stack.push('(');
            }
        }
        return stack.empty();
    }
}