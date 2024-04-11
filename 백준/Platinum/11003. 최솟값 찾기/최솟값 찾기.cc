#include <iostream>
#include <queue>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    int n, l, x;
    cin >> n;
    cin >> l;
    
    for (int i = 0; i < n; i++) {
        cin >> x;
        pq.push({ x, i });
        while (pq.top().second <= i - l) {
            pq.pop();
        }
        cout << pq.top().first << " ";
    }
}