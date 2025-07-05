import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String numStr = br.readLine();
        int num = Integer.parseInt(numStr); // 1 <= num <= 1_000_000_000
        br.close();

        if (!numStr.contains("7") && num % 7 != 0) {
            System.out.print(0);
        } else if (!numStr.contains("7") && num % 7 == 0) {
            System.out.print(1);
        } else if (numStr.contains("7") && num % 7 != 0) {
            System.out.print(2);
        } else {
            System.out.print(3);
        }
    }
}