# MINASTIRITH

### Source Code
```Java
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 초소의 개수, 1 ~ 100
    public static Checkpoint[] checkpoints; // 초소 목록

    public static double[][] ranges;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int c = sc.nextInt(); c > 0; c--) {
            n = sc.nextInt();
            checkpoints = new Checkpoint[n];
            for (int i = 0; i < n; i++) {
                checkpoints[i] = new Checkpoint(sc.nextDouble(), sc.nextDouble(), sc.nextDouble());
            }

            convertToRange();

            int answer = solveCircular();
            if (answer == 987654321) {
                System.out.println("IMPOSSIBLE");
            } else {
                System.out.println(answer);
            }
        }
    }

    public static void convertToRange() {
        ranges = new double[n][2];

        for (int i = 0; i < n; i++) {
            double loc = (2 * Math.PI + Math.atan2(checkpoints[i].y, checkpoints[i].x)) % (2 * Math.PI);
            double range = 2.0 * Math.asin(checkpoints[i].radius / 2.0 / 8.0);
            ranges[i][0] = loc - range;
            ranges[i][1] = loc + range;
        }

        Arrays.sort(ranges, Comparator.comparingDouble(range -> range[0]));
    }

    public static int solveCircular() {
        int result = 987654321;

        for (int i = 0; i < n; i++) {
            if (ranges[i][0] <= 0 || ranges[i][1] >= 2 * Math.PI) {
                double begin = ranges[i][1] % (2 * Math.PI);
                double end = (ranges[i][0] + (2 * Math.PI)) % (2 * Math.PI);
                result = Math.min(result, 1 + solveLinear(begin, end));
            }
        }

        return result;
    }

    public static int solveLinear(double begin, double end) {
        int used = 0;
        int index = 0;

        while (begin < end) {
            double maxCover = -1;
            while (index < n && ranges[index][0] <= begin) {
                maxCover = Math.max(maxCover, ranges[index][1]);
                index++;
            }

            if (maxCover <= begin) {
                return 987654321;
            } else {
                begin = maxCover;
                used++;
            }
        }

        return used;
    }

    public static class Checkpoint {
        public double x;
        public double y;
        public double radius; // 감시 범위, 0 ~ 16.001

        public Checkpoint(double y, double x, double radius) {
            this.y = y;
            this.x = x;
            this.radius = radius;
        }
    }
}
```
