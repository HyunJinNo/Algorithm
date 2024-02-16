#include <iostream>
#include <deque>

using namespace std;

int main() 
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n, num, command;
    deque<int> deque;

    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> command;
        switch (command) {
            case 1:
                cin >> num;
                deque.push_front(num);
                break;
            case 2:
                cin >> num;
                deque.push_back(num);
                break;
            case 3:
                if (deque.empty())
                {
                    cout << -1 << '\n';
                }
                else
                {
                    cout << deque.front() << '\n';
                    deque.pop_front();
                }
                break;
            case 4:
                if (deque.empty())
                {
                    cout << -1 << '\n';
                }
                else
                {
                    cout << deque.back() << '\n';
                    deque.pop_back();
                }
                break;
            case 5:
                cout << deque.size() << '\n';
                break;
            case 6:
                cout << (deque.empty() ? 1 : 0) << '\n';
                break;
            case 7:
                cout << (deque.empty() ? -1 : deque.front()) << '\n';
                break;
            case 8:
                cout << (deque.empty() ? -1 : deque.back()) << '\n';
                break;
            default:
                break;
        }
    }
}