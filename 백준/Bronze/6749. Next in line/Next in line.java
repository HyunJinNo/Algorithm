import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int Y = Integer.parseInt(br.readLine().trim()); // 0 <= Y <= 50
        int M = Integer.parseInt(br.readLine().trim()); // Y <= M <= 50
        br.close();

        System.out.print(M * 2 - Y);
    }
}