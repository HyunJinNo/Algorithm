import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[] length = new int[51];

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();
        calcLength();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt(); // 세대, 0 ~ 50
            int p = sc.nextInt(); // p번째 글자, 1 ~ 1000000000
            int l = sc.nextInt(); // 출력할 글자 수, 1 ~ 50

            System.out.println(getCurve("FX", n, p - 1, l, 0));
        }
    }

    public static String getCurve(String str, int generation, int startIndex, int l, int index) {
        StringBuilder sb = new StringBuilder();

        if (generation == 0) {
            for (int i = 0; i < str.length(); i++) {
                if (index < startIndex) {
                    index++;
                } else if (index <= startIndex + l - 1) {
                    sb.append(str.charAt(i));
                    index++;
                } else {
                    return sb.toString();
                }
            }
            return sb.toString();
        }

        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == 'X') {
                if (index < startIndex) {
                    if (index + length[generation] >= startIndex) {
                        sb.append(getCurve("X+YF", generation - 1, startIndex, l, index));
                    }
                    index += length[generation];
                } else if (index <= startIndex + l - 1) {
                    sb.append(getCurve("X+YF", generation - 1, startIndex, l, index));
                    index += length[generation];
                } else {
                    return sb.toString();
                }
            } else if (str.charAt(i) == 'Y') {
                if (index < startIndex) {
                    if (index + length[generation] >= startIndex) {
                        sb.append(getCurve("FX-Y", generation - 1, startIndex, l, index));
                    }
                    index += length[generation];
                } else if (index <= startIndex + l - 1) {
                    sb.append(getCurve("FX-Y", generation - 1, startIndex, l, index));
                    index += length[generation];
                } else {
                    return sb.toString();
                }
            } else {
                if (index < startIndex) {
                    index++;
                } else if (index <= startIndex + l - 1) {
                    sb.append(str.charAt(i));
                    index++;
                } else {
                    return sb.toString();
                }
            }
        }

        return sb.toString();
    }

    // 문자열 "X" 또는 "Y" 를 n세대 진화시킨 결과의 길이 계산
    public static void calcLength() {
        length[0] = 1;
        for (int i = 1; i <= 50; i++) {
            length[i] = Math.min(1000000001, (length[i - 1] * 2) + 2);
        }
    }
}
