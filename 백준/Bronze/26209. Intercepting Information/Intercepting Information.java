import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        boolean flag = true;
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        br.close();


        for (int i = 0; i < 8; i++) {
            if (arr[i] == 9) {
                flag = false;
                break;
            }
        }

        System.out.print(flag ? "S" : "F");
    }
}