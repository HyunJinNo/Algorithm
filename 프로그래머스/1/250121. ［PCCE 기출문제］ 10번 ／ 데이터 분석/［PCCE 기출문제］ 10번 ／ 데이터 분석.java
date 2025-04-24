import java.util.*;

class Solution {
    // 1 <= data.length <= 500
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        int[][] filteredData = new int[1][1];
        
        switch (ext) {
            case "code":
                filteredData = Arrays.stream(data).filter(value -> value[0] <= val_ext).toArray(int[][]::new);
                break;
            case "date":
                filteredData = Arrays.stream(data).filter(value -> value[1] <= val_ext).toArray(int[][]::new);
                break;
            case "maximum":
                filteredData = Arrays.stream(data).filter(value -> value[2] <= val_ext).toArray(int[][]::new);
                break;
            case "remain":
                filteredData = Arrays.stream(data).filter(value -> value[3] <= val_ext).toArray(int[][]::new);
                break;
            default:
                break;
        }
        
        switch (sort_by) {
            case "code":
                Arrays.sort(filteredData, (a, b) -> {
                   return a[0] - b[0];
                });
                break;
            case "date":
                Arrays.sort(filteredData, (a, b) -> {
                   return a[1] - b[1];
                });
                break;
            case "maximum":
                Arrays.sort(filteredData, (a, b) -> {
                   return a[2] - b[2];
                });
                break;
            case "remain":
                Arrays.sort(filteredData, (a, b) -> {
                   return a[3] - b[3];
                });
                break;
            default:
                break;
        }
        
        return filteredData;
    }
}