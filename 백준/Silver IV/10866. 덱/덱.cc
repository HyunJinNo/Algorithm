#include <iostream>
#include <string>
#include <deque>

using namespace std;

int main() 
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n, num;
    string command;
    deque<int> deque;

    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> command;
        if (command.compare("push_front") == 0)
        {
            cin >> num;
            deque.push_front(num);
        }
        else if (command.compare("push_back") == 0)
        {
            cin >> num;
            deque.push_back(num);
        }
        else if (command.compare("pop_front") == 0)
        {
            if (deque.empty())
            {
                cout << -1 << '\n';
            }
            else
            {
                cout << deque.front() << '\n';
                deque.pop_front();
            }
        }
        else if (command.compare("pop_back") == 0)
        {
            if (deque.empty())
            {
                cout << -1 << '\n';
            }
            else
            {
                cout << deque.back() << '\n';
                deque.pop_back();
            }
        }
        else if (command.compare("size") == 0)
        {
            cout << deque.size() << '\n';
        }
        else if (command.compare("empty") == 0)
        {
            cout << (deque.empty() ? 1 : 0) << '\n';
        }
        else if (command.compare("front") == 0)
        {
            cout << (deque.empty() ? -1 : deque.front()) << '\n';
        }
        else if (command.compare("back") == 0)
        {
            cout << (deque.empty() ? -1 : deque.back()) << '\n';
        }
    }
}