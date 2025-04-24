class Solution {
    public int solution(String[][] board, int h, int w) {
        int answer = 0;
        String color = board[h][w];
        
        if (h - 1 >= 0 && color.equals(board[h - 1][w])) {
            answer++;
        }
        
        if (h + 1 < board.length && color.equals(board[h + 1][w])) { 
            answer++;
        }
        
        if (w - 1 >= 0 && color.equals(board[h][w - 1])) {
            answer++;
        }
        
        if (w + 1 < board[0].length && color.equals(board[h][w + 1])) {
            answer++;
        }
        
        return answer;
    }
}