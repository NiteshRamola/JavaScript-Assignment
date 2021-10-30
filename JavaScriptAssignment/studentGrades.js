function calGrade(avgMarks){
    if(avgMarks<60){
        return 'F';
    }
    if(avgMarks<70){
        return 'D';
    }
    if(avgMarks<80){
        return 'C';
    }
    if(avgMarks<90){
        return 'B';
    }
    return 'A';
}

function calAverage(marks){
    let avgMarks = 0, totalMarks = 0;
    for(let mark of marks){
        totalMarks += mark;
    }
    avgMarks = totalMarks / marks.length;
    return calGrade(avgMarks);
}

console.log(calAverage([70,70,65]));