function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n; i++) {
      let isSorted = true;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          isSorted = false;
        }
      }
      if (isSorted) {
        break;
      }
    }
    return array;
  }
  
  function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
    return array;
  }
  
  function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  
  function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === value) {
        return mid;
      } else if (array[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  
  const input = document.getElementById("input");
  const SelectionSortButton = document.getElementById("SelectionSortButton");
  const BubbleSortButton = document.getElementById("BubbleSortButton");
  const search = document.getElementById("search");
  const BinarySearchButton = document.getElementById("BinarySearchButton");
  const LinearSearchButton = document.getElementById("LinearSearchButton");
  const output1 = document.getElementById("output1");
  const output2 = document.getElementById("output2");
  
  let sorted = [];
  let sortedArray=[];
  
  
  SelectSortButton.addEventListener("click", () => {
    const array = input.value.trim().split(" ").map((value) => parseInt(value));
    sortedArray = selectionSort(array);
    output1.innerHTML = `Sorted array: ${sortedArray}`;
  });
  
  BubbleSortButton.addEventListener("click", () => {
    const array = input.value.trim().split(" ").map((value) => parseInt(value));
    sortedArray = bubbleSort(array);
    output1.innerHTML = `Sorted array: ${sortedArray}`;
  });
  
  LinearSearchButton.addEventListener("click", () => {
    const value = Number(search.value);
    let index = -1;
    if (sortedArray.length === 0) {
      output2.innerText = "Please sort the array first";
    } else if (isNaN(value)) {
      output2.innerText = "Please enter a valid number to search";
    } else {
      index = linearSearch(sortedArray, value);
      if (index === -1) {
        output2.innerText = `${value} not found in the sorted array`;
      } else {
        output2.innerText = `${value} found at index ${index} (using linear search)`;
      }
    }
  });
  BinarySearchButton.addEventListener("click", () => {
    const value = Number(search.value);
    let index = -1;
    if (sortedArray.length === 0) {
      output2.innerText = "Please sort the array first";
    } else if (isNaN(value)) {
      output2.innerText = "Please enter a valid number to search";
    } else {
      index = binarySearch(sortedArray, value);
      if (index === -1) {
        output2.innerText = `${value} not found in the sorted array`;
      } else {
        output2.innerText = `${value} found at index ${index} (using linear search)`;
      }
    }
  });