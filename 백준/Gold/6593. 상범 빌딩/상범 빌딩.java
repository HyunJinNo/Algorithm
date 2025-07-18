import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        while (true) {
            int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
            int L = arr[0]; // 1 <= L <= 30
            int R = arr[1]; // 1 <= R <= 30
            int C = arr[2]; // 1 <= C <= 30

            if (L == 0 && R == 0 && C == 0) {
                System.out.print(sb.toString().trim());
                br.close();
                break;
            }

            boolean[][][] visited = new boolean[L][R][C];
            int startLevel = 0;
            int startRow = 0;
            int startCol = 0;
            int endLevel = 0;
            int endRow = 0;
            int endCol = 0;

            for (int i = 0; i < L; i++) {
                for (int j = 0; j < R; j++) {
                    String str = br.readLine().trim();
                    for (int k = 0; k < C; k++) {
                        switch (str.charAt(k)) {
                            case '#':
                                visited[i][j][k] = true;
                                break;
                            case 'S':
                                startLevel = i;
                                startRow = j;
                                startCol = k;
                                break;
                            case 'E':
                                endLevel = i;
                                endRow = j;
                                endCol = k;
                            default:
                                break;
                        }
                    }
                }

                br.readLine();
            }

            ArrayDeque<int[]> deque = new ArrayDeque<>(); // [level, row, col, time]
            visited[startLevel][startRow][startCol] = true;
            deque.offerLast(new int[]{startLevel, startRow, startCol, 0});
            boolean flag = false;

            while (!deque.isEmpty()) {
                int[] temp = deque.removeFirst();
                int level = temp[0];
                int row = temp[1];
                int col = temp[2];
                int time = temp[3];

                if (level == endLevel && row == endRow && col == endCol) {
                    sb.append("Escaped in ").append(time).append(" minute(s).\n");
                    flag = true;
                    break;
                }

                if (level - 1 >= 0 && !visited[level - 1][row][col]) {
                    visited[level - 1][row][col] = true;
                    deque.offerLast(new int[]{level - 1, row, col, time + 1});
                }

                if (level + 1 < L && !visited[level + 1][row][col]) {
                    visited[level + 1][row][col] = true;
                    deque.offerLast(new int[]{level + 1, row, col, time + 1});
                }

                if (row - 1 >= 0 && !visited[level][row - 1][col]) {
                    visited[level][row - 1][col] = true;
                    deque.offerLast(new int[]{level, row - 1, col, time + 1});
                }

                if (row + 1 < R && !visited[level][row + 1][col]) {
                    visited[level][row + 1][col] = true;
                    deque.offerLast(new int[]{level, row + 1, col, time + 1});
                }

                if (col - 1 >= 0 && !visited[level][row][col - 1]) {
                    visited[level][row][col - 1] = true;
                    deque.offerLast(new int[]{level, row, col - 1, time + 1});
                }

                if (col + 1 < C && !visited[level][row][col + 1]) {
                    visited[level][row][col + 1] = true;
                    deque.offerLast(new int[]{level, row, col + 1, time + 1});
                }
            }

            if (!flag) {
                sb.append("Trapped!\n");
            }
        }
    }
}