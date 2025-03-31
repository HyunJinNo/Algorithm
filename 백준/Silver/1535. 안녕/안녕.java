import java.io.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine()); // 사람의 수, 1 <= N <= 20
        int[] costs = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] happiness = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        br.close();

        bw.write(String.valueOf(solution(0, 100, N, costs, happiness)));
        bw.flush();
        bw.close();
    }

    public static int solution(int index, int hp, int N, int[] costs, int[] happiness) {
        if (index >= N) {
            return 0;
        }

        int result = solution(index + 1, hp, N, costs, happiness);

        if (costs[index] < hp) {
            result = Math.max(
                    result,
                    happiness[index] + solution(index + 1, hp - costs[index], N, costs, happiness)
            );
        }
        
        return result;
    }
}
