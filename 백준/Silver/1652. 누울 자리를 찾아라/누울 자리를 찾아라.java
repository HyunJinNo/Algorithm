import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine()); // 방의 크기, 1 <= N <= 100
        int[] answer = new int[2];
        String[] room = new String[N];

        for (int i = 0; i < N; i++) {
            room[i] = br.readLine().trim();
        }
        br.close();

        for (int i = 0; i < N; i++) {
            int count = 0;
            for (int j = 0; j < N; j++) {
                if (room[i].charAt(j) == 'X') {
                    if (count >= 2) {
                        answer[0]++;
                    }
                    count = 0;
                    continue;
                }
                count++;
            }

            if (count >= 2) {
                answer[0]++;
            }
        }

        for (int j = 0; j < N; j++) {
            int count = 0;
            for (int i = 0; i < N; i++) {
                if (room[i].charAt(j) == 'X') {
                    if (count >= 2) {
                        answer[1]++;
                    }
                    count = 0;
                    continue;
                }
                count++;
            }

            if (count >= 2) {
                answer[1]++;
            }
        }

        bw.write(answer[0] + " " + answer[1]);
        bw.flush();
        bw.close();
    }
}
