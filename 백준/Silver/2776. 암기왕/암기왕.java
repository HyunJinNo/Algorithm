import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

public class Main {
	public static void main(String[] args) throws Exception  {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int T = Integer.parseInt(br.readLine().trim());
		StringBuilder sb = new StringBuilder();
		
		for (int iter = 0; iter < T; iter++) {
			int N = Integer.parseInt(br.readLine().trim()); // 수첩 1에 적어 놓은 정수의 개수, 1 <= N <= 1_000_000
			int[] arr1 = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			Set<Integer> set = Arrays.stream(arr1).boxed().collect(Collectors.toUnmodifiableSet());
			
			int M = Integer.parseInt(br.readLine().trim()); // 수첩 2에 적어 놓은 정수의 개수, 1 <= M <= 1_000_000
			int[] arr2 = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
			
			for (int num : arr2) {
				if (set.contains(num)) {
					sb.append(1).append("\n");
				} else {
					sb.append(0).append("\n");
				}
			}
		}
		
		br.close();
		System.out.print(sb.toString().trim());
	}
}