const numbers = [47, 3, 89, 25, 66, 14, 72, 8, 90, 38, 51, 60];

const numerosPares = numbers.filter((num) => {
    return num % 2 === 0;
});

let numPar = [];
let numImp = [];
numbers.forEach((el) => {
    if (el % 2 === 0) {
        numPar.push(el);
    } else {
        numImp.push(el);
    }
});

const companies = [
  { name: 'NovaBank', category: 'Finance', start: 1981, end: 2004 },
  { name: 'MegaMart', category: 'Retail', start: 1992, end: 2008 },
  { name: 'AutoCore', category: 'Auto', start: 1999, end: 2007 },
  { name: 'TechNova', category: 'Technology', start: 1989, end: 2010 },
  { name: 'HealthWise', category: 'Healthcare', start: 2009, end: 2014 },
  { name: 'QuantumFinance', category: 'Finance', start: 1987, end: 2011 },
  { name: 'UrbanStyle', category: 'Retail', start: 1986, end: 1996 },
  { name: 'CodeSpark', category: 'Technology', start: 2011, end: 2016 },
  { name: 'DriveMax', category: 'Auto', start: 1994, end: 2003 },
  { name: 'MediCore', category: 'Healthcare', start: 2002, end: 2022 }
];

const HealthCareCompanies = companies.filter((cp) => {
    return cp.category === 'Healthcare';
});

const tempCompanie = companies.filter((cp) => {
    return (cp.end - cp.start) >= 24;
})

// console.log(tempCompanie);

// console.log(companies.filter((cp) => {
//     return cp.name === 'TechNova';
// })[0].name);


const companyName = companies.map((cp) => cp.name).filter((cp) => cp === 'TechNova');

console.log(companyName);

const companyInfo = companies.map((cp) => {
    return {
        name: cp.name,
        category: cp.category,
    }
}).filter((cp) => {
    return cp.name === 'TechNova';
});

console.log(companyInfo);
