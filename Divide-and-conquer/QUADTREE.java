import java.util.Scanner;

public class Main {
    public static int index = 0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();

        for (int i = 0; i < count; i++) {
            index = 0;
            String str = sc.next();
            System.out.println(findAnswer(str));
        }
    }

    public static String findAnswer(String str) {
        if (index >= str.length()) {
            return "";
        }

        char c = str.charAt(index);
        index++;

        if (c == 'w' || c == 'b') {
            return String.valueOf(c);
        } else {
            String upperLeft = findAnswer(str);
            String upperRight = findAnswer(str);
            String lowerLeft = findAnswer(str);
            String lowerRight = findAnswer(str);

            return "x" + lowerLeft + lowerRight + upperLeft + upperRight;
        }
    }
}