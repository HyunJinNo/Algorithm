import java.io.*;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine()); // 수열 A의 크기, 1 <= N <= 1_000_000
        int[] A = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray(); // 1 <= A[i] <= 1_000_000
        br.close();

        HashMap<Integer, Integer> hashMap = new HashMap<>();
        for (int i = 0; i < N; i++) {
            if (!hashMap.containsKey(A[i])) {
                hashMap.put(A[i], 1);
            } else {
                hashMap.put(A[i], hashMap.get(A[i]) + 1);
            }
        }


        int[] answer = new int[N];
        Stack<int[]> stack = new Stack<>();
        for (int i = N - 1; i >= 0; i--) {
            while (!stack.empty() && stack.peek()[1] <= hashMap.get(A[i])) {
                stack.pop();
            }

            if (stack.empty()) {
                answer[i] = -1;
            } else {
                answer[i] = stack.peek()[0];
            }
            stack.push(new int[]{A[i], hashMap.get(A[i])});
        }

        for (int i = 0; i < N; i++) {
            bw.write(answer[i] + " ");
        }

        bw.flush();
        bw.close();
    }
}
