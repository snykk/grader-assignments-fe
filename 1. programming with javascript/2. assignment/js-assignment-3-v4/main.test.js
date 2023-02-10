const { expect, describe, it } = require('@jest/globals');
const { salesReport} = require('./main');

describe('output of salesReport', () => {
    describe("when parameter correction is empty", () => {
        it('should output', () => {
            data = [
                {
                    salesName: 'Udin',
                    totalSales: 100,
                    salesDate: 1 
                },
                {
                    salesName: 'Poltak',
                    totalSales: 100,
                    salesDate: 1
                },
                {
                    salesName: 'Poltak',
                    totalSales: 50,
                    salesDate: 2
                },
                {
                    salesName: 'Adi',
                    totalSales: 100,
                    salesDate: 1
                },
                {
                    salesName: 'Adi',
                    totalSales: 100,
                    salesDate: 2
                },
            ];
            correction = [];
            expect(salesReport(data, correction)).toEqual({
                monthlySales: 450,
                totalSalesByName: { Budi: 0, Adi: 200, Poltak: 150, Sri: 0, Udin: 100 },
                bestSalesman: 'Penjualan terbanyak dilakukan oleh Adi dengan total penjualan dalam 1 bulan sebesar 200'
              }); 
        })
    })

    describe("when parameter correction is not empty and type is tambah", () => {
        it('should output', () => {
            data = [
                {
                    salesName: 'Udin',
                    totalSales: 100,
                    salesDate: 1
                },
                {

                    salesName: 'Poltak',
                    totalSales: 100,
                    salesDate: 1
                },
                {
                    salesName: 'Poltak',
                    totalSales: 50,
                    salesDate: 2
                },
                {
                    salesName: 'Adi',
                    totalSales: 100,
                    salesDate: 1
                },
                {
                    salesName: 'Sri',
                    totalSales: 100,
                    salesDate: 1
                },
            ];
            correction = [
                {
                    type: 'tambah',
                    salesName: 'Udin',
                    totalSales: 100,
                    salesDate: 2
                },
                {
                    type: 'tambah',
                    salesName: 'Adi',
                    totalSales: 50,
                    salesDate: 2
                },
            ];
            expect(salesReport(data, correction)).toEqual({
                monthlySales: 600,
                totalSalesByName: { Budi: 0, Adi: 150, Poltak: 150, Sri: 100, Udin: 200 },
                bestSalesman: 'Penjualan terbanyak dilakukan oleh Udin dengan total penjualan dalam 1 bulan sebesar 200'
              }); 
        })
    })

    describe("when parameter correction is not empty and type is tambah and koreksi", () => {
        it('should output', () => {
            data = [
                {
                    salesName: 'Udin',
                    totalSales: 100,
                    salesDate: 1 
                },
                {
                    salesName: 'Poltak',
                    totalSales: 100,
                    salesDate: 1
                },
                {
                    salesName: 'Poltak',
                    totalSales: 50,
                    salesDate: 2
                },
            ];
            correction = [
                {
                    type: 'tambah',
                    salesName: 'Udin',
                    totalSales: 100,
                    salesDate: 2
                },
                {
                    type: 'koreksi',
                    salesName: 'Udin',
                    totalSales: 20,
                    salesDate: 2
                },
                {
                    type: 'tambah',
                    salesName: 'Adi',
                    totalSales: 50,
                    salesDate: 2
                },
                {
                    type: 'koreksi',
                    salesName: 'Adi',
                    totalSales: 10,
                    salesDate: 2
                }
            ]
            expect(salesReport(data, correction)).toEqual({
                monthlySales: 280,
                totalSalesByName: { Budi: 0, Adi: 10, Poltak: 150, Sri: 0, Udin: 120 },
                bestSalesman: 'Penjualan terbanyak dilakukan oleh Poltak dengan total penjualan dalam 1 bulan sebesar 150'    
            }); 
        })
    })

    describe("when parameter correction is not empty and type is koreksi", () => {
        it('should output', () => {
            data = [
                {
                    salesName: 'Udin',
                    totalSales: 100,
                    salesDate: 1
                },
                {
                    salesName: 'Poltak',
                    totalSales: 100,
                    salesDate: 1
                },
                {
                    salesName: 'Sri',
                    totalSales: 100,
                    salesDate: 1
                },
                {
                    salesName: 'Budi',
                    totalSales: 100,
                    salesDate: 1
                }
            ]

            correction = [
                {
                    type: 'koreksi',
                    salesName: 'Budi',
                    totalSales: 400,
                    salesDate: 1
                },
                {
                    type: 'koreksi',
                    salesName: 'Sri',
                    totalSales: 200,
                    salesDate: 1
                },
            ]
            expect(salesReport(data, correction)).toEqual({
              monthlySales: 800,
              totalSalesByName: {
                Adi: 0,
                Budi: 400,
                Poltak: 100,
                Sri: 200,
                Udin: 100,
              },
              bestSalesman:
                "Penjualan terbanyak dilakukan oleh Budi dengan total penjualan dalam 1 bulan sebesar 400",
            }) 
        })
    })
})
