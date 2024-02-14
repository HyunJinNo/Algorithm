import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static boolean answer = false;
    public static boolean[][] visited = new boolean[100][100];

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            answer = false;
            visited = new boolean[100][100];
            int n = sc.nextInt();
            int[][] board = new int[n][n];
            for (int row = 0; row < n; row++) {
                for (int col = 0; col < n; col++) {
                    board[row][col] = sc.nextInt();
                }
            }

            findAnswer(board, 0, 0);

            if (answer) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
        }
    }

    public static void findAnswer(int[][] board, int row, int col) {
        if (answer || (row == col && row == board.length - 1)) {
            answer = true;
            return;
        }

        if (visited[row][col]) {
            return;
        }

        int num = board[row][col];
        visited[row][col] = true;
        if (row + num < board.length) {
            findAnswer(board, row + num, col);
        }
        if (col + num < board.length) {
            findAnswer(board, row, col + num);
        }
    }
}
