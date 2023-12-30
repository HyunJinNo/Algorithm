# BOGGLE.md

### Source Code
```Java
import java.util.Scanner;

public class Main {
    public static boolean hasWord = false;
    public static char[][] arr = new char[5][5];
  
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
	  	
        for (int i = 0; i < num; i++) {
            for (int j = 0; j < 5; j++) {
                String str = sc.next();
                for (int k = 0; k < 5; k++) {
                    arr[j][k] = str.charAt(k);
                }
            }
		  
            int temp = sc.nextInt();
            for (int j = 0; j < temp; j++) {
                String str = sc.next();
                hasWord = false;
			  
                for (int x = 0; x < 5; x++) {
                    for (int y = 0; y < 5; y++) {
                        findWord(x, y, str, 0);	
                    }
                }
			  	
                System.out.print(str + " ");	
                if (hasWord == true) {
                    System.out.println("YES");
                } else {
                    System.out.println("NO");
                }
            }
        }	  	
    }
  
    public static void findWord(int x, int y, String word, int index) {
        if (hasWord == true) {
            return;
        }
	  	
        if (arr[x][y] == word.charAt(index)) {
            if (index == word.length() - 1) {
                hasWord = true;
                return;
            }
		  
            for (int i = -1; i <= 1; i++) {
                for (int j = -1; j <= 1; j++) {
                    if (i == 0 && j == 0) {
                        continue;
                    }
				  
                    int newX = x + i;
                    int newY = y + j;
                    if (newX >= 0 && newX < arr.length && newY >= 0 && newY < arr[0].length) {
                        findWord(newX, newY, word, index + 1);
                    }
                }
            }
        }
    }
}
```
