var details = {
    name: 'rafi',
    friendsAge: [23,43,32],
    age: 21,
    profession: 'student'
}

let json = JSON.stringify(details)
console.log(json)

let par = JSON.parse(json)
console.log(par)

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUser(json))

function displayUser(users) {
    const userName = users.map(user => user.username)
    const ul = document.getElementById('ul-container')
    for(let i = 0; i< userName.length; i++) {
        let user = userName[i]
        const li = document.createElement('li')
        li.innerText = user
        ul.appendChild(li)
    }
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(json => displayUser(json))

function displayUser(users) {
    const userName = users.map(user => user.username)
    const ul = document.getElementById('ul-container')
    for(let i = 0; i < userName.length; i++) {
        let user = userName[i]
        const li = document.createElement('li')
        li.innerText = user
        ul.appendChild(li)
    }
}


const submit = document.getElementById('submit')
submit.addEventListener('click', function() {
    const title = document.getElementById('title').value
    const body = document.getElementById('body').value
    const post = {title: title, body: body}
    toPostSurver(post)
})

// let postInfo = { title: 'foo', body: 'bar', userId: 1, }

function toPostSurver(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
