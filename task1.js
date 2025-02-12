function generatePascalsTriangle(numRows) {
    if (numRows <= 0) return [];
    
    let triangle = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1];
        let newRow = [1]; 
        
        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        
        newRow.push(1);
        triangle.push(newRow);
    }
    
    return triangle;
}

console.log('Task 1: Generate Pascals Triangle');
console.log(generatePascalsTriangle(5));
