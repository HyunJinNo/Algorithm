import java.io.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine()); // 학생의 수, 1 <= N <= 100_000
        int[] R = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray(); // 1 <= R[i] <= 1_000_000_000
        long[] cache = new long[N];

        br.close();

        long answer = Math.min(
                solution(0, N, R, cache),
                solution(1, N, R, cache)
        );

        bw.write(String.valueOf(answer));
        bw.flush();
        bw.close();
    }

    public static long solution(int index, int N, int[] R, long[] cache) {
        if (index >= N) {
            return 0L;
        } else if (cache[index] != 0L) {
            return cache[index];
        }

        long result = R[index];
        result = Math.min(
                result + solution(index + 1, N, R, cache),
                result + solution(index + 2, N, R, cache)
        );
        cache[index] = result;
        return result;
    }
}
