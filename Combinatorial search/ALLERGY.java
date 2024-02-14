import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 친구의 수, 1 ~ 20
    public static int m; // 음식의 수, 1 ~ 20
    public static String[] friends;
    public static int[] visited;
    public static ArrayList<HashSet<Integer>> canEat = new ArrayList<HashSet<Integer>>();
    public static int answer;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int T = sc.nextInt(); T > 0; T--) {
            n = sc.nextInt();
            m = sc.nextInt();

            friends = new String[n];
            for (int i = 0; i < n; i++) {
                friends[i] = sc.next();
            }
            visited = new int[n];

            canEat.clear();
            for (int i = 0; i < n; i++) {
                canEat.add(new HashSet<Integer>());
            }

            for (int i = 0; i < m; i++) {
                int num = sc.nextInt();
                for (int j = 0; j < num; j++) {
                    String name = sc.next();
                    for (int k = 0; k < n; k++) {
                        if (friends[k].equals(name)) {
                            canEat.get(k).add(i);
                            break;
                        }
                    }
                }
            }

            answer = 21;

            search(0, 0);
            System.out.println(answer);
        }
    }

    public static void search(int index, int chosen) {
        if (chosen >= answer) {
            return;
        }

        if (index >= n) {
            boolean flag = true;
            for (int check : visited) {
                if (check == 0) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                answer = chosen;
            }

            return;
        }


        boolean flag = true;

        for (int i = index; i < n; i++) {
            if (visited[i] == 0) {
                for (int food : canEat.get(i)) {
                    for (int j = i; j < n; j++) {
                        if (canEat.get(j).contains(food)) {
                            visited[j]++;
                        }
                    }
                    search(i + 1, chosen + 1);
                    for (int j = i; j < n; j++) {
                        if (canEat.get(j).contains(food)) {
                            visited[j]--;
                        }
                    }
                }

                flag = false;
                break;
            }
        }

        if (flag) {
            search(n, chosen);
        }
    }
}