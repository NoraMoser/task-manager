const PracticeJS = () => {

  const reverseString = (string) => {
    return string.split("").reverse().join("");
  }

  const evenOrOdd = (number) => {
    if (number % 2 === 0) {
      return "Even"
    } else {
      return "Odd"
    }
  }

  const highestInArray = (array) => {
    array.sort((a,b) => a - b)
    return array[array.length -1]
  }

  const filterEvenNumbers = (array) => {
    return array.filter((item) => item % 2 !== 0).join(' ,')
  }

  const countOccurances = (array) => {
    return array.reduce((index, item) => {
      index[item] = (index[item] || 0) + 1
      return index
    }, {})
  }
  setTimeout(() => console.log("hi"), 1000)

  const fetchStuff = async (url) => {
    let data = [];
    const fetchingStuff = await fetch(url)
    if (fetchingStuff.ok) {
      data = await fetchingStuff.json()
    }
    return data;
  }
  
  const getData =async () => {
    const data = await fetchStuff('https://api.github.com/users');
    console.log(data) 
  }
  getData()
  return (
    <div>
      <p>here is the result of the reverse string: {reverseString("Nora")}</p>
      <p>is 21 even or odd? {evenOrOdd(21)}</p>
      <p>highest # in [1,7,4,2,9,8]: {highestInArray([1,7,4,2,9,8])}</p>
      <p>filter out the even numbers [1,10,3,4,5,18,7,16]: {filterEvenNumbers([1,10,3,4,5,18,7,16])}</p>
      <p>how many occurances in the array ["a", "b", "a", "c", "c", "a"]:</p>
      <ul>
       {Object.entries(countOccurances(["a", "b", "a", "c", "c", "a"])).map(([key, value]) => (
        <li key={key}>{key} : {value}</li>
      ))}</ul>

</div>
  )
}

export default PracticeJS