const btnRealize = document.querySelector("#btn-realize");
const result = document.querySelector("#result");
const amountInput = document.querySelector("#amount");

let balance = 1000;

function performOperation() {
    const operation = document.getElementById("operation").value;
    const amountValue = parseFloat(amountInput.value);
    switch (operation) {
        case "balance":
            checkBalance(balance);
            break;
        case "withdraw":
            withdrawValue(amountValue);
            break;
        case "deposit":
            depositValue(amountValue);
            break;
        default:
            result.textContent = "Operação inválida.";
            break;
    }
    amountInput.value = "";
}

const checkBalance = (balance) => {
    return (result.textContent = `Seu saldo é R$ ${balance.toFixed(2)}.`);
};

const withdrawValue = (value) => {
    try {
        if (isNaN(value) || value <= 0) {
            throw "Por favor, insira um valor válido.";
        }

        if (value > balance) {
            throw "Saldo insuficiente.";
        }
        balance -= value;
        return (result.textContent = `Saque de R$ ${value.toFixed(
            2
        )} realizado com sucesso. Saldo atual: R$ ${balance.toFixed(2)}.`);
    } catch (error) {
        result.textContent = error;
    }
};

const depositValue = (value) => {
    try {
        if (isNaN(value) || value <= 0) {
            throw "Por favor, insira um valor válido.";
        }

        balance += value;
        return (result.textContent = `Depósito de R$ ${value.toFixed(
            2
        )} realizado com sucesso. Saldo atual: R$ ${balance.toFixed(2)}.`);
    } catch (error) {
        result.textContent = error;
    }
};

btnRealize.addEventListener("click", performOperation);
