import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[][] visited;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();
            int m = sc.nextInt();

            int[] A = new int[n];
            int[] B = new int[m];
            visited = new int[n][m];

            for (int j = 0; j < n; j++) {
                A[j] = sc.nextInt();
            }
            for (int j = 0; j < m; j++) {
                B[j] = sc.nextInt();
            }

            int answer = 0;
            for (int index1 = 0; index1 < n; index1++) {
                answer = Math.max(answer, findAnswer(A, B, index1, 0, A[index1]));
            }
            for (int index2 = 0; index2 < m; index2++) {
                answer = Math.max(answer, findAnswer(A, B, 0, index2, B[index2]));
            }
            System.out.println(answer);
        }
    }

    public static int findAnswer(int[] A, int[] B, int index1, int index2, int element) {
        if (visited[index1][index2] != 0) {
            return visited[index1][index2];
        }

        int length = 1;

        for (int i = index1; i < A.length; i++) {
            if (element < A[i]) {
                length = Math.max(length, 1 + findAnswer(A, B, i, index2, A[i]));
            }
        }
        for (int i = index2; i < B.length; i++) {
            if (element < B[i]) {
                length = Math.max(length, 1 + findAnswer(A, B, index1, i, B[i]));
            }
        }

        visited[index1][index2] = length;

        return length;
    }
}