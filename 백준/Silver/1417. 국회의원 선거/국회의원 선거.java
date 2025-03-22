import java.io.*;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        int num = Integer.parseInt(br.readLine());
        int answer = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(Comparator.reverseOrder());

        for (int i = 1; i < N; i++) {
            pq.add(Integer.parseInt(br.readLine()));
        }

        while (!pq.isEmpty() && num <= pq.peek()) {
            num++;
            answer++;
            pq.add(pq.poll() - 1);
        }

        bw.write(String.valueOf(answer));
        bw.flush();
        bw.close();
    }
}