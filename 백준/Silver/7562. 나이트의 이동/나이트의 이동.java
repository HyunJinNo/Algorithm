import java.io.*;
import java.util.ArrayDeque;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine()); // 테스트 케이스의 개수

        for (int iter = 0; iter < T; iter++) {
            int l = Integer.parseInt(br.readLine()); // 체스판의 한 변의 길이, 4 <= l <= 300
            int[] pos = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            int[] target = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();

            boolean[][] visited = new boolean[l][l];
            visited[pos[0]][pos[1]] = true;
            ArrayDeque<int[]> deque = new ArrayDeque<int[]>();
            deque.offerLast(new int[]{pos[0], pos[1], 0});

            while (!deque.isEmpty()) {
                int[] arr = deque.removeFirst();

                if (arr[0] == target[0] && arr[1] == target[1]) {
                    bw.write(arr[2] + "\n");
                    break;
                }

                if (arr[0] - 2 >= 0 && arr[1] - 1 >= 0 && !visited[arr[0] - 2][arr[1] - 1]) {
                    visited[arr[0] - 2][arr[1] - 1] = true;
                    deque.offerLast(new int[]{arr[0] - 2, arr[1] - 1, arr[2] + 1});
                }

                if (arr[0] - 2 >= 0 && arr[1] + 1 < l && !visited[arr[0] - 2][arr[1] + 1]) {
                    visited[arr[0] - 2][arr[1] + 1] = true;
                    deque.offerLast(new int[]{arr[0] - 2, arr[1] + 1, arr[2] + 1});
                }

                if (arr[0] - 1 >= 0 && arr[1] - 2 >= 0 && !visited[arr[0] - 1][arr[1] - 2]) {
                    visited[arr[0] - 1][arr[1] - 2] = true;
                    deque.offerLast(new int[]{arr[0] - 1, arr[1] - 2, arr[2] + 1});
                }

                if (arr[0] - 1 >= 0 && arr[1] + 2 < l && !visited[arr[0] - 1][arr[1] + 2]) {
                    visited[arr[0] - 1][arr[1] + 2] = true;
                    deque.offerLast(new int[]{arr[0] - 1, arr[1] + 2, arr[2] + 1});
                }

                if (arr[0] + 1 < l && arr[1] - 2 >= 0 && !visited[arr[0] + 1][arr[1] - 2]) {
                    visited[arr[0] + 1][arr[1] - 2] = true;
                    deque.offerLast(new int[]{arr[0] + 1, arr[1] - 2, arr[2] + 1});
                }

                if (arr[0] + 1 < l && arr[1] + 2 < l && !visited[arr[0] + 1][arr[1] + 2]) {
                    visited[arr[0] + 1][arr[1] + 2] = true;
                    deque.offerLast(new int[]{arr[0] + 1, arr[1] + 2, arr[2] + 1});
                }

                if (arr[0] + 2 < l && arr[1] - 1 >= 0 && !visited[arr[0] + 2][arr[1] - 1]) {
                    visited[arr[0] + 2][arr[1] - 1] = true;
                    deque.offerLast(new int[]{arr[0] + 2, arr[1] - 1, arr[2] + 1});
                }

                if (arr[0] + 2 < l && arr[1] + 1 < l && !visited[arr[0] + 2][arr[1] + 1]) {
                    visited[arr[0] + 2][arr[1] + 1] = true;
                    deque.offerLast(new int[]{arr[0] + 2, arr[1] + 1, arr[2] + 1});
                }
            }
        }

        br.close();
        bw.flush();
        bw.close();
    }
}
