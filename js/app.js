//set event listener 
document.querySelector('button').addEventListener('click', getQuestions)

function getQuestions(){
  // const choice = document.querySelector('input').value
  const url = 'https://opentdb.com/api.php?amount=10'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //grab results from data
        console.log(data.results)
        //loop through array for rach object and then get question property
        data.results.forEach(obj => {
          console.log(obj.question)
          document.querySelector('h2').innerText = obj.question
          //flies through loop currently so only showing last question. Will continue to work on JS to correct issue. 
        })
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}