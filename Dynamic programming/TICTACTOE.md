# TICTACTOE

### Source Code
```Java
import java.util.Arrays;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static String[][] board;
    public static int[] cache;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int c = sc.nextInt(); c > 0; c--) {
            board = new String[3][3];

            int num1 = 0;
            int num2 = 0;
            for (int i = 0; i < 3; i++) {
                String temp = sc.next();
                for (int j = 0; j < 3; j++) {
                    board[i][j] = String.valueOf(temp.charAt(j));
                    if (board[i][j].equals("x")) {
                        num1++;
                    } else if (board[i][j].equals("o")) {
                        num2++;
                    }
                }
            }

            cache = new int[19683];
            Arrays.fill(cache, -2);

            if (num1 == num2) {
                int result = canWin(board, "x");
                switch (result) {
                    case 1:
                        System.out.println("x");
                        break;
                    case -1:
                        System.out.println("o");
                        break;
                    default:
                        System.out.println("TIE");
                }
            } else {
                int result = canWin(board,"o");
                switch (result) {
                    case 1:
                        System.out.println("o");
                        break;
                    case -1:
                        System.out.println("x");
                        break;
                    default:
                        System.out.println("TIE");
                }
            }

        }
    }

    /**
     * tictactoe 게임판이 현재 board 일 때 이번 차례의 사람이 이길 수 있으면
     * 1을, 비길 수 있으면 0을, 질 수 밖에 없으면 -1을 반환한다.
     * @param board 현재 board 상태
     * @param turn 누구 차례인지에 대한 정보 ("o" or "x")
     * @return 승패 여부
     */
    public static int canWin(String[][] board, String turn) {
        if (cache[bijection(board)] != -2) {
            return cache[bijection(board)];
        } else if (isFinished(board)) {
            return -1;
        }

        int result = 2;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[i][j].equals(".")) {
                    board[i][j] = turn;
                    if (turn.equals("x")) {
                        result = Math.min(result, canWin(board, "o"));
                    } else {
                        result = Math.min(result, canWin(board, "x"));
                    }
                    board[i][j] = ".";
                }
            }
        }

        if (result == 2 || result == 0) {
            result = 0;
        }

        result *= (-1);
        cache[bijection(board)] = result;
        return result;
    }

    /**
     * @param board: 현재 board 상태
     */
    public static boolean isFinished(String[][] board) {
        for (int i = 0; i < 3; i++) {
            if (!board[i][0].equals(".") && board[i][0].equals(board[i][1]) && board[i][0].equals(board[i][2])) {
                return true;
            }
        }
        for (int j = 0; j < 3; j++) {
            if (!board[0][j].equals(".") && board[0][j].equals(board[1][j]) && board[0][j].equals(board[2][j])) {
                return true;
            }
        }

        if (!board[1][1].equals(".") && board[1][1].equals(board[0][0]) && board[1][1].equals(board[2][2])) {
            return true;
        } else if (!board[1][1].equals(".") && board[1][1].equals(board[0][2]) && board[1][1].equals(board[2][0])) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 게임판을 0 ~ 19682 사이의 정수로 변환한다.
     * @param board 현재 board 상태
     * @return 0 ~ 19682 사이의 정수값
     */
    public static int bijection(String[][] board) {
        int result = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                result *= 3;
                if (board[i][j].equals("o")) {
                    result++;
                } else if (board[i][j].equals("x")) {
                    result += 2;
                }
            }
        }
        return result;
    }
}
```
