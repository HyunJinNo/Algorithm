import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] temp = br.readLine().trim().split(" ");
        int A = Integer.parseInt(temp[0]); // 0 <= A <= 23
        int B = Integer.parseInt(temp[1]); // 0 <= B <= 59
        int C = Integer.parseInt(temp[2]); // 0 <= C <= 59
        int D = Integer.parseInt(br.readLine().trim()); // 0 <= D <= 500_000
        br.close();

        int time = A * 3600 + B * 60 + C + D;
        time %= 24 * 60 * 60;
        
        System.out.print(time / 3600 + " " + (time % 3600) / 60 + " " + time % 60);
    }
}