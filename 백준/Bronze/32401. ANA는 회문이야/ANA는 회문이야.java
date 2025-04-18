import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine()); // 문자열의 길이, 3 <= N <= 100
        String S = br.readLine().trim();
        int answer = 0;

        for (int i = 0; i < N - 1; i++) {
            if (S.charAt(i) == 'A' && S.charAt(i + 1) != 'A') {
                for (int j = i + 2; j < N; j++) {
                    if (S.charAt(j) == 'A') {
                        int count = 0;

                        for (int k = i + 1; k < j; k++) {
                            if (S.charAt(k) == 'N') {
                                count++;
                            }
                        }

                        if (count == 1) {
                            answer++;
                        }

                        break;
                    }
                }
            }
        }

        System.out.print(answer);
    }
}
