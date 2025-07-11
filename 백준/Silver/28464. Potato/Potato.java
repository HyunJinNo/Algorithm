import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine()); // 접시의 개수, 1 <= N <= 200_xs000
        int[] arr = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        br.close();

        Arrays.sort(arr);

        ArrayDeque<Integer> deque = new ArrayDeque<Integer>();
        for (int i = 0; i < N; i++) {
            deque.offerLast(arr[i]);
        }

        int[] answer = new int[2];
        int index = 1;

        while (!deque.isEmpty()) {
            if (index == 1) {
                answer[index--] += deque.removeLast();
            } else {
                answer[index++] += deque.removeFirst();
            }
        }

        System.out.print(answer[0] + " " + answer[1]);
    }
}