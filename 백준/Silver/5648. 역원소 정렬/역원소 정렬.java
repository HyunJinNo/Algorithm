import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.next()); // 1 <= n <= 1_000_000
        ArrayList<Long> arrayList = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            arrayList.add(Long.parseLong(new StringBuilder()
                    .append(scanner.next())
                    .reverse()
                    .toString()));
        }

        Collections.sort(arrayList);
        StringBuilder answer = new StringBuilder();

        for (long num : arrayList) {
            answer.append(num).append("\n");
        }
        System.out.print(answer.toString().trim());
    }
}
