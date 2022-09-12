class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement,currentStateTextElement){
        this.currentOperandTextElement = currentOperandTextElement
        this.previousOperandTextElement = previousOperandTextElement
        this.currentStateTextElement = currentStateTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.currentState = ''
        this.operation = undefined
    }


    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }


    appendNumber(number){
        if (number == '.' && this.currentOperand.includes('.')) return // only allows one single '.'
        this.currentOperand = this.currentOperand.toString() + number.toString()  // adds current number to a new string
    }


    chooseOperation(operation){
        if(this.currentOperand == '') return
        if(this.previousOperand != '')this.compute()
        
        this.operation = operation
        this.previousOperand = this.currentOperand  // when we select a new operation the current operand changes to previous
        this.currentOperand = ''
    }

    compute(){
        let computation  // result
        const prev = parseFloat(this.previousOperand)  // gets previusOperand string and converts to float
        const current = parseFloat(this.currentOperand)
        
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            case '-':
                computation = prev - current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
        return this.operation
    }


    
    updateDisplay(){
        
            this.currentOperandTextElement.innerText = this.currentOperand
            if(this.operation != null){
                this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
            } else{
                this.previousOperandTextElement.innerText =''
            }
        
     }
}


let result = true
const numberButtons = document.querySelectorAll('[data-number]') // gets everey element that contains the string data-number
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement  = document.querySelector('[data-current-operand]')
const currentStateTextElement  = document.querySelector('[data-current-state]')



const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement,currentStateTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText) //gets text from the html
        calculator.updateDisplay()
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText) //gets text from the html
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click' , button => {
    calculator.compute()
    result = false
    calculator.updateDisplay()
})


allClearButton.addEventListener('click' , button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click' , button => {
    calculator.delete()
    calculator.updateDisplay()
})
