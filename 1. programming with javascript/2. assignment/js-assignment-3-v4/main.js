const salers = ["Adi", "Udin", "Budi", "Poltak", "Sri"];

function salesReport(data, correction) {
    var sales = {
        Adi: [],
        Udin: [],
        Budi: [],
        Poltak: [],
        Sri: [],
    };
    var monthlySales = 0;

    for (let item of data) {
        sales[item.salesName].push({ totalSales: item.totalSales, salesDate: item.salesDate });
        monthlySales += item.totalSales;
    }

    for (let item of correction) {
        switch (item.type) {
            case "tambah":
                sales[item.salesName].push({ totalSales: item.totalSales, salesDate: item.salesDate });
                monthlySales += item.totalSales;
            case "koreksi":
                for (let i = 0; i < sales[item.salesName].length; i++) {
                    if (sales[item.salesName][i].salesDate === item.salesDate) {
                        monthlySales = monthlySales - sales[item.salesName][i].totalSales + item.totalSales;

                        sales[item.salesName][i].totalSales = item.totalSales;
                        break;
                    }
                }
        }
    }

    var finalRecap = {
        highestSalesTotal: 0,
        salesName: "",
        totalSalesByName: { Adi: 0, Budi: 0, Poltak: 0, Udin: 0, Sri: 0 },
    };

    for (let saler of salers) {
        if (sales[saler].length === 0) {
            continue;
        }

        let currentTotal = 0;
        for (let itemSaler of sales[saler]) {
            currentTotal += itemSaler.totalSales;
        }
        finalRecap.totalSalesByName[saler] = currentTotal;

        if (finalRecap.highestSalesTotal < currentTotal) {
            finalRecap.highestSalesTotal = currentTotal;
            finalRecap.salesName = saler;
        }
    }

    return {
        monthlySales: monthlySales,
        totalSalesByName: finalRecap.totalSalesByName,
        bestSalesman: `Penjualan terbanyak dilakukan oleh ${finalRecap.salesName} dengan total penjualan dalam 1 bulan sebesar ${finalRecap.highestSalesTotal}`,
    };
}
var data = [
    {
        salesName: "Udin",
        totalSales: 100,
        salesDate: 1,
    },
    {
        salesName: "Poltak",
        totalSales: 100,
        salesDate: 1,
    },
    {
        salesName: "Poltak",
        totalSales: 50,
        salesDate: 2,
    },
];

var correction = [
    {
        type: "tambah",
        salesName: "Udin",
        totalSales: 100,
        salesDate: 2,
    },
    {
        type: "koreksi",
        salesName: "Udin",
        totalSales: 20,
        salesDate: 2,
    },
];

salesReport(data, correction);

module.exports = {
    salesReport,
};
