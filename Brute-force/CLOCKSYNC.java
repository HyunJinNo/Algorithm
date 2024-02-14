import java.util.Scanner;

public class Main {
    public static int answer = Integer.MAX_VALUE;
    public static int[][] switches = new int[][] {
            {0, 1, 2},
            {3, 7, 9, 11},
            {4, 10, 14, 15},
            {0, 4, 5, 6, 7},
            {6, 7, 8, 10, 12},
            {0, 2, 14, 15},
            {3, 14, 15},
            {4, 5, 7, 14, 15},
            {1, 2, 3, 4, 5},
            {3, 4, 5, 9, 13}
    };

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            answer = Integer.MAX_VALUE;
            int[] clocks = new int[16];
            int[] visited = new int[switches.length];
            for (int j = 0; j < clocks.length; j++) {
                clocks[j] = sc.nextInt();
            }

            findAnswer(clocks, visited, 0, 0);

            if (answer == Integer.MAX_VALUE) {
                System.out.println("-1");
            } else {
                System.out.println(answer);
            }
        }
    }

    public static void findAnswer(int[] clocks, int[] visited, int num, int start) {
        boolean flag = true;
        for (int clock : clocks) {
            if ((clock % 12) != 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            if (num < answer) {
                answer = num;
            }
            return;
        }

        for (int i = start; i < switches.length; i++) {
            if (visited[i] < 3) {
                visited[i]++;
                for (int index : switches[i]) {
                    clocks[index] += 3;
                }
                findAnswer(clocks, visited, num + 1, i);
                visited[i]--;
                for (int index : switches[i]) {
                    clocks[index] -= 3;
                }
            }
        }
    }
}