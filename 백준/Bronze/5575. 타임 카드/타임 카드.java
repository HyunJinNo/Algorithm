import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] arr1 = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] arr2 = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] arr3 = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        br.close();

        int time1 = (arr1[3] * 3600 + arr1[4] * 60 + arr1[5]) - (arr1[0] * 3600 + arr1[1] * 60 + arr1[2]);
        int time2 = (arr2[3] * 3600 + arr2[4] * 60 + arr2[5]) - (arr2[0] * 3600 + arr2[1] * 60 + arr2[2]);
        int time3 = (arr3[3] * 3600 + arr3[4] * 60 + arr3[5]) - (arr3[0] * 3600 + arr3[1] * 60 + arr3[2]);
        int[] result1 = getResult(time1);
        int[] result2 = getResult(time2);
        int[] result3 = getResult(time3);

        System.out.println(result1[0] + " " + result1[1] + " " + result1[2]);
        System.out.println(result2[0] + " " + result2[1] + " " + result2[2]);
        System.out.print(result3[0] + " " + result3[1] + " " + result3[2]);
    }

    private static int[] getResult(int time) {
        return new int[]{time / 3600, (time / 60) % 60, time % 60};
    }
}