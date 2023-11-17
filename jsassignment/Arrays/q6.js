function moveArrayElement(arr, fromIndex, toIndex) {
    if (fromIndex === toIndex || fromIndex < 0 || fromIndex >= arr.length || toIndex < 0 || toIndex >= arr.length) {
      return arr;
    }
    const elementToMove = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, elementToMove);
  
    return arr;
  }
  const myArray = [10, 20, 30, 40, 50];
  const fromIndex = 0;
  const toIndex = 2;
  moveArrayElement(myArray, fromIndex, toIndex);
  console.log(myArray); 