import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayDeque;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine().trim()); // 가로 칸 수, 2 <= N <= 200,000
        String[] arr = new String[2];

        for (int i = 0; i < 2; i++) {
            arr[i] = br.readLine().trim();
        }
        br.close();

        boolean answer = false;
        ArrayDeque<Coordinate> deque = new ArrayDeque<>();
        deque.offerLast(new Coordinate(0, 1, Direction.EAST));
        deque.offerLast(new Coordinate(1, 0, Direction.SOUTH));

        while (!deque.isEmpty()) {
            Coordinate coordinate = deque.removeFirst();

            if (coordinate.row == 1 && coordinate.col == N - 1) {
                answer = true;
                break;
            }

            switch (arr[coordinate.row].charAt(coordinate.col)) {
                case 'I':
                    if (coordinate.direction == Direction.EAST && coordinate.col + 1 < N) {
                        deque.offerLast(new Coordinate(coordinate.row, coordinate.col + 1, Direction.EAST));
                    }
                    break;
                case 'L':
                    if (coordinate.direction == Direction.NORTH && coordinate.col + 1 < N) {
                        deque.offerLast(new Coordinate(0, coordinate.col + 1, Direction.EAST));
                    } else if (coordinate.direction == Direction.SOUTH && coordinate.col + 1 < N) {
                        deque.offerLast(new Coordinate(1, coordinate.col + 1, Direction.EAST));
                    } else if (coordinate.direction == Direction.EAST) {
                        if (coordinate.row == 0) {
                            deque.offerLast(new Coordinate(1, coordinate.col, Direction.SOUTH));
                        } else {
                            deque.offerLast(new Coordinate(0, coordinate.col, Direction.NORTH));
                        }
                    }
                    break;
                default:
                    break;
            }
        }

        System.out.print(answer ? "YES" : "NO");
    }

    public enum Direction {
        NORTH, EAST, SOUTH
    }

    public static class Coordinate {
        public int row;
        public int col;
        public Direction direction;

        public Coordinate(int row, int col, Direction direction) {
            this.row = row;
            this.col = col;
            this.direction = direction;
        }
    }
}