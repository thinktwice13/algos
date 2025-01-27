# Python for Algorithm Practice - Quick Reference

# 1. String Operations
# Strings are immutable in Python
text = "hello"
length = len(text)                  # String length
char = text[0]                      # Access character (zero-based)
substring = text[1:3]              # Slice (start:end), end exclusive
reversed_str = text[::-1]          # Reverse string
joined = " ".join(["a", "b"])      # Join strings with separator

# String methods
lower_case = text.lower()          # Convert to lowercase
upper_case = text.upper()          # Convert to uppercase
stripped = text.strip()            # Remove whitespace from both ends
replaced = text.replace("l", "x")  # Replace all occurrences
split_words = text.split(" ")      # Split into list by delimiter

# Check string properties
is_alpha = text.isalpha()          # Check if all chars are letters
is_alnum = text.isalnum()          # Check if chars are letters/numbers
is_digit = text.isdigit()          # Check if all chars are digits
contains = "he" in text            # Check if contains substring

# 2. List (Array) Operations
arr = [1, 2, 3, 4, 5]
length = len(arr)                  # List length
element = arr[0]                   # Access element (zero-based)
last = arr[-1]                     # Access last element
slice = arr[1:3]                   # Slice (start:end), end exclusive
reversed_list = arr[::-1]          # Reverse list  (:: is the same as 0:len(arr), so ::-1 is the same as 0:len(arr):-1)

# List modification
arr.append(6)                      # Add to end
arr.insert(0, 0)  # Insert at index
arr.pop()                          # Remove and return last element
arr.pop(0)                         # Remove and return element at index
arr.remove(3)                      # Remove first occurrence of value
del arr[1:3]                       # Delete slice

# List operations
sorted_arr = sorted(arr)           # Return new sorted list
arr.sort()                         # Sort list in place
arr.reverse()                      # Reverse list in place
max_val = max(arr)                 # Find maximum value
min_val = min(arr)                 # Find minimum value
found_idx = arr.index(3)          # Find index of first occurrence

# List comprehension (powerful for transformations)
squares = [x*x for x in arr]                    # Map
evens = [x for x in arr if x % 2 == 0]         # Filter
matrix = [[0] * 3 for _ in range(3)]           # 2D array initialization

# 3. Dictionary (Hash Map) Operations
dict = {"a": 1, "b": 2}
value = dict["a"]                 # Access value (raises KeyError if not found)
value = dict.get("a", 0)         # Access with default value if not found
dict["c"] = 3                    # Add or update key-value pair
del dict["a"]                    # Remove key-value pair
exists = "a" in dict             # Check if key exists

# Dictionary methods
keys = list(dict.keys())         # Get list of keys
values = list(dict.values())     # Get list of values
items = list(dict.items())       # Get list of key-value pairs

# 4. Set Operations
set1 = {1, 2, 3}                # Create set from values
set2 = set([1, 2, 3])           # Create set from list
set1.add(4)                      # Add element
set1.remove(4)                   # Remove element (raises KeyError if not found)
set1.discard(4)                 # Remove element (no error if not found)
exists = 1 in set1              # Check if element exists

# Set operations
union = set1 | set2             # Union
intersect = set1 & set2         # Intersection
diff = set1 - set2              # Difference
is_subset = set1 <= set2        # Check if subset

# 5. Common Patterns for Algorithm Problems

# Count character frequency
from collections import Counter
char_count = Counter("hello")    # Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})
word_count = Counter(["a", "b", "a"])  # Counter({'a': 2, 'b': 1})

# Queue operations (double-ended queue)
from collections import deque
queue = deque([1, 2, 3])
queue.append(4)                  # Add to right
queue.appendleft(0)              # Add to left
queue.pop()                      # Remove and return from right
queue.popleft()                  # Remove and return from left

# Default dictionary (automatic default values)
from collections import defaultdict
d = defaultdict(int)             # Default value 0 for new keys
d = defaultdict(list)            # Default value [] for new keys
d = defaultdict(set)             # Default value set() for new keys

# Priority Queue (Min Heap)
import heapq
heap = []
heapq.heappush(heap, 1)         # Add element
min_val = heapq.heappop(heap)   # Remove and return smallest element
heapq.heapify(arr)              # Convert list to heap in-place

# 6. Dynamic Programming Patterns

# Initialize DP array
n = 10
dp = [0] * n                     # 1D array with zeros
dp = [[0] * n for _ in range(m)] # 2D array with zeros

# Common DP pattern
def fibonacci(n):
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Memoization pattern
def memoized_fib(n, memo=None):
    if memo is None:
        memo = {}
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = memoized_fib(n-1, memo) + memoized_fib(n-2, memo)
    return memo[n]

# 7. Common Iteration Patterns

# Enumerate for index and value
for i, val in enumerate(arr):
    print(f"Index {i}: {val}")

# Zip for parallel iteration
for a, b in zip(arr1, arr2):
    print(f"a: {a}, b: {b}")

# Range with step
for i in range(0, 10, 2):    # Start, stop, step
    print(i)                 # Prints 0, 2, 4, 6, 8

# 8. Testing and Debugging

# Simple assertion
assert len(arr) > 0, "Array should not be empty"

# Print debugging
print(f"Debug: value = {value}")  # f-strings for formatting

# Time complexity reference:
# len(): O(1)
# in for list/array: O(n)
# in for set/dict: O(1)
# list.sort(): O(n log n)
# heapq operations: O(log n)
