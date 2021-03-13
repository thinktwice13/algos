#include <set>

int solution(vector<int> &A) {
  // write your code in C++14 (g++ 6.2.0)
  int N = A.size();

  vector<int> fib;
  fib.push_back(1);
  fib.push_back(1);
  while (fib[fib.size()-1] <= N+1) fib.push_back(fib[fib.size()-1]+fib[fib.size()-2]);

  set<int> positions;
  positions.insert(N);
  for (int j = 1; ; j++) {
    set<int> indexes;
    for (int i: positions) {
      for (int f: fib) {
        int p = i-f;
        if (p == -1) return j;
        if (p < 0) break;
        if (A[p]) indexes.insert(p); 
      }
    }
    if (indexes.size() == 0) return -1;
    positions = indexes;
  }
  return -1;
}