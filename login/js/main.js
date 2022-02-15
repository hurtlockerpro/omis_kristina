
let btnSubmit = document.getElementById('btnSubmit')
let password = document.getElementById('password')
let username = document.getElementById('username')
let error = document.getElementById('error')


// rules 
// not empty
// 3 symbol min.
// max 15 symbols

btnSubmit.addEventListener('click', function(){
    console.log('clicked');

    error.innerText = ''

    // 1 username
    checkInputValue(username)
    // 2 password
    checkInputValue(password)
    
})

function checkInputValue(input)
{
    let elementTitle = input.id

    if (input.value.trim() == '')
    {
        console.log(elementTitle + ' is empty');
        error.innerText += elementTitle + ' is empty \n'
        error.classList.remove('d-none') // v1
        error.style.display = 'block'
    } 
    else if (
        input.value.trim().length <= 3 || 
        input.value.trim().length >= 16)
    {
        console.log('Enter ' + elementTitle + ' between 3-15 symbols');
        error.innerText += 'Enter ' + elementTitle + ' between 3-15 symbols \n'
        error.style.setProperty('display', 'block', 'important')
    } else {
        error.classList.add('d-none')
        error.removeAttribute('style')
    }
}