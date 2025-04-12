import java.io.*;
import java.util.ArrayDeque;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine()); // 1 <= N <= 1_000
        ArrayDeque<Integer> deque = new ArrayDeque<>();
        br.close();

        for (int i = 1; i <= N; i++) {
            deque.offerLast(i);
        }

        StringBuilder sb = new StringBuilder();

        if (N != 1) {
            for (int iter = 0; iter < N - 2; iter++) {
                sb.append(deque.removeFirst()).append(" ");
                deque.offerLast(deque.removeFirst());
            }
            sb.append(deque.removeFirst()).append(" ");
        }

        sb.append(deque.removeFirst());

        bw.write(sb.toString());
        bw.flush();
        bw.close();
    }
}
