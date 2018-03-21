$(document).ready(function () {
    const bikeShopGeneral = (function () {

        const bikes = [{
                "model": "Corratec",
                "material": "Carbon",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "26 inch",
                "shifter": "Deore",
                "imageUrl": "http://outdoor.mk/image/cache/data/corratec13/xvcarbon0213-420x420.jpg",
                "genre": "male",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 100000
            },
            {
                "model": "Bianchi",
                "material": "alu",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "29 inch",
                "shifter": "Deore",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi16/km291-700x700.jpg",
                "genre": "male",
                "kind": "mtb",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 80000
            },
            {
                "model": "Bianchi",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "27.5 inch",
                "shifter": "Acera",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi16/dl272-700x700.jpg",
                "genre": "male",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 40000
            },
            {
                "model": "Corratec",
                "material": "alu",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "29 inch",
                "shifter": "Deore",
                "imageUrl": "http://outdoor.mk/image/cache/data/corratec15/SPRBWRC-700x700.jpg",
                "genre": "male",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 80000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "29 inch",
                "shifter": "Sram",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/SCOTT%202018/SCALE/29/950-1200x1200.jpg",
                "genre": "male",
                "kind": "mtb",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 70000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "27.5 inch",
                "shifter": "Shimano SL",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/scott_2016/27.5/ASPECT_740-1200x1200.jpg",
                "genre": "male",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 60000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Tourney",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/SCOTT%202018/ASPECT/27.5/780-1200x1200.jpg",
                "genre": "male",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 20000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Tourney",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/SCOTT%202018/ASPECT/29/980-1200x1200.jpg",
                "genre": "male",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 20000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Tourney",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/SCOTT%202018/ASPECT/29/980-1200x1200.jpg",
                "genre": "male",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 18000
            },
            {
                "model": "Bianchi",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Acera",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi13/cam1-700x700.jpg",
                "genre": "male",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 25000
            },
            {
                "model": "Bianchi",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi17/onice-700x700.jpg",
                "genre": "male",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 25000
            },
            {
                "model": "Bianchi",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi17/SplRbn-700x700.jpg",
                "genre": "male",
                "kind": "city",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 30000
            },
            {
                "model": "Bianchi",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi17/rbn%20siv-700x700.jpg",
                "genre": "male",
                "kind": "city",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 45000
            },
            {
                "model": "Bianchi",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Acera",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi17/Tpz%20mask-700x700.jpg",
                "genre": "male",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 30000
            },
            {
                "model": "Corratec",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano 105",
                "imageUrl": "http://outdoor.mk/image/cache/data/corratec14/shppro-700x700.gif",
                "genre": "male",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "Yes",
                "price": 65000
            },
            {
                "model": "Corratec",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "29 inch",
                "shifter": "Acera",
                "imageUrl": "http://outdoor.mk/image/cache/data/corratec13/urban3-700x700.jpg",
                "genre": "male",
                "kind": "city",
                "ramSizeSmall": "No",
                "ramSizeMedium": "No",
                "ramSizeBig": "Yes",
                "price": 35000
            },
            {
                "model": "Merida",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano EF41",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/MERIDA%202017/CROSSWAY/Crossway_10v-1200x1200.jpg",
                "genre": "male",
                "kind": "city",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 25000
            },
            {
                "model": "Bianchi",
                "material": "carbon",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano 105",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi17/201425_00_d-700x700.jpg",
                "genre": "male",
                "kind": "road",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 120000
            },
            {
                "model": "Bianchi",
                "material": "carbon",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Campagnolo",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi18/SMPRCntr-700x700.jpg",
                "genre": "male",
                "kind": "road",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 90000
            },
            {
                "model": "Bianchi",
                "material": "carbon",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Campagnolo",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi18/SMPRCntr-700x700.jpg",
                "genre": "female",
                "kind": "road",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 130000
            },
            {
                "model": "Bianchi",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Sora",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi16/2016%20bianchi%20sora-700x700.jpg",
                "genre": "male",
                "kind": "road",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 65000
            },
            {
                "model": "Bianchi",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Sora",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi16/2016%20bianchi%20sora-700x700.jpg",
                "genre": "female",
                "kind": "road",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 75000
            },
            {
                "model": "Bianchi",
                "material": "alu carbon",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Tiagra",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi14/MLTLKT-700x700.jpg",
                "genre": "male",
                "kind": "road",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 95000
            },
            {
                "model": "Corratec",
                "material": "carbon",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano 105",
                "imageUrl": "http://outdoor.mk/image/cache/data/corratec17/BK22122-700x700.jpg",
                "genre": "male",
                "kind": "road",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 85000
            },
            {
                "model": "Corratec",
                "material": "alu carbon",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano 105",
                "imageUrl": "http://outdoor.mk/image/cache/data/corratec17/BK22129-700x700.jpg",
                "genre": "male",
                "kind": "road",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "Yes",
                "price": 60000
            },
            {
                "model": "Bianch",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi18/rbnoLDred-700x700.jpg",
                "genre": "female",
                "kind": "city",
                "ramSizeSmall": "No",
                "ramSizeMedium": "No",
                "ramSizeBig": "Yes",
                "price": 20000
            },
            {
                "model": "Bianch",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi17/rbnLdclts-700x700.jpg",
                "genre": "female",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 25000
            },
            {
                "model": "Bianch",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi17/rbn%20ldy%20crn-700x700.jpg",
                "genre": "female",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "Yes",
                "price": 18000
            },
            {
                "model": "Bianch",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://outdoor.mk/image/cache/data/bianchi18/rbnoLDorng-700x700.jpg",
                "genre": "female",
                "kind": "city",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 25000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "26 inch",
                "shifter": "Shimano Tourney ",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/SCOTT2018/cont740-1200x1200.jpg",
                "genre": "female",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 15000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "26 inch",
                "shifter": "Altus",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/SCOTT/2017/CONT730-1200x1200.jpg",
                "genre": "female",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 40000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "26 inch",
                "shifter": "Altus",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/SCOTT2018/CONT720-1200x1200.jpg",
                "genre": "female",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "Yes",
                "price": 35000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "26 inch",
                "shifter": "Altus",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/SCOTT2018/subcross4018-1200x1200.jpg",
                "genre": "female",
                "kind": "mtb",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 25000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "Yes",
                "vBrake": "No",
                "wheels": "26 inch",
                "shifter": "Alivio",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/SCOTT2018/subcross30lady18-1200x1200.jpg",
                "genre": "female",
                "kind": "mtb",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 45000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RDTY",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/CROSS/CROSS/FUSIONLADY-1200x1200.jpg",
                "genre": "female",
                "kind": "mtb",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 18000
            },
            {
                "model": "Scott",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RDTY",
                "imageUrl": "https://velosiped.bg/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/5/_/5_1_34.jpg",
                "genre": "female",
                "kind": "city",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 10000
            },
            {
                "model": "Polar",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Tourney",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/POLAR/MTB/polarcruise-1200x1200.jpg",
                "genre": "female",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 18000
            },
            {
                "model": "Polar",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Tourney",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/POLAR/CITY/FORESTERCOMPLADY-1200x1200.jpg",
                "genre": "female",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 22000
            },
            {
                "model": "Polar",
                "material": "alu",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "28 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/POLAR/CITY/GLIDERCITY-1200x1200.jpg",
                "genre": "female",
                "kind": "city",
                "ramSizeSmall": "No",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "Yes",
                "price": 28000
            },
            {
                "model": "Polar",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "26 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://www.bikecenter.mk/image/cache/data/products/TOCACI/POLAR/CITY/POLAR%20MADISON%20ZENSKI-1200x1200.jpg",
                "genre": "female",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "Yes",
                "ramSizeBig": "No",
                "price": 12000
            },
            {
                "model": "Alpina",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "16 inch",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/FAST/BIC-7310_1-1200x1200.jpg",
                "genre": "child",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 6000
            },
            {
                "model": "Alpina",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "18 inch",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/FAST/BIC-7311_1-1200x1200.jpg",
                "genre": "child",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 8000
            },
            {
                "model": "Alpina",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "20 inch",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/FAST/BIC-7312_1-1200x1200.jpg",
                "genre": "child",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 10000
            },
            {
                "model": "Alpina",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "16 inch",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/ALPINA/DETSKI/ALPINA%20FIREBALL%2016%20belo-zeleni-1200x1200.jpg",
                "genre": "child",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 6000
            },
            {
                "model": "Alpina",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "24 inch",
                "shifter": "Shimano RD",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/ALPINA/DETSKI/BIC-1430-RED_1-1200x1200.jpg",
                "genre": "child",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 12000
            },
            {
                "model": "Alpina",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "16 inch",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/ALPINA/DETSKI/ALPINA%20SPIKE%2016%20CRNO-ZELENI-1200x1200.jpg",
                "genre": "child",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 9000
            },
            {
                "model": "Alpina",
                "material": "pvc",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "12 inch",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/BELLELLI/BellelliGREYPURPPLE-1200x1200.jpg",
                "genre": "child",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 4000
            },
            {
                "model": "Alpina",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "20 inch",
                "shifter": "Power",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/BOOSTER/BOOSTER%20TURBO%20MU%C5%A0KI%20BELI-1200x1200.jpg",
                "genre": "child",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 8000
            },
            {
                "model": "Alpina",
                "material": "steel",
                "diskBrake": "No",
                "vBrake": "Yes",
                "wheels": "20 inch",
                "shifter": "Power",
                "imageUrl": "http://www.bikemarket.mk/image/cache/data/products/TOCACI/BOOSTER/BOOSTER%20TURBO%20%C5%BDENSKI%20CRNO-LJUBICASTI-1200x1200.jpg",
                "genre": "child",
                "kind": "city",
                "ramSizeSmall": "Yes",
                "ramSizeMedium": "No",
                "ramSizeBig": "No",
                "price": 10000
            }
        ];

        

        const filteredMaleBikes = bikes.filter(element => element.genre === "male");

        const filteredFemaleBikes = bikes.filter(element => element.genre === "female");

        const filteredChildBikes = bikes.filter(element => element.genre === "child");

        let searchedUserBikesArray = [];


        function showBikesDiv(filteredMaleBikes, filteredFemaleBikes, filteredChildBikes) {
            ////////////////////////// function for male bikes to show in div //////////////////////


            const bikesDiv = $("<div>").addClass("row").appendTo("#displayBikesContainer");




            filteredMaleBikes.forEach(element => {

                const showBikesDiv = $("<div>").addClass("col-xs-2 col-sm-4 col-md-8 col-lg-4").appendTo(bikesDiv);
                const bikesDivCard = $("<div>").addClass("card").appendTo(showBikesDiv);
                const bikesDivBody = $("<div>").addClass("card-body").appendTo(showBikesDiv);

                ($(`<img src=${element.imageUrl} />`).addClass("image-card-body")).appendTo(bikesDivCard);

                bikesDivBody
                    .append($("<p>").text(` Bike Type : ${element.kind}`).addClass("card-body-text"))
                    .append($("<p>").text(` Model : ${element.model}`).addClass("card-body-text"))
                    .append($("<p>").text(` Material : ${element.material}`).addClass("card-body-text"))
                    .append($("<p>").text(` Disk Brakes : ${element.diskBrake}`).addClass("card-body-text"))
                    .append($("<p>").text(` V - Brakes : ${element.vBrake}`).addClass("card-body-text"))
                    .append($("<p>").text(` Wheels Size : ${element.wheels}`).addClass("card-body-text"))
                    .append($("<p>").text(` Ram Size Small : ${element.ramSizeSmall}`).addClass("card-body-text"))
                    .append($("<p>").text(` Ram Size Medium : ${element.ramSizeMedium}`).addClass("card-body-text"))
                    .append($("<p>").text(` Ram Size Big : ${element.ramSizeBig}`).addClass("card-body-text"))
                    .append($("<p>").text(` Bike Price : ${element.price} Denars`).addClass("card-body-text"));


            })



        }



        /////////////////////////////////// get the buttons //////////////////////////////////
        const minPriceBtn = $("#btnPriceMin");
        const maxPriceBtn = $("#btnPriceMax");
        const searchBtn = $("#startSearchingBtn");
        const maleBikesBtn = $("#btnMaleBikes");
        const femaleBikesBtn = $("#btnFemaleBikes");
        const childBikesBtn = $("#btnChildBikes");

        searchBtn.click(() => {
            searchBtn.hide();



            $("<input type='radio' name='opt-radio'> ")
                .addClass("radioBtnMale")
                .appendTo("#mtbRoadCity")
                .html("<br><h1>Male</h1>");

            $("<input type='radio' name='opt-radio'>")
                .addClass("radioBtnFemale")
                .appendTo("#mtbRoadCity")
                .html("<br><h1>Female</h1>");

            $(".radioBtnMale").click(() => {
                $(".radioBtnFemale").removeClass("active").hide();
                $(".radioBtnMale").addClass("active").hide();

               bikesCheckBox();

               $("#steel").hide();
               
                 $(".steel").hide();
                
            });

            $(".radioBtnFemale").click(() => {
                $(".radioBtnMale").removeClass("active").hide();
                $(".radioBtnFemale").addClass("active").hide();

                bikesCheckBox();

                $("#steel").hide();
                $("#carbon").hide();
                $("#Wheels-27_5inch").hide();
                $("#Wheels-29inch").hide();

                $(".steel").hide();
                $(".carbon").hide();
                $(".Wheels-27_5inch").hide();
                $(".Wheels-29inch").hide();

                $(".labelCheckBox").width('700px');
            });

        });

        //////////////////////////////////// function for check boxes /////////////////////////////////



        function bikesCheckBox() {

            let bikesSpecs = ["mtb", "road", "city", "160-175cm", "175-190cm", "190-210cm", "carbon", "aluminum", "steel", "Wheels-26inch", "Wheels-29inch"];





            bikesSpecs.forEach(element => {



                $('<input />', {
                        type: 'checkbox',


                    })
                    .prop('checked', false)
                    .appendTo(".labelCheckBox")
                    .addClass(element);




                $("<span>")
                    .css("color", "white")
                    .css("text-transform", "uppercase")
                    .addClass("spanCheckBox")
                    .html(element)
                    .appendTo(".labelCheckBox")
                    .attr("id", element);




            });


        }

        $(".labelCheckBox").click(() => {

            $("#displayBikesContainer").html("");


            /////////////////////// filters for female bikes ///////////////////////

            const mtbFemale = filteredFemaleBikes.filter(element => element.kind === "mtb" );

            const aluMtbFemale = mtbFemale.filter(element => element.material === "alu" );

            const inch26MtbFemale = aluMtbFemale.filter(element => element.wheels === "26 inch");

            const inch27_5MtbFemale = aluMtbFemale.filter(element => element.wheels === "27.5 inch");

            const inch29MtbFemale = aluMtbFemale.filter(element =>element.wheels === "29 inch");

            const smallMtbFemale = inch26MtbFemale.filter(element => element.ramSizeSmall === "Yes");

            const mediumMtbFemale = inch26MtbFemale.filter(element =>element.ramSizeMedium === "Yes");

            const bigMtbFemale = inch26MtbFemale.filter(element => element.ramSizeBig === "Yes");

            const roadFemale = filteredFemaleBikes.filter(element => element.kind === "road");

            const aluRoadFemale = roadFemale.filter(element =>element.material === "alu");

            const smallAluRoadFemale = roadFemale.filter(element => element.ramSizeSmall === "Yes");

            const mediumAluRoadFemale = roadFemale.filter(element => element.ramSizeMedium === "Yes");

            const bigAluRoadFemale = roadFemale.filter(element => element.ramSizeBig === "Yes");

            const smallRoadAlu26inch = smallAluRoadFemale.filter(element => element.wheels === "26 inch");

            const mediumRoadAlu26inch = mediumAluRoadFemale.filter(element => element.wheels === "26 inch");

            const bigRoadAlu26inch = bigAluRoadFemale.filter(element => element.wheels === "26 inch");

            const cityFemale = filteredFemaleBikes.filter(element => element.kind === "city");

            const aluCityFemale = cityFemale.filter(element => element.material === "alu");

            const smallAluCityFemale = aluCityFemale.filter(element => element.ramSizeSmall === "Yes");

            const mediumAluCityFemale = aluCityFemale.filter(element => element.ramSizeMedium === "Yes");

            const bigAluCityFemale = aluCityFemale.filter(element => element.ramSizeBig === "Yes");

            const small26inchCityFemale = smallAluCityFemale.filter(element => element.wheels === "26 inch");

            const medium26inchCityFemale = mediumAluCityFemale.filter(element => element.wheels === "26 inch");

            const big26inchCityFemale = bigAluCityFemale.filter(element => element.wheels === "26 inch");


            ////////////////////////////////////// filters for male bikees //////////////////////


            const mtbMaleBikes = filteredMaleBikes.filter(el => el.kind === "mtb");

            const smallMaleMtbBikes = mtbMaleBikes.filter(el => el.ramSizeSmall === "Yes");

            const mediumMaleMtbBikes = mtbMaleBikes.filter(el =>el.ramSizeMedium === "Yes");

            const bigMaleMtbBikes = mtbMaleBikes.filter(el => el.ramSizeBig === "Yes");

            const small26inchMtbMaleBikes = smallMaleMtbBikes.filter(el => el.wheels === "26 inch");

            const small27_5inchMtbMaleBikes = smallMaleMtbBikes.filter(el => el.wheels === "27.5 inch");

            const small29inchMtbMaleBikes = smallMaleMtbBikes.filter(el => el.wheels === "29 inch");

            const medium29inchMtbMaleBikes = mediumMaleMtbBikes.filter(el => el.wheels === "29 inch");

            const big29inchMtbMaleBikes = bigMaleMtbBikes.filter(el => el.wheels === "29 inch");

            const roadMaleBikes = filteredMaleBikes.filter(el => el.kind === "road");

            const carbonRoadMaleBikes = roadMaleBikes.filter(el => el.material === "carbon");

            const inch26RoadCarbonMaleBikes = carbonRoadMaleBikes.filter(el => el.wheels === "26 inch");

            const smallInch26RoadCarbonMaleBikes = inch26RoadCarbonMaleBikes.filter(el => el.ramSizeSmall === "Yes");

            const mediumInch26RoadCarbonMaleBikes = inch26RoadCarbonMaleBikes.filter(el => el.ramSizeMedium === "Yes");

            const bigInch26RoadCarbonMaleBikes = inch26RoadCarbonMaleBikes.filter(el => el.ramSizeBig === "Yes");

            const cityMaleBikes = filteredMaleBikes.filter(el => el.kind === "city");

            const smallCityMale = cityMaleBikes.filter(el => el.ramSizeSmall === "Yes");

            const mediumCityMale = cityMaleBikes.filter(el =>el.ramSizeMedium === "Yes");

            const bigCityMale = cityMaleBikes.filter(el => el.ramSizeBig === "Yes");



            ///////////////////////////////// radio btn female,male bikes, and check checkboxes//////////////




            if ($(".radioBtnFemale").hasClass("active")) {




                if ($(".mtb").is(':checked')) {
                    if ($(".160-175cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(smallMtbFemale);
                        }

                    }

                    if ($(".175-190cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(mediumMtbFemale);
                        }

                    }
                    if ($(".190-210cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(bigMtbFemale);
                        }
                    }



                }

                if ($(".road").is(':checked')) {
                    if ($(".160-175cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(smallRoadAlu26inch);
                        }

                    }

                    if ($(".175-190cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(mediumRoadAlu26inch);
                        }

                    }
                    if ($(".190-210cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(bigRoadAlu26inch);
                        }
                    }
                }

                if ($(".city").is(':checked')) {

                    if ($(".160-175cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(small26inchCityFemale);
                        }
                    }
                    if ($(".175-190cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(medium26inchCityFemale);
                        }
                    }
                    if ($(".190-210cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(big26inchCityFemale);
                        }
                    }
                }
            }

            
            if ($(".radioBtnMale").hasClass("active")) {
                if ($(".mtb").is(':checked')) {
                    if ($(".160-175cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(small26inchMtbMaleBikes);
                        }
                    }
                    if ($(".175-190cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-29inch").is(':checked'))) {
                            showBikesDiv(medium29inchMtbMaleBikes);

                        }
                    }
                    if ($(".190-210cm").is(':checked')) {
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-29inch").is(':checked'))) {
                            showBikesDiv(big29inchMtbMaleBikes);
                        }


                    }

                }

                if ($(".road").is(':checked')) {
                    if ($(".160-175cm").is(':checked')) {
                        if (($(".carbon").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(smallInch26RoadCarbonMaleBikes);
                        }
                    }
                    if ($(".175-190cm").is(':checked')) {
                        if (($(".carbon").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(mediumInch26RoadCarbonMaleBikes);

                        }
                    }
                    if ($(".190-210cm").is(':checked')) {
                        if (($(".carbon").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(bigInch26RoadCarbonMaleBikes);
                        }


                    }
                }

                if ($(".city").is(':checked')) {
                    if ($(".160-175cm").is(':checked')) {
                        {
                            showBikesDiv(smallCityMale);
                        }
                    }
                    if ($(".175-190cm").is(':checked')) {
                        {
                            showBikesDiv(mediumCityMale);
                        }
                    }
                    if ($(".190-210cm").is(':checked')) {
                        {
                            showBikesDiv(bigCityMale);
                        }
                    }
                }
            }

        });


        


        ///////////////////////// min and max price btn ////////////////////////////////

        minPriceBtn.click(() => {
            if (searchedUserBikesArray.length > 0) {
                sortSearchedBikesMin(searchedUserBikesArray);
            } else {
                sortingMin();
            }
        })

        maxPriceBtn.click(() => {
            if (searchedUserBikesArray.length > 0) {
                sortSearchedBikesMax(searchedUserBikesArray);
            } else {
                sortingMax();
            }
        })

        function sortingMin() {

            $("#displayBikesContainer").html("");




            if (femaleBikesBtn.hasClass("active")) {
                let minPriceBikesFemale = filteredFemaleBikes.sort((a, b) => a.price - b.price);
                showBikesDiv(minPriceBikesFemale);
            } else if (maleBikesBtn.hasClass("active")) {
                let minPriceBikesMale = filteredMaleBikes.sort((a, b) => a.price - b.price);
                showBikesDiv(minPriceBikesMale);
            } else if (childBikesBtn.hasClass("active")) {
                let minPriceBikesChild = filteredChildBikes.sort((a, b) => a.price - b.price);
                showBikesDiv(minPriceBikesChild);
            }

            
           

        };

        function sortingMax(arrayToBeSorted) {



            $("#displayBikesContainer").html("");


            if (femaleBikesBtn.hasClass("active")) {
                let maxPriceBikesFemale = filteredFemaleBikes.sort((a, b) => b.price - a.price);
                showBikesDiv(maxPriceBikesFemale);
            } else if (maleBikesBtn.hasClass("active")) {
                let maxPriceBikesMale = filteredMaleBikes.sort((a, b) => b.price - a.price);
                showBikesDiv(maxPriceBikesMale);
            } else if (childBikesBtn.hasClass("active")) {
                let maxPriceBikesChild = filteredChildBikes.sort((a, b) => b.price - a.price);
                showBikesDiv(maxPriceBikesChild);
            }
           
           

        };



        ///////////////////////////// refresh search results ////////////////////

        $("#refreshSearchingBtn").click(() => {
            $(".labelCheckBox").html("");
            $("#startSearchingBtn").show();

            $(".radioBtnMale").hide();
            $(".radioBtnFemale").hide();
        });




        //////////////////////////event listeners for btn male,child,femal bikes////////////////////////


        maleBikesBtn.click(() => {
            //////// show male bikes and append to  divs ////////////

            maleBikesBtn.addClass("active");


            let newDiv = $("<div>").attr("id", "displayBikesContainer").addClass("container");

            if (maleBikesBtn.hasClass("active")) {
                $("#displayBikesContainer").replaceWith(newDiv);
                showBikesDiv(filteredMaleBikes);
            }
            if (femaleBikesBtn.hasClass("active")) {
                femaleBikesBtn.removeClass("active");
                maleBikesBtn.addClass("active");
                $("#displayBikesContainer").replaceWith(newDiv);
                showBikesDiv(filteredMaleBikes);

            }
            if (childBikesBtn.hasClass("active")) {
                childBikesBtn.removeClass("active");
                maleBikesBtn.addClass("active");
                $("#displayBikesContainer").replaceWith(newDiv);
                showBikesDiv(filteredMaleBikes);

            }
        });


        femaleBikesBtn.click(() => {
            //////// show female bikes and append to  divs ////////////

            femaleBikesBtn.addClass("active");

            let newDiv = $("<div>").attr("id", "displayBikesContainer").addClass("container");

            if (femaleBikesBtn.hasClass("active")) {
                $("#displayBikesContainer").replaceWith(newDiv);
                showBikesDiv(filteredFemaleBikes);
            }
            if (maleBikesBtn.hasClass("active")) {
                maleBikesBtn.removeClass("active");
                femaleBikesBtn.addClass("active");
                $("#displayBikesContainer").replaceWith(newDiv);
                showBikesDiv(filteredFemaleBikes);
            }
            if (childBikesBtn.hasClass("active")) {
                childBikesBtn.removeClass("active");
                femaleBikesBtn.addClass("active");
                femaleBikesBtn.disabled = 'disabled';
                $("#displayBikesContainer").replaceWith(newDiv);
                showBikesDiv(filteredFemaleBikes);
            }


        });



        childBikesBtn.click(() => {
            //////// show child bikes and append to  divs ////////////

            childBikesBtn.addClass("active");

            let newDiv = $("<div>").attr("id", "displayBikesContainer").addClass("container");

            if (childBikesBtn.hasClass("active")) {
                $("#displayBikesContainer").replaceWith(newDiv);
                showBikesDiv(filteredChildBikes);
            }
            if (femaleBikesBtn.hasClass("active")) {
                femaleBikesBtn.removeClass("active");
                childBikesBtn.addClass("active");
                $("#displayBikesContainer").replaceWith(newDiv);
                showBikesDiv(filteredChildBikes);
            }
            if (maleBikesBtn.hasClass("active")) {
                maleBikesBtn.removeClass("active");
                childBikesBtn.addClass("active");
                $("#displayBikesContainer").replaceWith(newDiv);
                showBikesDiv(filteredChildBikes);
            }

        });


        //////////////////////////////////////////////////// search input and bnt ////////////////////

       

       

        let searchBtnByName = $("#searchByNameBtn");

        searchBtnByName.click(() => {

           
           $("#displayBikesContainer").html("");

            let inputValue = $("#searchByBrandName").val().trim().toLowerCase();

            if(inputValue === "") return;

            searchedUserBikesArray = bikes.filter((bikes) => bikes.model.toLowerCase().indexOf(inputValue) > -1);
               
            showBikesDiv(searchedUserBikesArray);

            $('#searchByBrandName').val('');
            });

            function sortSearchedBikesMax(arrayToBeSorted) {
                let sortedArray = arrayToBeSorted.sort((a, b) => b.price - a.price);
                showBikesDiv(sortedArray);
            }
            function sortSearchedBikesMin(arrayToBeSorted) {
                let sortedArray = arrayToBeSorted.sort((a, b) => a.price - b.price);
                showBikesDiv(sortedArray);
            }
           

        window.onload = () => $("#searchByBrandName").focus();

    })();
});
