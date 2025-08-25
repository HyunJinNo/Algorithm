import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int sum = 0;

        while (true) {
            int num = Integer.parseInt(br.readLine().trim());

            if (num == -1) {
                System.out.print(sum);
                break;
            } else {
                sum += num;
            }
        }

        br.close();
    }
}