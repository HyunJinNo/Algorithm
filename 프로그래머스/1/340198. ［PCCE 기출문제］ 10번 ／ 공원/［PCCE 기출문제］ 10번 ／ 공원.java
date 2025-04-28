class Solution {
    // 1 <= mats.length <= 10
    // 1 <= mats[i] <= 20
    // 1 <= park.length <= 50
    // 1 <= park[i].length <= 50
    public int solution(int[] mats, String[][] park) {
        int answer = -1;
        
        for (int row = 0; row < park.length; row++) {
            for (int col = 0; col < park[0].length; col++) {
                for (int i = 0; i < mats.length; i++) {
                    int length = mats[i];
                        
                    if (row + length <= park.length && col + length <= park[0].length) {
                        boolean flag = true;
                        
                        loop: for (int a = 0; a < length; a++) {
                            for (int b = 0; b < length; b++) {
                                if (!park[row + a][col + b].equals("-1")) {
                                    flag = false;
                                    break loop;
                                }
                            }
                        }
                        
                        if (flag) {
                            answer = Math.max(answer, length);
                        }
                    }
                }
            }
        }
        
        return answer;
    }
}