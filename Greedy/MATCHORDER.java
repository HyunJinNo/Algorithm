import java.util.Collections;
import java.util.LinkedList;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 선수의 수, 1 ~ 100
    public static int[] russian; // 러시아 선수의 레이팅
    public static LinkedList<Integer> korean = new LinkedList<Integer>(); // 한국 선수의 레이팅

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int c = sc.nextInt(); c > 0; c--) {
            n = sc.nextInt();
            russian = new int[n];
            for (int i = 0; i < n; i++) {
                russian[i] = sc.nextInt();
            }

            korean.clear();
            for (int i = 0; i < n; i++) {
                korean.add(sc.nextInt());
            }
            Collections.sort(korean);

            System.out.println(findAnswer());
        }
    }

    public static int findAnswer() {
        int result = 0;

        for (int rating : russian) {
            if (rating > korean.getLast()) {
                korean.removeFirst();
            } else {
                for (int i = 0; i < korean.size(); i++) {
                    if (rating <= korean.get(i)) {
                        result++;
                        korean.remove(i);
                        break;
                    }
                }
            }
        }

        return result;
    }
}
