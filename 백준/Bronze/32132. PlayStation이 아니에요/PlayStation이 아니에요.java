import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine().trim()); // 문자열의 길이, 1 <= N <= 50
        String str = br.readLine().trim();
        br.close();

        while (true) {
            String temp = str.replaceAll("PS4", "PS").replaceAll("PS5", "PS");

            if (str.equals(temp)) {
                break;
            } else {
                str = temp;
            }
        }

        System.out.print(str);
    }
}