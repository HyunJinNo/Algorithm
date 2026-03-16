import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine()); // 테스트 케이스의 개수, 1 <= T <= 10
        StringBuilder sb = new StringBuilder();

        for (int iter = 0; iter < T; iter++) {
            String[] temp = br.readLine().split(" ");
            int N = Integer.parseInt(temp[0]); // 장난감의 수, 3 <= N <= 300_000
            int M = Integer.parseInt(temp[1]); // 동맹이 될 수 없는 장난감 쌍의 수, 1 <= M <= 300_000

            int[] graph = new int[N + 1];
            Arrays.fill(graph, -1);

            ArrayList<Integer>[] edges = new ArrayList[N + 1];

            for (int i = 1; i <= N; i++) {
                edges[i] = new ArrayList<Integer>();
            }

            for (int iter2 = 0; iter2 < M; iter2++) {
                temp = br.readLine().split(" ");
                int x = Integer.parseInt(temp[0]);
                int y = Integer.parseInt(temp[1]);
                edges[x].add(y);
                edges[y].add(x);
            }

            Stack<Integer> stack = new Stack<Integer>();
            boolean result = true;

            loop:
            for (int i = 1; i <= N; i++) {
                if (graph[i] == -1) {
                    stack.push(i);
                    graph[i] = 0;
                }

                while (!stack.empty()) {
                    int node = stack.pop();

                    for (int nextNode : edges[node]) {
                        if (graph[nextNode] == -1) {
                            graph[nextNode] = (graph[node] == 0 ? 1 : 0);
                            stack.push(nextNode);
                        } else if (graph[nextNode] == graph[node]) {
                            result = false;
                            break loop;
                        }
                    }
                }
            }

            sb.append(result ? "YES\n" : "NO\n");
        }

        System.out.print(sb.toString().trim());
        br.close();
    }
}