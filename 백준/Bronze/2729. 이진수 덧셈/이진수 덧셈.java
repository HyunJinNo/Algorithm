import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim()); // 테스트 케이스의 수, 1 <= T <= 1_000
        StringBuilder sb = new StringBuilder();

        for (int iter = 0; iter < T; iter++) {
            String[] strs = br.readLine().trim().split(" ");
            String str1 = strs[0];
            String str2 = strs[1];
            sb.append(getResult(str1, str2)).append("\n");
        }

        System.out.print(sb.toString().trim());
        br.close();
    }

    private static String getResult(String str1, String str2) {
        int length1 = str1.length();
        int length2 = str2.length();
        int length = Math.max(length1, length2);
        boolean plus = false;
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < length; i++) {
            int count = 0;

            if (i < length1 && str1.charAt(length1 - 1 - i) == '1') {
                count++;
            }
            if (i < length2 && str2.charAt(length2 - 1 - i) == '1') {
                count++;
            }
            if (plus) {
                count++;
            }

            if (count == 3) {
                result.append(1);
                plus = true;
            } else if (count == 2) {
                result.append(0);
                plus = true;
            } else if (count == 1) {
                result.append(1);
                plus = false;
            } else {
                result.append(0);
                plus = false;
            }
        }

        if (plus) {
            result.append(1);
        }

        String temp = result.reverse().toString();
        int tempLength = temp.length();
        int index = 0;

        while (true) {
            if (index == tempLength) {
                break;
            }

            if (temp.charAt(index) != '0') {
                break;
            }

            index++;
        }

        if (index == tempLength) {
            return "0";
        } else {
            return temp.substring(index);
        }
    }
}