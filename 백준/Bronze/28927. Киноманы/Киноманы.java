import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) throws Exception  {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int[] arr1 = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
		int[] arr2 = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
		br.close();

		int time1 = arr1[0] * 3 + arr1[1] * 20 + arr1[2] * 120;
		int time2 = arr2[0] * 3 + arr2[1] * 20 + arr2[2] * 120;

		if (time1 > time2) {
			System.out.print("Max");
		} else if (time1 == time2) {
			System.out.print("Draw");
		} else {
			System.out.print("Mel");
		}
	}
}
