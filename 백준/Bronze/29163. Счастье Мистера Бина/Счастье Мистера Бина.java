import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) throws Exception  {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine().trim()); // 숫자의 개수, 1 <= n <= 1_000
		int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
		int count = 0;
		br.close();

		for (int i = 0; i < n; i++) {
			if (arr[i] % 2 == 0) {
				count++;
			} else {
				count--;
			}
		}

		System.out.print(count > 0 ? "Happy" : "Sad");
	}
}