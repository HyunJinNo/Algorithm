import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String[] str = br.readLine().split(" ");
        int n = Integer.parseInt(str[0]); // 1 <= n <= 100000
        int m = Integer.parseInt(str[1]); // 1 <= m <= 100000
        HashMap<String, Integer> map = new HashMap<String, Integer>();

        for (int i = 0; i < n; i++) {
            String word = br.readLine();
            if (word.length() >= m) {
                map.put(word, map.getOrDefault(word, 0) + 1);
            }
        }

        br.close();

        ArrayList<String> list = new ArrayList<String>(map.keySet());
        list.sort((o1, o2) -> {
            if (map.get(o1) > map.get(o2)) {
                return -1;
            } else if (map.get(o1) < map.get(o2)) {
                return 1;
            } else {
                if (o1.length() > o2.length()) {
                    return -1;
                } else if (o1.length() < o2.length()) {
                    return 1;
                } else {
                    return o1.compareTo(o2);
                }
            }
        });

        StringBuilder sb = new StringBuilder();
        for (String word : list) {
            sb.append(word).append("\n");
        }
        bw.write(sb.toString());
        bw.flush();
        bw.close();
    }
}