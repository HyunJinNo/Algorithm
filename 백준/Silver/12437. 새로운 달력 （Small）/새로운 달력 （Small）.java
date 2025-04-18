import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine()); // 테스트 케이스의 수, 1 <= T <= 100
        StringBuilder sb = new StringBuilder();

        for (int i = 1; i <= T; i++) {
            String[] temp = br.readLine().split(" ");
            int totalMonth = Integer.parseInt(temp[0]); // 총월수, 1 <= totalMonth <= 20
            int totalDaysOfMonth = Integer.parseInt(temp[1]); // 월당일수, 1 <= totalDaysOfMonth <= 10
            int totalDaysOfWeek = Integer.parseInt(temp[2]); // 주당일수, 1 <= totalDaysOfWeek <= 100

            int row = 0;
            int col = totalDaysOfWeek;

            for (int month = 1; month <= totalMonth; month++) {
                if (col != totalDaysOfWeek) {
                    row++;
                }

                for (int day = 1; day <= totalDaysOfMonth; day++) {
                    if (col == totalDaysOfWeek) {
                        row++;
                        col = 1;
                    } else {
                        col++;
                    }
                }
            }

            sb.append("Case #").append(i).append(": ").append(row).append("\n");
        }

        System.out.print(sb.toString().trim());
    }
}
