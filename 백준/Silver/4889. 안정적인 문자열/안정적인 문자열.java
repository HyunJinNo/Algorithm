import java.io.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int index = 1;
        StringBuilder sb = new StringBuilder();

        while (true) {
            String input = br.readLine().trim();

            if (input.charAt(0) == '-') {
                break;
            }

            int length = input.length();
            int result = 0;
            int count = 0;

            for (int i = 0; i < length; i++) {
                if (input.charAt(i) == '{') {
                    count++;
                } else if (count == 0) {
                    result++;
                    count++;
                } else {
                    count--;
                }
            }

            if (count != 0) {
                result += (count / 2);
            }

            sb.append(index).append(". ").append(result).append("\n");
            index++;
        }

        bw.write(sb.toString().trim());
        br.close();
        bw.flush();
        bw.close();
    }
}
