function generatePascalsTriangle(numRows) {
    if (numRows < 1 || numRows > 30) return [];
    
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

// Example usage:
console.log(generatePascalsTriangle(5));