import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        while (true) {
            String[] temp = br.readLine().trim().split(" ");
            String name = temp[0];
            int age = Integer.parseInt(temp[1]);
            int weight = Integer.parseInt(temp[2]);

            if (name.equals("#") && age == 0 && weight == 0) {
                System.out.print(sb.toString().trim());
                br.close();
                break;
            }

            if (age > 17 || weight >= 80) {
                sb.append(name).append(" Senior\n");
            } else {
                sb.append(name).append(" Junior\n");
            }
        }
    }
}