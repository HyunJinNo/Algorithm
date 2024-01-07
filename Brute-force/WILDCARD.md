# WILDCARD.md

### Source Code
```Java
import java.util.ArrayList;
import java.util.Scanner;
import java.util.Collections;
import java.io.FileInputStream;

public class Main {
    public static boolean flag = false;
    public static ArrayList<String> answer = new ArrayList<String>();

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            answer.clear();
            String w = sc.next();
            int n = sc.nextInt();
            for (int j = 0; j < n; j++) {
                flag = false;
                String filename = sc.next();
                findAnswer(w, filename);
                if (flag) {
                    answer.add(filename);
                }
            }

            Collections.sort(answer);
            for (String str : answer) {
                System.out.println(str);
            }
        }
    }

    public static void findAnswer(String w, String filename) {
        int index = 0;
        while (index < w.length() && index < filename.length() && (w.charAt(index) == '?' || w.charAt(index) == filename.charAt(index))) {
            index++;
        }

        if (index == w.length()) {
            if (index == filename.length()) {
                flag = true;
            }
            return;
        }

        if (w.charAt(index) == '*') {
            for (int i = 0; index + i <= filename.length(); i++) {
                findAnswer(w.substring(index + 1), filename.substring(index + i));
                if (flag) {
                    return;
                }
            }
        }
    }
}
```
