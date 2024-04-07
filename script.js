    //* <!-- ========== Hamburger script ========== -->

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu');
    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    })
    navMenu.addEventListener('click', ()=>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })

    //? <!-- ========== Dashboard Page script ========== -->
    //* <!-- ========== Menu Section Toggle script ========== -->

document.addEventListener("DOMContentLoaded", function() {
    var firstSection = document.querySelector('.menuSection');
    firstSection.classList.add('active');
});
function toggleMenu(sectionId) {
    var sections = document.querySelectorAll('.menuSection');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}

    //* <!-- ========== Dashboard Inner Section ========== -->

document.addEventListener("DOMContentLoaded", function() {
    var firstSection = document.querySelector('.userInfo');
    firstSection.classList.add('active');
});
function depositMenu(sectionId) {
    var sections = document.querySelectorAll('.userInfo');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}

    //* <!-- ========== user value select ========== -->

const buttons = document.querySelectorAll('#paymentBtn');
const inputField = document.getElementById('paymentInput');
const valueBtn = document.getElementById('paymentValueBtn');
function updateValue(value) {
    valueBtn.textContent = value;
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
    updateValue(button.textContent);
});
});
inputField.addEventListener('input', () => {
    updateValue(inputField.value);
});

    //* <!-- ========== Copy Binance ID script ========== -->

const copyText = document.getElementById('copyText');
const copyButton = document.getElementById('copyButton');
copyText.addEventListener('click', function() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();            
    alert('Text copied to clipboard');
});
copyButton.addEventListener('click', function() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    alert('Text copied to clipboard');
});

    //* <!-- ========== Password Change script ========== -->

document.getElementById("changePasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var currentPassword = document.getElementById("currentPassword").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
        if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
    }
    console.log("Current Password: ", currentPassword);
    console.log("New Password: ", newPassword);
    console.log("Confirm Password: ", confirmPassword);
    document.getElementById("changePasswordForm").reset();
    alert("Password has been changed successfully!");
    });


    //* <!-- ========== Total team balance btn script ========== -->

let total = 0;
document.querySelectorAll('.teamBalanceFunction').forEach(balanceElement => {
    const value = parseInt(balanceElement.textContent.replace('Value: ', ''));
    total += value;
});
document.getElementById('totalTeamValue').textContent = total;


    //* <!-- ========== Whole Profit Margin script ========== -->

  document.addEventListener("DOMContentLoaded", function() {
    let displayAllCurrencies = false;
    let timeoutDuration = 24 * 60 * 60 * 1000;
    const cryptoData = [
        { name: "Bitcoin"},
        { name: "Wrapped Bitcoin"},
        { name: "Ethereum"},
        { name: "TetherUSD"},
        { name: "USDC"},
        { name: "Cardano"},
        { name: "Chainlink"},
        { name: "Polygon"},
        { name: "Toncoin"},
        { name: "Cosmos"},
        { name: "PEPE"},
        { name: "THORChain"},
        { name: "BNB"},
        { name: "TRON"},
        { name: "Bitcoin Cash"},
        { name: "Solana"},
        { name: "Litecoin"},
        { name: "Avalanche"},
        { name: "Dash"},
        { name: "Ethereum Classic"},
        { name: "Zcash"},
        { name: "Dogecoin"},
        { name: "Ether.fi"},
        { name: "Lido Staked"},
        { name: "Chainlink"},
        { name: "Polygon"},
        { name: "Internet Computer"},
        { name: "Uniswap"},
        { name: "Aptos"},
        { name: "UNUS"},
    ];
    const cryptoTableBody = document.getElementById("cryptoTableBody");
    function addCryptoRows(cryptoData) {
        cryptoData.forEach(crypto => {
            const row = document.createElement("tr");
            const storedPValue = sessionStorage.getItem(`${crypto.name.replace(/\s+/g, '-').toLowerCase()}-p`);
            const pValue = storedPValue ? parseFloat(storedPValue) : (Math.random() * 2) + 1;
            row.innerHTML = `
                <td>${crypto.name}</td>
                <td><p id="${crypto.name.replace(/\s+/g, '-').toLowerCase()}-p">${pValue.toFixed(1)}</p></td>
                <td><button onclick="openTradePopup('${crypto.name}', ${pValue.toFixed(1)})">Trade</button></td>
            `;
            cryptoTableBody.appendChild(row);
        });
    }
    function removeExcessRows() {
        const rowsToRemove = Array.from(cryptoTableBody.children).slice(25);
        rowsToRemove.forEach(row => {
            row.remove();
        });
    }
    addCryptoRows(cryptoData);
    setTimeout(updatePValues, 300000);
    function updatePValues() {
        const cryptoData = [
            { name: "Bitcoin"},
            { name: "Wrapped Bitcoin"},
            { name: "Ethereum"},
            { name: "TetherUSD"},
            { name: "USDC"},
            { name: "Cardano"},
            { name: "Chainlink"},
            { name: "Polygon"},
            { name: "Toncoin"},
            { name: "Cosmos"},
            { name: "PEPE"},
            { name: "THORChain"},
            { name: "BNB"},
            { name: "TRON"},
            { name: "Bitcoin Cash"},
            { name: "Solana"},
            { name: "Litecoin"},
            { name: "Avalanche"},
            { name: "Dash"},
            { name: "Ethereum Classic"},
            { name: "Zcash"},
            { name: "Dogecoin"},
            { name: "Ether.fi"},
            { name: "Lido Staked"},
            { name: "Chainlink"},
            { name: "Polygon"},
            { name: "Internet Computer"},
            { name: "Uniswap"},
            { name: "Aptos"},
            { name: "UNUS"},
        ];
        cryptoData.forEach(crypto => {
            const pElement = document.getElementById(`${crypto.name.replace(/\s+/g, '-').toLowerCase()}-p`);
            if (pElement) {
                const newPValue = (Math.random() * 2) + 1;
                pElement.textContent = newPValue.toFixed(1);
                sessionStorage.setItem(`${crypto.name.replace(/\s+/g, '-').toLowerCase()}-p`, newPValue.toFixed(1));
            }
        });
        setTimeout(updatePValues, timeoutDuration);
    }
    setTimeout(() => {
        if (displayAllCurrencies) {
            displayAllCurrencies = false;
            timeoutDuration = 24 * 60 * 60 * 1000;
            removeExcessRows();
        } else {
            displayAllCurrencies = true;
            timeoutDuration = 24 * 60 * 60 * 1000;
            const additionalCryptoData = [];
            addCryptoRows(additionalCryptoData);
            removeExcessRows();
        }
    }, timeoutDuration);
});

function openTradePopup(cryptoName, pValue) {
    const modal = document.getElementById("myModal");
    const popupContent = document.getElementById("popupContent");
    popupContent.textContent = `${cryptoName}`;
    const popupContents = document.getElementById("popupContents");
    popupContents.textContent = `${pValue}`;
    const estimatedAmountInput = document.getElementById("estimatedAmount");
    estimatedAmountInput.value = "";
    estimatedAmountInput.addEventListener("input", function() {
        const inputValue = parseFloat(estimatedAmountInput.value);
        if (!isNaN(inputValue)) {
            const tradeProfit = calculateDepositProfit(inputValue) + (inputValue * pValue) / 100;
            const estimatedProfit = document.getElementById("estimatedProfit");
            estimatedProfit.textContent = `${tradeProfit.toFixed(2)}`;
        }
    });
    modal.style.display = "block";
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
        estimatedAmountInput.value = "";
        const estimatedProfit = document.getElementById("estimatedProfit");
        estimatedProfit.textContent = "";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            estimatedAmountInput.value = "";
            const estimatedProfit = document.getElementById("estimatedProfit");
            estimatedProfit.textContent = "";
        }
    }
}
function calculateDepositProfit(depositAmount){
    let profit = 0;
    if (depositAmount >= 20 && depositAmount < 35) {
        profit = 0.001;
    } else if (depositAmount >= 35 && depositAmount < 50) {
        profit = 0.002;
    } else if (depositAmount >= 50 && depositAmount < 100) {
        profit = 0.003;
    } else if (depositAmount >= 100 && depositAmount < 250) {
        profit = 0.004;
    } else if (depositAmount >= 250 && depositAmount < 400) {
        profit = 0.005;
    } else if (depositAmount >= 400 && depositAmount < 800) {
        profit = 0.006;
    } else if (depositAmount >= 800 && depositAmount < 1300) {
        profit = 0.007;
    } else if (depositAmount >= 1300 && depositAmount < 1800) {
        profit = 0.008;
    } else if (depositAmount >= 1800 && depositAmount < 2500) {
        profit = 0.009;
    } else if (depositAmount >= 2500) {
        profit = 0.01;
    }
    return profit * 100;
}