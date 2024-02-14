import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[] cacheLen;
    public static int[] cacheCnt;
    public static ArrayList<Integer> list = new ArrayList<Integer>();
    public static int length;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();  // 원소의 수, 1 ~ 500
            int k = sc.nextInt();  // k번째 LIS, 1 ~ (2 * (10^9))

            int[] seq = new int[n];
            for (int j = 0; j < n; j++) {
                seq[j] = sc.nextInt();
            }

            cacheLen = new int[n];
            cacheCnt = new int[n];
            list.clear();
            length = 0;

            for (int index = 0; index < seq.length; index++) {
                length = Math.max(length, findLen(seq, index));
            }

            findAnswer(seq, -1, k, 0);

            System.out.println(length);
            for (int num : list) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }

    public static int findLen(int[] seq, int index) {
        if (cacheLen[index] != 0) {
            return cacheLen[index];
        }

        int length = 1;
        for (int i = index + 1; i < seq.length; i++) {
            if (seq[index] < seq[i]) {
                length = Math.max(length, 1 + findLen(seq, i));
            }
        }

        cacheLen[index] = length;
        return length;
    }

    public static int findCnt(int[] seq, int index) {
        if (cacheCnt[index] != 0) {
            return cacheCnt[index];
        } else if (findLen(seq, index) == 1) {
            cacheCnt[index] = 1;
            return 1;
        }

        int count = 0;
        for (int i = index + 1; i < seq.length; i++) {
            if (seq[index] < seq[i] && findLen(seq, index) == findLen(seq, i) + 1) {
                count = Math.min(2000000001, count + findCnt(seq, i));
            }
        }

        cacheCnt[index] = count;
        return count;
    }

    public static void findAnswer(int[] seq, int index, int k, int skip) {
        if (index != -1) {
            list.add(seq[index]);
        }

        if (index != -1 && findLen(seq, index) == 1) {
            return;
        }

        ArrayList<Integer> temp = new ArrayList<Integer>();

        for (int i = index + 1; i < seq.length; i++) {
            if (index == -1) {
                if (findLen(seq, i) == length) {
                    temp.add(i);
                }
            } else {
                if (seq[index] < seq[i] && findLen(seq, index) == findLen(seq, i) + 1) {
                    temp.add(i);
                }
            }
        }

        temp.sort(Comparator.reverseOrder());

        for (int idx : temp) {
            int cnt = findCnt(seq, idx);
            if (k <= skip + cnt) {
                findAnswer(seq, idx, k, skip);
                break;
            } else {
                skip += cnt;
            }
        }
    }
}
