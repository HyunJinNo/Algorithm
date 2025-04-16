import java.io.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] temp = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int M = temp[0]; // 2 <= M <= 100
        int N = temp[1]; // 2 <= N <= 100
        br.close();

        boolean[][] arr = new boolean[M][N];
        int row = 0;
        int col = 0;
        int answer = 0;

        Direction direction = Direction.RIGHT;

        for (int iter = 0; iter < M * N - 1; iter++) {
            arr[row][col] = true;

            switch (direction) {
                case UP:
                    if (row - 1 >= 0 && !arr[row - 1][col]) {
                        row--;
                    } else {
                        direction = Direction.RIGHT;
                        col++;
                        answer++;
                    }
                    break;
                case RIGHT:
                    if (col + 1 < N && !arr[row][col + 1]) {
                        col++;
                    } else {
                        direction = Direction.DOWN;
                        row++;
                        answer++;
                    }
                    break;
                case DOWN:
                    if (row + 1 < M && !arr[row + 1][col]) {
                        row++;
                    } else {
                        direction = Direction.LEFT;
                        col--;
                        answer++;
                    }
                    break;
                case LEFT:
                    if (col - 1 >= 0 && !arr[row][col - 1]) {
                        col--;
                    } else {
                        direction = Direction.UP;
                        row--;
                        answer++;
                    }
                    break;
            }
        }

        bw.write(String.valueOf(answer));
        bw.flush();
        bw.close();
    }
}


enum Direction {
    UP, RIGHT, DOWN, LEFT
}