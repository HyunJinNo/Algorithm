#include <iostream>
#include <stack>

using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    int n, command, x;
    stack<int> stack;
    
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> command;
        switch (command)
        {
            case 1:
                cin >> x;
                stack.push(x);
                break;
            case 2:
                if (stack.empty())
                {
                    cout << -1 << '\n';
                }
                else
                {
                    cout << stack.top() << '\n';
                    stack.pop();
                }
                break;
            case 3:
                cout << stack.size() << '\n';
                break;
            case 4:
                if (stack.empty())
                {
                    cout << 1 << '\n';
                }
                else 
                {
                    cout << 0 << '\n';
                }
                break;
            case 5:
                if (stack.empty())
                {
                    cout << -1 << '\n';
                }
                else 
                {
                    cout << stack.top() << '\n';
                }
                break;
            default:
                break;
        }
    }
}