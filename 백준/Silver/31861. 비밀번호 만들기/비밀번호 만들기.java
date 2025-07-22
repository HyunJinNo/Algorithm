import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    private static final int MOD = 1_000_000_007;
    private static int N;
    private static int M;
    private static int[][] cache;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] temp = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        N = temp[0]; // 0 <= N <= 25
        M = temp[1]; // 2 <= M <= 1_000
        cache = new int[26][M]; // [char, index]
        br.close();

        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < M; j++) {
                cache[i][j] = -1;
            }
        }

        int answer = 0;

        for (int c = 0; c < 26; c++) {
            answer += findAnswer(c, 1);
            answer %= MOD;
        }

        System.out.print(answer);
    }

    public static int findAnswer(int c, int index) {
        if (index >= M) {
            return 1;
        } else if (cache[c][index] != -1) {
            return cache[c][index];
        }

        int result = 0;

        for (int num = c - N; num >= 0; num--) {
            result += findAnswer(num, index + 1);
            result %= MOD;
        }

        for (int num = (N == 0 ? c + 1 : c + N); num < 26; num++) {
            result += findAnswer(num, index + 1);
            result %= MOD;
        }

        cache[c][index] = result;
        return result;
    }
}