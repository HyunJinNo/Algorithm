import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine().trim()); // 1 <= N <= 1_000_000_000
        br.close();
        
        System.out.print(N <= 100_000 && N % 2024 == 0 ? "Yes" : "No");
    }
}