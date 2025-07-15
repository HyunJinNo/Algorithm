import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws Exception  {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine().trim()); // 1 <= N <= 200
		br.close();

		StringBuilder sb = new StringBuilder();

		for (int i = 1; i <= N; i++) {
			sb.append("Hello World, Judge " + i + "!\n");
		}

		System.out.print(sb.toString().trim());
	}
}