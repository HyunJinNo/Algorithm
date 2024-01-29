# STRJOIN

### Source Code
```Java
import java.util.PriorityQueue;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 문자열의 수, 1 ~ 100
    public static PriorityQueue<Integer> pq = new PriorityQueue<Integer>(); // 각 문자열의 길이, len[i]: 1 ~ 1000

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int c = sc.nextInt(); c > 0; c--) {
            n = sc.nextInt();
            pq.clear();

            for (int i = 0; i < n; i++) {
                pq.add(sc.nextInt());
            }

            int answer = 0;
            int temp = pq.poll();
            while (!pq.isEmpty()) {
                pq.add(temp);
                int num1 = pq.poll();
                int num2 = pq.poll();
                temp = num1 + num2;
                answer += temp;
            }

            System.out.println(answer);
        }
    }
}
```
