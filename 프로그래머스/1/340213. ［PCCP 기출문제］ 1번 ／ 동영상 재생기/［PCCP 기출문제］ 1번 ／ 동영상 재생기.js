function solution(video_len, pos, op_start, op_end, commands) {
    const video_arr = video_len.split(":").map(Number);
    const pos_arr = pos.split(":").map(Number);
    const op_start_arr = op_start.split(":").map(Number);
    const op_end_arr = op_end.split(":").map(Number);
    
    const video_seconds = video_arr[0] * 60 + video_arr[1];
    let pos_seconds = pos_arr[0] * 60 + pos_arr[1];
    const op_start_seconds = op_start_arr[0] * 60 + op_start_arr[1];
    const op_end_seconds = op_end_arr[0] * 60 + op_end_arr[1];
    
    if (pos_seconds >= op_start_seconds && pos_seconds <= op_end_seconds) {
        pos_seconds = op_end_seconds;
    }
    
    commands.forEach((command) => {
        if (command === "prev") {
            pos_seconds = Math.max(pos_seconds - 10, 0);
        } else { /* command === "next" */
            pos_seconds = Math.min(pos_seconds + 10, video_seconds);
        }
        
        if (pos_seconds >= op_start_seconds && pos_seconds <= op_end_seconds) {
            pos_seconds = op_end_seconds;
        }
    })
    
    return `${Math.floor(pos_seconds / 60).toString().padStart(2, "0")}:${(pos_seconds % 60).toString().padStart(2, "0")}`;
}