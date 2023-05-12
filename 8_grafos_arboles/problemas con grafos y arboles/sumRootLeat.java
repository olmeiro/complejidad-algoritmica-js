class Solution {
    static int total;
    public int sumNumbers(TreeNode root) {
        total = 0;
        dfs(root, 0);
        return total;
    }
    static void dfs(TreeNode root, int parent) {
        int value = (parent * 10) + root.val;
        if(root.left == null && root.right == null){
            total += value;
            return;
        }

        if(root.left != null) {
            dfs(root.left, value);
        }

        if(root.left != null) {
            dfs(root.right, value);
        }
        
        return;

    }
}