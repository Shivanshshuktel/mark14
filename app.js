const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const outputArea = document.querySelector("#output-text");



submitHandler = () => {

        if(Number(initialPrice.value)>=0 && Number(quantityOfStocks.value)>0 && Number(currentPrice.value)>=0){
            const initial = Number(initialPrice.value);
            const quantity = Number(quantityOfStocks.value);
            const current = Number(currentPrice.value);
        
            calculateProfitLoss(initial, quantity, current);
        }
        else{
            showOutput('Please enter valid input.');
        }
        
};

calculateProfitLoss = (initial, quantity, current) => {
    
        let net;
        let change;
        let changePercent;
    
        if(initial > current){
            change = (initial-current)*quantity;
            changePercent = ((current-initial)/initial)*100;
            net = 'loss';

            showOutput('Hey, The ' + net + ' is ' + change + ' and the percent is ' + changePercent + ' %.');
        }
        else if(initial < current){
            change = (current-initial)*quantity;
            changePercent = ((current-initial)/initial)*100;
            net = 'profit';
            showOutput('Hey, The ' + net + ' is ' + change + ' and the percent is ' + changePercent + ' %.');
        }
        else{
            net = 'no change';
            change = 0;
            changePercent = 0;
            showOutput('Hey, You incurred ' + net + '.');
        }
    };

function showOutput(message){
    outputArea.innerText = message;
}

    checkButton.addEventListener("click", () => {
        if(Number(initialPrice.value) === 0 || Number(quantityOfStocks.value) === 0 || Number(currentPrice.value) === 0){
            showOutput('Please do not leave any field blank');
        }
        else{
            submitHandler();
        }
    });
