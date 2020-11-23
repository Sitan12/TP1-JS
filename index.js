const input1 = document.querySelector('#formulaire')

input1.addEventListener('input', ({ target: { value } } ) => {
    if (value.length > 1)
    input1.style.backgroundColor = 'red'
}
)
email.addEventListener('input', ({ target: { value } } ) => {
    if (value.length === 0)
    email.style.borderColor = 'black'
    else if( !value.includes('@'))
    email.style.borderColor = 'red'
    else
    email.style.borderColor = 'green'
}
)
    password.addEventListener('input', ({ target: { value } } ) => {
    if (value.length < 8)
    password.style.borderColor = 'red'
    else
    password.style.borderColor = 'green'
}
)