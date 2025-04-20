function loanCheck(basic, salary, companyName) {
  let results = [];
  let i = 0;
  const afford = salary - 0.4 * basic;
  let loans = [];
  let percentages = {};

  // Validation
  if (!Number.isInteger(basic) || !Number.isInteger(salary) || !companyName) {
    return "Invalid input";
  }

  if (companyName === "lolc") {
    loans = [
      3000, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 60000, 70000,
      80000, 90000,
    ];
    percentages = {
      "6 Months": 0.202032,
      "12 Months": 0.11803,
      "18 Months": 0.0901833,
      "24 Months": 0.0763733,
      "36 Months": 0.06279,
      "48 Months": 0.0562167,
      "60 Months": 0.05244,
      "72 Months": 0.050053,
    };

    loans.forEach((loan) => {
      for (let term in percentages) {
        let percentage = percentages[term];
        let ptm = (percentage * loan).toFixed(2);

        if (afford >= ptm) {
          results[i] = {
            amount: loan,
            term: term,
            pmt: ptm,
            company: companyName,
          };
          i++;
        }
      }
    });
  } else {
    // Example loan data for other companies
    loans = {
      500: {
        "1 month": 664,
        "2 months": 357,
        "3 months": 243,
        "4 months": 194,
        "5 months": 161,
        "6 months": 169,
      },
      600: {
        "1 month": 780,
        "2 months": 420,
        "3 months": 285,
        "4 months": 228,
        "5 months": 189,
        "6 months": 190,
      },
      700: {
        "1 month": 896,
        "2 months": 472,
        "3 months": 328,
        "4 months": 261,
        "5 months": 217,
        "6 months": 211,
      },
      800: {
        "1 month": 1012,
        "2 months": 533,
        "3 months": 370,
        "4 months": 295,
        "5 months": 245,
        "6 months": 231,
      },
      900: {
        "1 month": 1129,
        "2 months": 594,
        "3 months": 412,
        "4 months": 329,
        "5 months": 273,
        "6 months": 252,
      },
      1000: {
        "1 month": 1245,
        "2 months": 665,
        "3 months": 455,
        "4 months": 363,
        "5 months": 301,
        "6 months": 273,
      },
      1500: {
        "1 month": 1825,
        "2 months": 961,
        "3 months": 667,
        "4 months": 533,
        "5 months": 442,
        "6 months": 376,
      },
      2000: {
        "1 month": 2406,
        "2 months": 1266,
        "3 months": 879,
        "4 months": 702,
        "5 months": 582,
        "6 months": 479,
      },
      2500: {
        "1 month": 2986,
        "2 months": 1572,
        "3 months": 1091,
        "4 months": 872,
        "5 months": 723,
        "6 months": 582,
      },
      3000: {
        "1 month": 3567,
        "2 months": 1878,
        "3 months": 1303,
        "4 months": 1041,
        "5 months": 863,
        "6 months": 685,
      },
      3500: {
        "1 month": 4147,
        "2 months": 2183,
        "3 months": 1515,
        "4 months": 1211,
        "5 months": 1004,
        "6 months": 788,
      },
      4000: {
        "1 month": 4728,
        "2 months": 2489,
        "3 months": 1728,
        "4 months": 1380,
        "5 months": 1145,
        "6 months": 891,
      },
      4500: {
        "1 month": 5309,
        "2 months": 2794,
        "3 months": 1940,
        "4 months": 1550,
        "5 months": 1285,
        "6 months": 994,
      },
      5000: {
        "1 month": 5889,
        "2 months": 3100,
        "3 months": 2152,
        "4 months": 1719,
        "5 months": 1426,
        "6 months": 1098,
      },
      5500: {
        "1 month": 6470,
        "2 months": 3406,
        "3 months": 2364,
        "4 months": 1889,
        "5 months": 1566,
        "6 months": 1201,
      },
      6000: {
        "1 month": 7050,
        "2 months": 3711,
        "3 months": 2579,
        "4 months": 2059,
        "5 months": 1707,
        "6 months": 1304,
      },
      6500: {
        "1 month": 7634,
        "2 months": 4024,
        "3 months": 2792,
        "4 months": 2228,
        "5 months": 1848,
        "6 months": 1407,
      },
      7000: {
        "1 month": 8215,
        "2 months": 4329,
        "3 months": 3004,
        "4 months": 2398,
        "5 months": 1988,
        "6 months": 1510,
      },
      7500: {
        "1 month": 8796,
        "2 months": 4636,
        "3 months": 3216,
        "4 months": 2567,
        "5 months": 2129,
        "6 months": 1613,
      },
      8000: {
        "1 month": 9377,
        "2 months": 4942,
        "3 months": 3429,
        "4 months": 2737,
        "5 months": 2269,
        "6 months": 1716,
      },
      8500: {
        "1 month": 9958,
        "2 months": 5248,
        "3 months": 3641,
        "4 months": 2906,
        "5 months": 2410,
        "6 months": 1820,
      },
      9000: {
        "1 month": 10538,
        "2 months": 5554,
        "3 months": 3854,
        "4 months": 3064,
        "5 months": 2541,
        "6 months": 1923,
      },
      9500: {
        "1 month": 11119,
        "2 months": 5860,
        "3 months": 4066,
        "4 months": 3233,
        "5 months": 2681,
        "6 months": 2026,
      },
      10000: {
        "1 month": 11700,
        "2 months": 6166,
        "3 months": 4278,
        "4 months": 3402,
        "5 months": 2821,
        "6 months": 2122,
      },

      // Add other loan data here
    };

    for (let amount in loans) {
      let terms = loans[amount];
      for (let term in terms) {
        let pmt = terms[term];
        if (pmt <= afford) {
          results[i] = {
            amount: amount,
            pmt: pmt,
            term: term,
            company: companyName,
          };
          i++;
        }
      }
    }
  }

  return results;
}

const submitButton = document.getElementById("submit-loan");
const netBasic = document.getElementById("basic");
const netPay = document.getElementById("netpay");
const netProvider = document.getElementById("provider");
const qualis = document.getElementById("qualis");
const table = document.getElementById("table-body");
const title = document.getElementById("table-title");
const container = document.getElementById("loan-container");

submitButton.addEventListener("click", function () {
  let companyName = netProvider.value; // Get the company name from the input field
  let loanOptions = loanCheck(
    parseInt(netBasic.value),
    parseInt(netPay.value),
    companyName
  );

  // Format the results to display in the 'qualis' element
  if (loanOptions.length > 0) {
    let loanDetails = loanOptions
      .map((option) => {
        title.innerText = companyName + " Finance";
        container.style.height = "auto";
        return `<tr><td>${option.amount}</td><td>${option.term}</td><td>${option.pmt}</td></tr>`;
      })
      .join("");

    table.innerHTML = loanDetails;
  } else {
    table.innerHTML = "No loan options available.";
  }
});
