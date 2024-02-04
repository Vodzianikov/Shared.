
// Promise


// pending
// fulfilled => выполнен успешно
// rejected => отклонен, т.е. выполнен с ошибкой

// const developer = {
//     name: 'Maxim',
//     isJSDev: true
// };

// const promise1 = new Promise((resolve, reject) => {
//     if (developer.isJSDev) {
//         setTimeout(() => {
//             resolve(`${developer.name} является JS разработчиком`);
//         }, 2000);
//     } else {
//         reject(`${developer.name} НЕ является JS разработчиком`);
//     }
// });

// console.log(promise1);

// // then, catch, finally

// promise1
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((response) => {
//         console.log(response);
//     })
//     .finally(() => {
//         console.log('finally');
//     })




// fetch => возвращает промис

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';


function createTodoElement(text) {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);
    return todoElement;
}

const dataContainer = document.querySelector('#data-container');

const getAllTodos = () => {
    const result = fetch(TODOS_URL, {
        method: 'GET'
    });

    result
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                throw Error('Ошибка запроса');
            }
            return response.json();
        })
        .then((todos) => {
            todos.forEach((todo) => {
                const todoHTML = createTodoElement(todo.title);
                dataContainer.append(todoHTML);
            });
            console.log(todos);
        })
        .catch((error) => {
            console.log(error);
        });
};

getAllTodos();



// text()
// json() - декодировать данные


