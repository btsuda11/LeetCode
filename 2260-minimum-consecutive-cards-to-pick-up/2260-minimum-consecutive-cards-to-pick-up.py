class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        seen = set()
        minimum = len(cards) + 1
        left, right = 0, 0
        while right < len(cards):
            if cards[right] not in seen:
                seen.add(cards[right])
            else:
                minimum = min(minimum, right - left + 1)
                while cards[left] != cards[right]:
                    seen.remove(cards[left])
                    left += 1
                minimum = min(minimum, right - left + 1)
                left += 1
            right += 1
        if minimum == len(cards) + 1:
            return -1
        else:
            return minimum   
        
# keep track of cards seen in a set
# keep track of minimum amount of cards
# use sliding window
# if card is not in set, add it
# if it is, increment left until you hit the char that is equal to the right
# update your minimum variable
