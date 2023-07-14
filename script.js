function calculateMinCost() {
  var str = document.getElementById('rope-lengths').value;
  var arr = str.split(',');
  var ropes = arr.map(function(str) {
    return parseInt(str);
  });

  // Helper function to get the minimum value and its index from an array
  function getMin(arr) {
    var min = arr[0];
    var minIndex = 0;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    return { value: min, index: minIndex };
  }

  var totalCost = 0;
  while (ropes.length > 1) {
    var min1 = getMin(ropes);
    ropes.splice(min1.index, 1);
    var min2 = getMin(ropes);
    ropes.splice(min2.index, 1);
    var sum = min1.value + min2.value;
    totalCost += sum;
    ropes.push(sum);
  }

  document.getElementById('result').innerHTML = totalCost;
}