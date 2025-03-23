import java.io.*;
import java.util.Arrays;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine()); // 배열의 길이, 1 <= N <= 200_000
        int[] arr = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        Arrays.sort(arr);
        int initialMax = arr[N - 1];
        int max = arr[N - 1];
        int answer = max - arr[0];
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
        Arrays.stream(arr).forEach(pq::add);

        while (pq.peek() != initialMax) {
            int temp = pq.poll() * 2;
            if (temp > max) {
                max = temp;
            }

            pq.add(temp);
            answer = Math.min(answer, max - pq.peek());
        }

        bw.write(String.valueOf(answer));
        bw.flush();
        bw.close();
    }
}
