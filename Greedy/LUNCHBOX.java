import java.util.Arrays;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 도시락의 수, 1 ~ 10000
    public static Lunch[] lunch;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int c = sc.nextInt(); c > 0; c--) {
            n = sc.nextInt();
            lunch = new Lunch[n];
            for (int i = 0; i < n; i++) {
                lunch[i] = new Lunch(sc.nextInt());
            }
            for (int i = 0; i < n; i++) {
                lunch[i].e = sc.nextInt();
            }

            Arrays.sort(lunch, (o1, o2) -> Integer.compare(o2.e, o1.e));

            int result = 0;
            int beginEat = 0;
            for (int i = 0; i < n; i++) {
                beginEat += lunch[i].m;
                result = Math.max(result, beginEat + lunch[i].e);
            }

            System.out.println(result);
        }
    }

    public static class Lunch {
        public int m; // 데우는데 걸리는 시간
        public int e; // 먹는데 걸리는 시간

        public Lunch(int m) {
            this.m = m;
            this.e = 0;
        }
    }
}
