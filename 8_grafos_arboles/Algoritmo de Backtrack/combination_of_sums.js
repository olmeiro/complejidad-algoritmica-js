function combinationSum(candidates, target) {
    function dfs(remaining, stack, result) {
        if (!remaining) {
            result.push(stack);
            return;
        }
        for (const number of candidates) {
            if (number > remaining) {
                return;
            }
            if (!stack.length || stack[stack.length - 1] <= number) {
                dfs(remaining - number, stack.concat([number]), result);
            }
        }
    }
    const result = [];
    candidates.sort();
    dfs(target, [], result);
    return result;
}

/* This is an example for calling this function: */
const exercise = combinationSum([2, 3, 6, 7], 7);
console.log(exercise); //[[2, 2, 3], [7]]