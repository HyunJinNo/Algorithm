#include <iostream>
#include <string>

using namespace std;

int main() {
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    int n, num;
    int count[10001] = { 0 };
    
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> num;
        count[num]++;
    }
    
    for (int i = 1; i <= 10000; i++) {
        while (count[i] > 0) {
            cout << i << '\n';
            count[i]--;
        }
    }
}