import java.io.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] temp = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int N = temp[0]; // 끊어진 기타줄의 개수, 1 <= N <= 100
        int M = temp[1]; // 기타줄 브랜드의 수, 1 <= M <= 50
        int a = 1000;
        int b = 1000;
        int answer = 0;

        for (int iter = 0; iter < M; iter++) {
            int[] temp1 = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            a = Math.min(a, temp1[0]);
            b = Math.min(b, temp1[1]);
        }
        br.close();

        while (N > 0) {
            if (a <= b * Math.min(N, 6)) {
                N -= 6;
                answer += a;
            } else {
                N--;
                answer += b;
            }
        }

        bw.write(String.valueOf(answer));
        bw.flush();
        bw.close();
    }
}
