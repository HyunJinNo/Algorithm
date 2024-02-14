import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[] cache;
    public static ArrayList<Integer> moves = new ArrayList<Integer>();

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        prepare();

        for (int c = sc.nextInt(); c > 0; c--) {
            cache = new int[1 << 25];  // 33554432(= 1 << 25)
            Arrays.fill(cache, -1);
            int board = 0;
            for (int i = 0; i < 5; i++) {
                String str = sc.next();
                for (int j = 0; j < str.length(); j++) {
                    if (str.charAt(j) == '#') {
                        board += cell(i, j);
                    }
                }
            }

            if (findAnswer(board) == 1) {
                System.out.println("WINNING");
            } else {
                System.out.println("LOSING");
            }
        }
    }

    public static int cell(int row, int col) {
        return (1 << (row * 5 + col));
    }

    public static void prepare() {
        for (int row = 0; row < 4; row++) {
            for (int col = 0; col < 4; col++) {
                ArrayList<Integer> cells = new ArrayList<Integer>();
                for (int i = 0; i < 2; i++) {
                    for (int j = 0; j < 2; j++) {
                        cells.add(cell(row + i, col + j));
                    }
                }
                int square = cells.get(0) + cells.get(1) + cells.get(2) + cells.get(3);
                for (int i = 0; i < 4; i++) {
                    moves.add(square - cells.get(i));
                }
            }
        }

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 4; j++) {
                moves.add(cell(i, j) + cell(i, j + 1));
                moves.add(cell(j, i) + cell(j + 1, i));
            }
        }
    }

    public static int findAnswer(int board) {
        if (cache[board] != -1) {
            return cache[board];
        }

        int result = 0;
        for (Integer move : moves) {
            if ((move & board) == 0) {
                if (findAnswer(board | move) == 0) {
                    result = 1;
                    break;
                }
            }
        }

        cache[board] = result;
        return result;
    }
}