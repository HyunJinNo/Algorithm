import java.io.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine()); // 스위치 개수, 1 <= N <= 100
        int[] switches = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int M = Integer.parseInt(br.readLine()); // 학생 수, 1 <= M <= 100

        for (int iter = 0; iter < M; iter++) {
            int[] temp = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            int a = temp[0];
            int b = temp[1];

            if (a == 1) {
                for (int i = b; i <= N; i += b) {
                    if (switches[i - 1] == 0) {
                        switches[i - 1] = 1;
                    } else {
                        switches[i - 1] = 0;
                    }
                }
            } else {
                int start = b - 1;
                int end = b - 1;

                while (start >= 0 && end < N) {
                    if (switches[start] == switches[end]) {
                        if (switches[start] == 0) {
                            switches[start] = 1;
                            switches[end] = 1;
                        } else {
                            switches[start] = 0;
                            switches[end] = 0;
                        }
                        start--;
                        end++;
                    } else {
                        break;
                    }
                }
            }
        }

        br.close();
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < N; i++) {
            sb.append(switches[i]);
            if ((i + 1) % 20 == 0) {
                sb.append("\n");
            } else {
                sb.append(" ");
            }
        }

        bw.write(sb.toString().trim());
        bw.flush();
        bw.close();
    }
}
