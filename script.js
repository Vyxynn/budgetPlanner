//Variables
let salary = 0;
let housing = [0 ,0];
let dailyLiving = [0 ,0];
let otherExpenses = [0, 0];
let totalExpenses = 0;
let savings = 0;

//Add Salary
function addSalary(){
    salary = document.getElementById('salaryInput').value;
    document.getElementById('totalIncome').innerHTML = salary;
    document.getElementById('yearlyIncome').innerHTML = salary * 12;
    ending();
}

//Add Rent
function addRent(){
    housing[0] = Number(document.getElementById('rentInput').value);
    document.getElementById('housingExpenses').innerHTML = housing[0] + housing[1];
    ending();
}

//Add Utilities
function addUtilities(){
    housing[1] = Number(document.getElementById('utilitiesInput').value);
    document.getElementById('housingExpenses').innerHTML = Number(housing[0]) + Number(housing[1]);
    ending();
}

//Add Groceries
function addGroceries(){
    dailyLiving[0] = Number(document.getElementById('groceriesInput').value);
    document.getElementById('livingExpenses').innerHTML = dailyLiving[0] + dailyLiving[1];
    ending();
}

//Add Transport
function addTransport(){
    dailyLiving[1] = Number(document.getElementById('transportInput').value);
    document.getElementById('livingExpenses').innerHTML = dailyLiving[0] + dailyLiving[1];
    ending();
}

//Add Entertainment
function addEntertainment(){
    otherExpenses[0] = Number(document.getElementById('entertainmentInput').value);
    document.getElementById('otherExpenses').innerHTML = otherExpenses[0] + otherExpenses[1];
    ending();
}

//Add Misc
function addMisc(){
    otherExpenses[1] = Number(document.getElementById('miscInput').value);
    document.getElementById('otherExpenses').innerHTML = otherExpenses[0] + otherExpenses[1];
    ending();
}

//Set Savings Goal
function setSavingsGoal(){
    goal = document.getElementById('savingsInput').value;
    document.getElementById('savingsGoal').innerHTML = goal;
}

//Ending
function ending(){
    //Monthly
    totalExpenses = housing[0] + housing[1] + dailyLiving[0] + dailyLiving[1] + otherExpenses[0] + otherExpenses[1];
    document.getElementById('totalExpenses').innerHTML = totalExpenses;
    
    savings = salary - totalExpenses;
    document.getElementById('remainingBudget').innerHTML = savings;
    document.getElementById('actualSavings').innerHTML = savings;

    //Yearly
    document.getElementById('yearlyExpenses').innerHTML = totalExpenses * 12;
    document.getElementById('yearlySavings').innerHTML = savings * 12;
}

