class Solution:
    def average(self, salary: List[int]) -> float:
        min_salary = math.inf
        max_salary = -math.inf
        sum_sal = 0
        for sal in salary:
            sum_sal += sal
            min_salary = min(min_salary, sal)
            max_salary = max(max_salary, sal)
        return (sum_sal - min_salary - max_salary) / (len(salary) - 2)