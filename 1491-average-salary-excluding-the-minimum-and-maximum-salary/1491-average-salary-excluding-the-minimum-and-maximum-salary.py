class Solution:
    def average(self, salary: List[int]) -> float:
        min_salary = min(salary)
        max_salary = max(salary)
        average, count = 0, 0
        for sal in salary:
            if sal != min_salary and sal != max_salary:
                average += sal
                count += 1
        return average / count