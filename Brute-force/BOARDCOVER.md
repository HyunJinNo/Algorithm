# BOARDCOVER

### Source Code
```Java
import java.util.Scanner;

public class Main {
    public static int answer = 0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            answer = 0;
            int height = sc.nextInt();
            int width = sc.nextInt();
            boolean[][] board = new boolean[height][width];
            int left = 0;

            for (int j = 0; j < height; j++) {
                String str = sc.next();
                for (int k = 0; k < str.length(); k++) {
                    if (str.charAt(k) == '#') {
                        board[j][k] = true;
                    } else {
                        board[j][k] = false;
                        left++;
                    }
                }
            }

            if (left % 3 == 0) {
                findAnswer(board, left);
            }

            System.out.println(answer);
        }
    }

    public static void findAnswer(boolean[][] board, int left) {
        if (left == 0) {
            answer++;
            return;
        }

        Outter: for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (!board[i][j]) {
                    if (j >= 1 && i < board.length - 1) {
                        if (!board[i][j] && !board[i + 1][j - 1] && !board[i + 1][j]) {
                            board[i][j] = true;
                            board[i + 1][j - 1] = true;
                            board[i + 1][j] = true;
                            findAnswer(board, left - 3);
                            board[i][j] = false;
                            board[i + 1][j - 1] = false;
                            board[i + 1][j] = false;
                        }
                    }

                    if (j < board[0].length - 1 && i < board.length - 1) {
                        if (!board[i][j] && !board[i][j + 1] && !board[i + 1][j]) {
                            board[i][j] = true;
                            board[i][j + 1] = true;
                            board[i + 1][j] = true;
                            findAnswer(board, left - 3);
                            board[i][j] = false;
                            board[i][j + 1] = false;
                            board[i + 1][j] = false;
                        }

                        if (!board[i][j] && !board[i + 1][j] && !board[i + 1][j + 1]) {
                            board[i][j] = true;
                            board[i + 1][j] = true;
                            board[i + 1][j + 1] = true;
                            findAnswer(board, left - 3);
                            board[i][j] = false;
                            board[i + 1][j] = false;
                            board[i + 1][j + 1] = false;
                        }

                        if (!board[i][j] && !board[i][j + 1] && !board[i + 1][j + 1]) {
                            board[i][j] = true;
                            board[i][j + 1] = true;
                            board[i + 1][j + 1] = true;
                            findAnswer(board, left - 3);
                            board[i][j] = false;
                            board[i][j + 1] = false;
                            board[i + 1][j + 1] = false;
                        }
                    }

                    break Outter;
                }
            }
        }
    }
}
```
