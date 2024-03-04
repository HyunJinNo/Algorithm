import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/main/kotlin/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        for (int T = Integer.parseInt(br.readLine()); T > 0; T--) {
            int n = Integer.parseInt(br.readLine()); // 재료의 수, 1 <= n <= 200
            int[] recipe = new int[n];
            int[] put = new int[n];
            String[] temp = br.readLine().split(" ");
            for (int i = 0; i < n; i++) {
                recipe[i] = Integer.parseInt(temp[i]); // 1 <= recipe[i] <= 1,000
            }
            temp = br.readLine().split(" ");
            for (int i = 0; i < n; i++) {
                put[i] = Integer.parseInt(temp[i]); // 0 <= put[i] <= 1,000
            }

            int[] result = solve(recipe, put);
            for (int volume : result) {
                bw.write(volume + " ");
            }
            bw.write("\n");
        }

        br.close();
        bw.flush();
        bw.close();
    }

    public static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }

    public static int ceil(int a, int b) {
        return (a + b - 1) / b;
    }

    public static int[] solve(int[] recipe, int[] put) {
        int n = recipe.length;
        int b = recipe[0];
        for (int i = 1; i < n; i++) {
            b = gcd(b, recipe[i]);
        }

        int a = b;
        for (int i = 0; i < n; i++) {
            a = Math.max(a, ceil(b * put[i], recipe[i]));
        }

        int[] result = new int[n];
        for (int i = 0; i < n; i++) {
            result[i] = (recipe[i] * a / b) - put[i];
        }

        return result;
    }
}
