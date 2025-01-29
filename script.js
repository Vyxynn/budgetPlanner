let data = {
    income: 0,
    expenses: {
        rent: 0,
        utilities: 0,
        groceries: 0,
        transport: 0,
        entertainment: 0,
        misc: 0
    },
    savingsTarget: 0
}

function addSalary(){
    data.income = Number(document.getElementById('salaryInput').value);
    console.log('Income:', data.income);
    updateScreen();
}

function addRent(){
    data.expenses.rent = Number(document.getElementById('rentInput').value);
    console.log('Rent:', data.expenses.rent);
    updateScreen();
}

function addUtilities(){
    data.expenses.utilities = Number(document.getElementById('utilitiesInput').value);
    console.log('Utilities:', data.expenses.utilities);
    updateScreen();
}

function addGroceries(){
    data.expenses.groceries = Number(document.getElementById('groceriesInput').value);
    console.log('Groceries:', data.expenses.groceries);
    updateScreen();
}

function addTransport(){
    data.expenses.transport = Number(document.getElementById('transportInput').value);
    console.log('Transport:', data.expenses.transport);
    updateScreen();
}

function addEntertainment(){
    data.expenses.entertainment = Number(document.getElementById('entertainmentInput').value);
    console.log('Entertainment:', data.expenses.entertainment);
    updateScreen();
}

function addMisc(){
    data.expenses.misc = Number(document.getElementById('miscInput').value);
    console.log('Misc:', data.expenses.misc);
    updateScreen();
}

function setSavingsGoal(){
    data.savingsTarget = Number(document.getElementById('savingsInput').value);
    console.log('Savings Goal:', data.savingsTarget);
    updateScreen();
}

function updateScreen(){
    let yearlyIncome = data.income * 12;
    console.log('Yearly Income:', yearlyIncome);
    let totalExpenses = data.expenses.rent + data.expenses.utilities + data.expenses.groceries + data.expenses.transport + data.expenses.entertainment + data.expenses.misc;
    console.log('Total Expenses', totalExpenses);
    let yearlyExpenses = totalExpenses * 12;
    console.log('Yearly Expenses:', yearlyExpenses);
    let actualSavings = data.income - totalExpenses;
    console.log('Actual Savings:', actualSavings);

    document.getElementById('savingsGoal').innerHTML = data.savingsTarget;
    document.getElementById('actualSavings').innerHTML = actualSavings;
    document.getElementById('totalIncome').innerHTML = data.income;
    document.getElementById('housingExpenses').innerHTML = data.expenses.rent + data.expenses.utilities;
    document.getElementById('livingExpenses').innerHTML = data.expenses.groceries + data.expenses.transport;
    document.getElementById('otherExpenses').innerHTML = data.expenses.entertainment + data.expenses.misc;
    document.getElementById('totalExpenses').innerHTML = actualSavings;
    document.getElementById('remainingBudget').innerHTML = actualSavings;
    document.getElementById('yearlyIncome').innerHTML = yearlyIncome;
    document.getElementById('yearlyExpenses').innerHTML = yearlyExpenses;
    document.getElementById('yearlySavings').innerHTML = actualSavings * 12;
}