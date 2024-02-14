import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();
            int[][] triangle = new int[n][n];
            int[][] visited = new int[n][n];
            visited[0][0] = 1;
            for (int row = 0; row < n; row++) {
                for (int col = 0; col <= row; col++) {
                    triangle[row][col] = sc.nextInt();
                }
            }

            for (int row = 1; row < n; row++) {
                for (int col = 0; col <= row; col++) {
                    if (col == 0) {
                        triangle[row][col] += triangle[row - 1][col];
                        visited[row][col] += visited[row - 1][col];
                    } else if (row == col) {
                        triangle[row][col] += triangle[row - 1][col - 1];
                        visited[row][col] += visited[row - 1][col - 1];
                    } else {
                        if (triangle[row - 1][col - 1] == triangle[row - 1][col]) {
                            triangle[row][col] += triangle[row - 1][col - 1];
                            visited[row][col] += (visited[row - 1][col - 1] + visited[row - 1][col]);
                        } else if (triangle[row - 1][col - 1] > triangle[row - 1][col]) {
                            triangle[row][col] += triangle[row - 1][col - 1];
                            visited[row][col] += visited[row - 1][col - 1];
                        } else {
                            triangle[row][col] += triangle[row - 1][col];
                            visited[row][col] += visited[row - 1][col];
                        }
                    }
                }
            }

            int answer = 0;
            int max = 0;
            for (int num : triangle[n - 1]) {
                if (max < num) {
                    max = num;
                }
            }

            for (int col = 0; col < n; col++) {
                if (triangle[n - 1][col] == max) {
                    answer += visited[n - 1][col];
                }
            }

            System.out.println(answer);
        }
    }
}
