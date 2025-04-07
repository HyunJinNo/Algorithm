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
        int n = temp[0]; // 다리를 건너는 트럭의 수, 1 <= n <= 1_000
        int w = temp[1]; // 다리의 길이, 1 <= w <= 100
        int l = temp[2]; // 다리의 최대하중, 10 <= l <= 1_000
        int[] arr = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray(); // 1 <= arr[i] <= 10
        br.close();

        ArrayDeque<Integer> truckDeque = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            truckDeque.offerLast(arr[i]);
        }

        ArrayDeque<Integer> bridgeDeque = new ArrayDeque<>();
        for (int i = 0; i < w; i++) {
            bridgeDeque.offerLast(0);
        }
        int sum = 0;
        int time = 0;

        while (!truckDeque.isEmpty() || !bridgeDeque.isEmpty()) {
            sum -= bridgeDeque.removeFirst();

            if (!truckDeque.isEmpty()) {
                if (sum + truckDeque.peek() <= l) {
                    sum += truckDeque.peekFirst();
                    bridgeDeque.offerLast(truckDeque.removeFirst());
                } else {
                    bridgeDeque.offerLast(0);
                }
            }

            time++;
        }

        bw.write(String.valueOf(time));
        bw.flush();
        bw.close();
    }
}
