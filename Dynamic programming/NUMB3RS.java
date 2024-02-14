import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static double[][][] visited;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();  // 마을의 수, 2 <= n <= 50
            int d = sc.nextInt();  // 탈출 후 지금까지 지난 일수, 1 <= d <= 100
            int p = sc.nextInt();  // 교도소가 있는 마을, 0 <= p < n
            int[][] path = new int[n][n];
            for (int row = 0; row < n; row++) {
                for (int col = 0; col < n; col++) {
                    path[row][col] = sc.nextInt();
                }
            }

            visited = new double[n][d + 1][];

            int t = sc.nextInt();  // 확률을 계산할 마을의 수, 0 <= t < n
            int[] towns = new int[t];
            for (int j = 0; j < t; j++) {
                towns[j] = sc.nextInt();
            }

            double[] answer = findAnswer(p, d, path);

            for (int town : towns) {
                System.out.print(answer[town] + " ");
            }
            System.out.println();
        }
    }

    public static double[] findAnswer(int from, int d, int[][] path) {
        if (visited[from][d] != null) {
            return visited[from][d];
        } else if (d == 0) {
            double[] result = new double[visited.length];
            result[from] = 1.0;
            visited[from][d] = result;
            return result;
        }

        int count = 0;
        for (int connected : path[from]) {
            if (connected == 1) {
                count++;
            }
        }

        double[] result = new double[visited.length];
        for (int town = 0; town < path[from].length; town++) {
            if (path[from][town] == 1) {
                double[] temp = findAnswer(town, d - 1, path);
                for (int i = 0; i < result.length; i++) {
                    result[i] += (temp[i] / count);
                }
            }
        }

        visited[from][d] = result;
        return result;
    }
}
