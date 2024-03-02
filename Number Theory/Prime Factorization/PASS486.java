import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/main/kotlin/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] factors = new int[10000001];
        for (int div = 1; div <= 10000000; div++) {
            for (int multiple = div; multiple <= 10000000; multiple += div) {
                factors[multiple]++;
            }
        }

        for (int T = Integer.parseInt(br.readLine()); T > 0; T--) {
            String[] temp = br.readLine().split(" ");
            int n = Integer.parseInt(temp[0]); // 약수의 개수, 1 <= n <= 400

            // 비밀번호의 범위, 1 <= lo <= hi <= 10,000,000
            // 0 <= hi - lo <= 1,000,000
            int lo = Integer.parseInt(temp[1]);
            int hi = Integer.parseInt(temp[2]);
            int answer = 0;

            for (int num = lo; num <= hi; num++) {
                if (factors[num] == n) {
                    answer++;
                }
            }
            bw.write(answer + "\n");
        }

        br.close();
        bw.flush();
        bw.close();
    }
}
