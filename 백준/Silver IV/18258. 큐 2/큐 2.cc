#include <iostream>
#include <string>
#include <queue>

using namespace std;

int main() 
{
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n, num;
    string command;
    queue<int> queue;
    cin >> n;
    
    for (int i = 0; i < n; i++) 
    {
        cin >> command;
        if (command.compare("push") == 0) 
        {
            cin >> num;
            queue.push(num);
        }
        else if (command.compare("pop") == 0)
        {
            if (queue.empty())
            {
                cout << -1 << '\n';
            }
            else
            {
                cout << queue.front() << '\n';
                queue.pop();
            }
        }
        else if (command.compare("size") == 0) 
        {
            cout << queue.size() << '\n';
        }
        else if (command.compare("empty") == 0)
        {
            if (queue.empty()) 
            {
                cout << 1 << '\n';
            }
            else
            {
                cout << 0 << '\n';
            }
        }
        else if (command.compare("front") == 0)
        {
            if (queue.empty())
            {
                cout << -1 << '\n';
            }
            else
            {
                cout << queue.front() << '\n';
            }
        }
        else if (command.compare("back") == 0)
        {
            if (queue.empty())
            {
                cout << -1 << '\n';
            }
            else
            {
                cout << queue.back() << '\n';
            }
        }
    }
}