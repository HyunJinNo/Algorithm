# PICNIC

### Source Code
```Java
import java.util.Scanner;

public class Main {
    public static int answer = 0;
  
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = sc.nextInt();
        for (int i = 0; i < count; i++) {
            answer = 0;
            int numOfStudents = sc.nextInt();
            int numOfPairs = sc.nextInt();
            boolean[][] isFriend = new boolean[numOfStudents][numOfStudents];
	  
            for (int j = 0; j < numOfPairs; j++) {
                int student1 = sc.nextInt();
                int student2 = sc.nextInt();
                isFriend[student1][student2] = true;
                isFriend[student2][student1] = true;
            }
	  
            boolean[] visited = new boolean[numOfStudents];
	  
            findAnswer(visited, isFriend, numOfStudents);
	  
            System.out.println(answer);
        }
    }
  
    public static void findAnswer(boolean[] visited, boolean[][] isFriend, int left) {
        if (left == 0) {
            answer++;
            return;
        }
	
        int index = -1;
	
        for (int i = 0; i < visited.length; i++) {
            if (visited[i] == false) {
                index = i;
                break;
            }
        }
	
        if (index == -1) {
            return;
        }
	
        for (int i = index + 1; i < visited.length; i++) {
            if (visited[i] == false && isFriend[index][i] == true) {
                visited[index] = true;
                visited[i] = true;
                findAnswer(visited, isFriend, left - 2);
                visited[index] = false;
                visited[i] = false;
            }
        }
    }
}
```
