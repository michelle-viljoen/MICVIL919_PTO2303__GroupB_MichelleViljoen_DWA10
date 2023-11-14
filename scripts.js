const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT = 1

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const refresh = document.querySelector('[data-key="refresh"]')
const message = document.querySelector('.message')

/**
 * Handles the subtract event where each time the button is clicked, it takes 1 away from the displayed number 
 */
const subtractHandler = () => {
    noText()
    const newValue = parseInt(number.value) - STEP_AMOUNT;
    number.value = newValue;
   
    if (add.disabled === true) {
        add.disabled = false
    }
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true 
     } 
   
}

/**
 * Handles the add event where each time the button is clicked, it adds 1 to the displayed number 
 */
const addHandler = () => {
    noText()
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;
   
    if (subtract.disabled === true) {
        subtract.disabled = false
    }
    if (newValue >= MAX_NUMBER) {
        add.disabled = true 
     } 
    
        }

  /**
   * Displays a message to let the user know that the Tally Count has been reset if they clicked on the reset button
   */
  const messageHandler = () => {
  let newValue = parseInt(0)
  number.value = newValue
  message.innerText = "Tally Count has been reset"
  subtract.disabled = false
  add.disabled = false
}

/**
 *  Clears the message text, this function is used when you start adding or subtracting again 
 */
const noText = () => {
    message.innerText = ''
}

subtract.addEventListener('click', subtractHandler) 
add.addEventListener('click', addHandler)
refresh.addEventListener('click', messageHandler)


/** Animation */
const animation = document.querySelector('.animation-keyframes sl-animation');
  animation.keyframes = [
    {
      offset: 0,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fillMode: 'both',
      transformOrigin: 'center center',
      transform: 'rotate(0)'
    },
    {
      offset: 1,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fillMode: 'both',
      transformOrigin: 'center center',
      transform: 'rotate(90deg)'
    }
  ];
  



