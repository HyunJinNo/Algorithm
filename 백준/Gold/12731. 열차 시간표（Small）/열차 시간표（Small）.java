import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine().trim()); // 테스트 케이스의 개수, 1 <= N <= 100
        StringBuilder sb = new StringBuilder();

        for (int i = 1; i <= N; i++) {
            int T = Integer.parseInt(br.readLine().trim()); // 회차 시간, 0 <= T <= 5ㄴㄴ
            String[] temp = br.readLine().trim().split(" ");
            int NA = Integer.parseInt(temp[0]); // A에서 B로 가는 열차의 수, 0 <= NA <= 20
            int NB = Integer.parseInt(temp[1]); // B에서 A로 가는 열차의 수, 0 <= NB <= 20

            int resultA = 0;
            int resultB = 0;
            int countA = 0;
            int countB = 0;
            int indexA = 0;
            int indexB = 0;
            int[][] arrA = new int[NA][2];
            int[][] arrB = new int[NB][2];
            PriorityQueue<Integer> pqA = new PriorityQueue<>();
            PriorityQueue<Integer> pqB = new PriorityQueue<>();

            for (int j = 0; j < NA; j++) {
                String[] time = br.readLine().trim().split(" ");
                int startTime = getTime(time[0]);
                int endTime = getTime(time[1]) + T;
                arrA[j] = new int[]{startTime, endTime};
            }

            for (int j = 0; j < NB; j++) {
                String[] time = br.readLine().trim().split(" ");
                int startTime = getTime(time[0]);
                int endTime = getTime(time[1]) + T;
                arrB[j] = new int[]{startTime, endTime};
            }

            Arrays.sort(arrA, Comparator.comparingInt(arr -> arr[0]));
            Arrays.sort(arrB, Comparator.comparingInt((arr) -> arr[0]));

            while (indexA < NA || indexB < NB) {
                int currentTime;

                if (indexA >= NA) {
                    currentTime = arrB[indexB][0];
                } else if (indexB >= NB) {
                    currentTime = arrA[indexA][0];
                } else {
                    currentTime = Math.min(arrA[indexA][0], arrB[indexB][0]);
                }

                while (!pqA.isEmpty() && currentTime >= pqA.peek()) {
                    countA++;
                    pqA.poll();
                }

                while (!pqB.isEmpty() && currentTime >= pqB.peek()) {
                    countB++;
                    pqB.poll();
                }

                if (indexA >= NA) {
                    pqA.offer(arrB[indexB++][1]);
                    if (countB == 0) {
                        resultB++;
                    } else {
                        countB--;
                    }
                } else if (indexB >= NB) {
                    pqB.offer(arrA[indexA++][1]);
                    if (countA == 0) {
                        resultA++;
                    } else {
                        countA--;
                    }
                } else if (arrA[indexA][0] < arrB[indexB][0]) {
                    pqB.offer(arrA[indexA++][1]);
                    if (countA == 0) {
                        resultA++;
                    } else {
                        countA--;
                    }
                } else if (arrA[indexA][0] > arrB[indexB][0]) {
                    pqA.offer(arrB[indexB++][1]);
                    if (countB == 0) {
                        resultB++;
                    } else {
                        countB--;
                    }
                } else {
                    pqA.offer(arrB[indexB++][1]);
                    pqB.offer(arrA[indexA++][1]);

                    if (countA == 0) {
                        resultA++;
                    } else {
                        countA--;
                    }

                    if (countB == 0) {
                        resultB++;
                    } else {
                        countB--;
                    }
                }
            }

            sb.append("Case #")
                    .append(i)
                    .append(": ")
                    .append(resultA)
                    .append(" ")
                    .append(resultB)
                    .append("\n");
        }

        System.out.print(sb.toString().trim());
        br.close();

    }

    private static int getTime(String str) {
        int hour = Integer.parseInt(str.substring(0, 2));
        int minute = Integer.parseInt(str.substring(3));
        return 60 * hour + minute;
    }
}