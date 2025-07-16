import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws Exception  {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine().trim()); // 1 <= n <= 10_000
		br.close();

		StringBuilder sb = new StringBuilder();

		for (int iter = 0; iter < (n / 5); iter++) {
			sb.append("V");
		}

		for (int iter = 0; iter < (n % 5); iter++) {
			sb.append("I");
		}

		System.out.print(sb.toString());
	}
}