function bouncer(arr) {
  
  arr = arr.filter(Boolean);
  
  return arr;
}

bouncer([7, "ate", "", false, 9]);