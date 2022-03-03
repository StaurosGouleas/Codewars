function modifiedSum(a, n) {
  let power=0
  let sum=0
  for (let i=0; i< a.length;i++){
    power=power+a[i]**n
    sum=sum+a[i]
  }
  return power-sum
}
