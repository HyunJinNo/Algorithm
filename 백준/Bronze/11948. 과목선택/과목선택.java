import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int A = Integer.parseInt(br.readLine().trim());
        int B = Integer.parseInt(br.readLine().trim());
        int C = Integer.parseInt(br.readLine().trim());
        int D = Integer.parseInt(br.readLine().trim());
        int E = Integer.parseInt(br.readLine().trim());
        int F = Integer.parseInt(br.readLine().trim());

        System.out.print(A + B + C + D + Math.max(E, F) - Math.min(Math.min(A, B), Math.min(C, D)));
        br.close();
    }
}