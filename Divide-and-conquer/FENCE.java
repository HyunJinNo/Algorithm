import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int N = sc.nextInt();
            int[] height = new int[N];

            for (int j = 0; j < N; j++) {
                height[j] = sc.nextInt();
            }

            System.out.println(findAnswer(height, 0, N - 1));
        }
    }

    public static int findAnswer(int[] height, int left, int right) {
        if (left == right) {
            return height[left];
        }

        int middle = (left + right) / 2;
        int lo = middle;
        int hi = middle + 1;
        int result = Math.max(findAnswer(height, left, lo), findAnswer(height, hi, right));
        int h = Math.min(height[lo], height[hi]);

        result = Math.max(result, h * (hi - lo + 1));
        while (left < lo || hi < right) {
            if (hi < right && (left == lo || height[lo - 1] < height[hi + 1])) {
                hi++;
                h = Math.min(h, height[hi]);
            } else {
                lo--;
                h = Math.min(h, height[lo]);
            }

            result = Math.max(result, h * (hi - lo + 1));
        }

        return result;
    }
}