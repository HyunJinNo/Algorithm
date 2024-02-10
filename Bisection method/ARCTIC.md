# ARCTIC

### Source Code
```Java
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 기지의 수, 1 ~ 100
    public static double[][] pos;
    public static double[][] distance;
    
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int T = sc.nextInt(); T > 0; T--) {
            n = sc.nextInt();
            pos = new double[n][2];
            for (int i = 0; i < n; i++) {
                pos[i][0] = sc.nextDouble();
                pos[i][1] = sc.nextDouble();
            }
            
            distance = new double[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j <= i; j++) {
                    if (i == j) {
                        distance[i][j] = Double.MAX_VALUE;
                    } else {
                        distance[i][j] = Math.sqrt(Math.pow(pos[i][0] - pos[j][0], 2) + Math.pow(pos[i][1] - pos[j][1], 2));
                        distance[j][i] = distance[i][j];
                    }
                }
            }

            System.out.printf("%.2f\n",optimize());
        }
    }

    /**
     * 거리가 d 이하인 기지들만을 연결했을 때 모든 기지가 연결되는지 여부를 반환한다.
     * @return 모든 기지가 연결되는지 여부
     */
    public static boolean decision(double d) {
        int count = 0;
        boolean[] visited = new boolean[n];
        visited[0] = true;
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.offer(0);

        while (!queue.isEmpty()) {
            int here = queue.poll();
            count++;
            for (int there = 0; there < n; there++) {
                if (!visited[there] && distance[here][there] <= d) {
                    queue.offer(there);
                    visited[there] = true;
                }
            }
        }

        return (count == n);
    }

    /**
     * 모든 기지를 연결할 수 있는 최소의 d를 반환한다.
     * @return 최소의 d
     */
    public static double optimize() {
        double lo = 0.0;
        double hi = 1416.0;

        for (int i = 0; i < 100; i++) {
            double mid = (lo + hi) / 2.0;
            if (decision(mid)) {
                hi = mid;
            } else {
                lo = mid;
            }
        }

        return hi;
    }
}
```
