import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] temp = br.readLine().trim().split(" ");
        final int H = Integer.parseInt(temp[0]); // 1 <= H <= 100
        final int W = Integer.parseInt(temp[1]); // 1 <= W <= 100
        int[][] arr = new int[H][W];

        for (int i = 0; i < H; i++) {
            arr[i] = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        }

        for (int i = 0; i < H; i++) {
            int[] data = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();

            for (int j = 0; j < W; j++) {
                arr[i][j] = (arr[i][j] - data[j]) * (arr[i][j] - data[j]);
            }
        }

        for (int i = 1; i < H; i++) {
            if (W == 1) {
                arr[i][0] += arr[i - 1][0];
            } else {
                for (int j = 0; j < W; j++) {
                    if (j == 0) {
                        arr[i][j] += Math.min(arr[i - 1][0], arr[i - 1][1]);
                    } else if (j == W - 1) {
                        arr[i][j] += Math.min(arr[i - 1][j - 1], arr[i - 1][j]);
                    } else {
                        arr[i][j] += Math.min(arr[i - 1][j], Math.min(arr[i - 1][j - 1], arr[i - 1][j + 1]));
                    }
                }
            }
        }

        int answer = Integer.MAX_VALUE;
        for (int j = 0; j < W; j++) {
            answer = Math.min(answer, arr[H - 1][j]);
        }

        System.out.print(answer);
        br.close();
    }
}