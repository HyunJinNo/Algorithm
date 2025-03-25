import java.io.*;
import java.util.ArrayDeque;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine()); // 테스트 케이스의 개수
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < T; i++) {
            int N = Integer.parseInt(br.readLine()); // 카드의 개수
            String[] arr = br.readLine().split(" ");
            ArrayDeque<String> deque = new ArrayDeque<String>();
            deque.offerLast(arr[0]);

            for (int j = 1; j < N; j++) {
                if (deque.peekFirst().compareTo(arr[j]) >= 0) {
                    deque.offerFirst(arr[j]);
                } else {
                    deque.offerLast(arr[j]);
                }
            }

            while (!deque.isEmpty()) {
                sb.append(deque.removeFirst());
            }
            sb.append("\n");
        }

        bw.write(sb.toString());
        bw.flush();
        bw.close();
    }
}
