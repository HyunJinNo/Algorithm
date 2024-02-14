import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[] visited;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            visited = new int[10000];
            String str = sc.next();
            System.out.println(findAnswer(str, 0));
        }
    }

    public static int findAnswer(String str, int index) {
        if (visited[index] != 0) {
            return visited[index];
        }

        if (str.length() - index <= 5) {
            int level = getLevel(str.substring(index));
            visited[index] = level;
            return level;
        }

        int answer = Integer.MAX_VALUE;

        for (int length = 3; length <= 5; length++) {
            if (str.length() - index - length >= 3) {
                String substring = str.substring(index, index + length);
                int level = getLevel(substring);
                answer = Math.min(answer, level + findAnswer(str, index + length));
            }
        }

        visited[index] = answer;
        return answer;
    }

    public static int getLevel(String str) {
        int[] arr = new int[str.length()];
        for (int i = 0; i < str.length(); i++) {
            arr[i] = str.charAt(i) - 30;
        }

        boolean flag = true;

        // 모든 숫자가 같은지 확인
        for (int i = 1; i < arr.length; i++) {
            if (arr[0] != arr[i]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return 1;
        }

        // 숫자가 1씩 단조 증가하거나 단조 감소하는지 확인
        flag = true;
        int temp = arr[1] - arr[0];
        if (temp == 1 || temp == -1) {
            for (int i = 2; i < arr.length; i++) {
                if (arr[i] != arr[i - 1] + temp) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return 2;
            }
        }

        // 두 개의 숫자가 번갈아가며 나타나는지 확인
        flag = true;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != arr[i % 2]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return 4;
        }

        // 숫자가 등차 수열을 이루는지 확인
        flag = true;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1] + arr[1] - arr[0]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return 5;
        }

        return 10;
    }
}
