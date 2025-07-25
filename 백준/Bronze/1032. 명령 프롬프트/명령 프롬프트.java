import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine().trim()); // 파일 이름의 개수, 1 <= N <= 50
        String[] arr = new String[N];

        for (int i = 0; i < N; i++) {
            arr[i] = br.readLine().trim();
        }

        br.close();

        StringBuilder sb = new StringBuilder();
        int length = arr[0].length();

        for (int i = 0; i < length; i++) {
            boolean flag = true;

            for (int j = 0; j < N - 1; j++) {
                if (arr[j].charAt(i) != arr[j + 1].charAt(i)) {
                    flag = false;
                    break;
                }
            }

            sb.append(flag ? arr[0].charAt(i) : "?");
        }

        System.out.print(sb);
    }
}
