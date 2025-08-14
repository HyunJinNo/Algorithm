import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String S = br.readLine().trim();
        br.close();

        int length = S.length();
        int index = 0;
        int count = 0;
        double sum = 0.0;

        while (index < length) {
            if (index + 1 < length) {
                String temp = S.substring(index, index + 2);

                if (temp.equals("A+")) {
                    count++;
                    sum += 4.5;
                    index += 2;
                    continue;
                } else if (temp.equals("B+")) {
                    count++;
                    sum += 3.5;
                    index += 2;
                    continue;
                } else if (temp.equals("C+")) {
                    count++;
                    sum += 2.5;
                    index += 2;
                    continue;
                } else if (temp.equals("D+")) {
                    count++;
                    sum += 1.5;
                    index += 2;
                    continue;
                }

                switch (S.charAt(index++)) {
                    case 'A':
                        count++;
                        sum += 4.0;
                        break;
                    case 'B':
                        count++;
                        sum += 3.0;
                        break;
                    case 'C':
                        count++;
                        sum += 2.0;
                        break;
                    case 'D':
                        count++;
                        sum += 1.0;
                        break;
                    default:
                        count++;
                        break;
                }
            } else {
                switch (S.charAt(index++)) {
                    case 'A':
                        count++;
                        sum += 4.0;
                        break;
                    case 'B':
                        count++;
                        sum += 3.0;
                        break;
                    case 'C':
                        count++;
                        sum += 2.0;
                        break;
                    case 'D':
                        count++;
                        sum += 1.0;
                        break;
                    default:
                        count++;
                        break;
                }
            }
        }

        System.out.printf("%.5f", sum / count);
    }
}