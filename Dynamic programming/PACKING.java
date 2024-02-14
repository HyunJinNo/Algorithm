import java.util.ArrayList;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[][] visited;
    public static int n;
    public static int w;
    public static Item[] item;
    public static ArrayList<String> list;
    public static int answer;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            n = sc.nextInt();  // 물건의 수, 1 ~ 100
            w = sc.nextInt();  // 용량, 1 ~ 1000
            visited = new int[w + 1][n + 1];
            item = new Item[n];
            list = new ArrayList<String>();
            answer = 0;

            for (int j = 0; j < n; j++) {
                item[j] = new Item(sc.next(), sc.nextInt(), sc.nextInt());
            }

            System.out.print(pack(w, 0) + " ");
            reconstruct(w, 0);
            System.out.println(list.size());
            for (String name : list) {
                System.out.println(name);
            }
        }
    }

    public static int pack(int capacity, int index) {
        if (visited[capacity][index] != 0) {
            return visited[capacity][index];
        } else if (index >= item.length) {
            return 0;
        }

        int result = pack(capacity, index + 1);
        if (capacity >= item[index].volume) {
            result = Math.max(result, item[index].need + pack(capacity - item[index].volume, index + 1));
        }

        visited[capacity][index] = result;
        return result;
    }

    public static void reconstruct(int capacity, int index) {
        if (index >= item.length) {
            return;
        }

        if (pack(capacity, index) == pack(capacity, index + 1)) {
            reconstruct(capacity, index + 1);
        } else {
            list.add(item[index].name);
            reconstruct(capacity - item[index].volume, index + 1);
        }
    }

    public static class Item {
        public String name;
        public int volume;
        public int need;

        public Item(String name, int volume, int need) {
            this.name = name;
            this.volume = volume;
            this.need = need;
        }
    }
}
