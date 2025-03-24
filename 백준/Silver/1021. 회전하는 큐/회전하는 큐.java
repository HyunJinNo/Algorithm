import java.io.*;
import java.util.ArrayDeque;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] temp = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int N = temp[0]; // 큐의 크기, 1 <= N <= 50
        int M = temp[1]; // 뽑아내려고 하는 수의 개수, 1 <= M <= N
        int length = N;
        int answer = 0;

        ArrayDeque<Integer> deque = new ArrayDeque<Integer>();
        for (int num = 1; num <= N; num++) {
            deque.offerLast(num);
        }

        int[] arr = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        for (int i = 0; i < M; i++) {
            int count = 0;
            while (deque.peekFirst() != arr[i]) {
                deque.offerLast(deque.removeFirst());
                count++;
            }
            deque.removeFirst();
            answer += Math.min(count, length - count);
            length--;
        }

        bw.write(String.valueOf(answer));
        bw.flush();
        bw.close();
    }
}
