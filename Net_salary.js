// GROSS SALARY = BASIC SALARY + BENEFIT
// GROSS SALARY = 100,000 + 20,000
// GROSS SALARY = 120,000

//NSSF DEDUCTIONS:
//TIER 1 CONTRIBUTION: 6% OF 6000 = 360
//TIER 2 CONTRIBUTION: 6%(120,000-6000) caps to 6000 if it exceeds 600= 6000 *6%
// 360 + 360= 720

//NHIF DEDUCTIONS:
//compares the grosssalary against the provided slabs helps in computations

//PAYE CALCULATIONS:
//TAXABLE INCOME 
//IF THE TAXABLE INCOME IS LESS THAN OR EQUAL TO 12,298 THE TAX IS 10% OF THE TAXABLE INCOME 
//AND CONTINUES WITH THE TAX BRACKETS AS STATED


//NET SALARY: grosssalary - NSSF - NHIF -PAYE




const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateNSSF(grossSalary) {
    const tier1 = Math.min(6000, grossSalary) * 0.06;                   //takes the smaller value which is 6000 and multiplies to 6%
    const tier2 = Math.min(Math.max(grossSalary - 6000, 0), 6000) * 0.06;
    return tier1 + tier2;
}

function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 400;
    } else if (grossSalary <= 11999) {
        return 800;
    } else if (grossSalary <= 13999) {
        return 850;
    } else if (grossSalary <= 19999) {
        return 900;
    } else if (grossSalary <= 24999) {
        return 1200;
    } else if (grossSalary <= 29999) {
        return 1250;
    } else {
        return 1700;
    }
}

function calculatePAYE(grossSalary, nssfDeduction) {
    const taxableIncome = grossSalary - nssfDeduction;
    let payeTax = 0;

    if (taxableIncome <= 12298) {
        payeTax = taxableIncome * 0.1;
    } else if (taxableIncome <= 23885) {
        payeTax = 1229.8 + (taxableIncome - 12298) * 0.15;
    } else if (taxableIncome <= 35472) {
        payeTax = 1229.8 + 1738.05 + (taxableIncome - 23885) * 0.2;
    } else if (taxableIncome <= 47059) {
        payeTax = 1229.8 + 1738.05 + 2317.4 + (taxableIncome - 35472) * 0.25;
    } else {
        payeTax = 1229.8 + 1738.05 + 2317.4 + 2886.75 + (taxableIncome - 47059) * 0.3;
    }

    return payeTax;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const nssfDeduction = calculateNSSF(grossSalary);
    const nhifDeduction = calculateNHIF(grossSalary);
    const payeTax = calculatePAYE(grossSalary, nssfDeduction);
    const netSalary = grossSalary - nssfDeduction - nhifDeduction - payeTax;

    return {
        grossSalary: grossSalary,
        nssfDeduction: nssfDeduction,
        nhifDeduction: nhifDeduction,
        payeTax: payeTax,
        netSalary: netSalary
    };
}

rl.question('Enter your basic salary: ', (basicSalaryInput) => {
    const basicSalary = parseFloat(basicSalaryInput);

    rl.question('Enter your benefits: ', (benefitsInput) => {
        const benefits = parseFloat(benefitsInput);

        const salaryDetails = calculateNetSalary(basicSalary, benefits);

        console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
        console.log(`NSSF Deduction: ${salaryDetails.nssfDeduction}`);
        console.log(`NHIF Deduction: ${salaryDetails.nhifDeduction}`);
        console.log(`PAYE Tax: ${salaryDetails.payeTax}`);
        console.log(`Net Salary: ${salaryDetails.netSalary}`);

        rl.close();
    });
});

rl.on('close',()=>{
    console.log("THANK YOU FOR USING OUR NET SALARY CALCULATOR")            // the rl.on closes closes the readline module interface with a nice message to the user irregardless of the input
})