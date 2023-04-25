class SmallestInfiniteSet:

    def __init__(self):
        self.removed = set()
        self.num = 1

    def popSmallest(self) -> int:
        while self.num in self.removed:
            self.num += 1
        self.removed.add(self.num)
        return self.num

    def addBack(self, num: int) -> None:
        if num in self.removed:
            self.removed.remove(num)
            self.num = 1


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)