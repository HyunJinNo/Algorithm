import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine().trim());
        StringBuilder sb = new StringBuilder();

        for (int iter = 0; iter < n; iter++) {
            String[] temp = br.readLine().trim().split(" ");
            int x = Integer.parseInt(temp[0]);
            int y = Integer.parseInt(temp[1]);

            sb.append(x >= y ? "MMM BRAINS" : "NO BRAINS").append("\n");
        }

        System.out.print(sb.toString().trim());
        br.close();
    }
}