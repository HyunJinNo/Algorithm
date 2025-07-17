import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws Exception  {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int sum = 0;

		for (int iter = 0; iter < 4; iter++) {
			sum += Integer.parseInt(br.readLine().trim());
		}
		br.close();

		System.out.print(sum <= 1500 ? "Yes" : "No");
	}
}