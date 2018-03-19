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

        const filteredMaleBikes = bikes.filter(element => {
            return element.genre === "male";
        });

        const filteredFemaleBikes = bikes.filter(element => {
            return element.genre === "female";
        });

        const filteredChildBikes = bikes.filter(element => {
            return element.genre === "child";
        });



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
            });

            $(".radioBtnFemale").click(() => {
                $(".radioBtnMale").removeClass("active").hide();
                $(".radioBtnFemale").addClass("active").hide();

                bikesCheckBox();
            });

        });

        //////////////////////////////////// function for check boxes /////////////////////////////////



        function bikesCheckBox() {

            let bikesSpecs = ["mtb", "road", "city", "160-175cm", "175-190cm", "190-210+cm", "carbon", "aluminum", "steel", "Wheels-26inch", "Wheels-27_5inch", "Wheels-29inch"];





            bikesSpecs.forEach(element => {



                $('<input />', {
                        type: 'checkbox',


                    })
                    .prop('checked', false)
                    .appendTo(".labelCheckBox")
                    .addClass(element)
                    .attr("id", element);



                $("<span>")
                    .css("color", "white")
                    .css("text-transform", "uppercase")
                    .addClass("spanCheckBox")
                    .html(element)
                    .appendTo(".labelCheckBox");




            });


            $(".labelCheckBox").click(() => {

                $("#displayBikesContainer").html("");


                /////////////////////// filters for female bikes ///////////////////////

                const mtbFemale = filteredFemaleBikes.filter(element => {
                    return element.kind === "mtb";
                });

                const roadFemale = filteredFemaleBikes.filter(element => {
                    return element.kind === "road";
                });

                const cityFemale = filteredFemaleBikes.filter(element => {
                    return element.kind === "city";
                });

                const citySmallFemale = cityFemale.filter(element => {
                    return element.ramSizeSmall === "Yes";
                });
                const cityWheelsFemale = citySmallFemale.filter(element => {
                    return element.wheels === "26 inch";
                });
                const cityAluFemale = cityWheelsFemale.filter(element => {
                    return element.material === "alu";
                });


                const roadSmallFemale = roadFemale.filter(element => {
                    return element.ramSizeSmall === "Yes";
                });
                const roadWheelsFemale = roadSmallFemale.filter(element => {
                    return element.wheels === "26 inch";
                });
                const roadAluFemale = roadWheelsFemale.filter(element => {
                    return element.material === "alu";
                });

                const roadCarbonFemale = roadWheelsFemale.filter(element => {
                    return element.material === "carbon";
                });

                const mtbSmallFemale = mtbFemale.filter(element => {
                    return element.ramSizeSmall === "Yes";
                });
                const smallWheelsMtbFemale = mtbSmallFemale.filter(element => {
                    return element.wheels === "26 inch";
                });
                const smallAluFemale = smallWheelsMtbFemale.filter(element => {
                    return element.material === "alu";
                });





                ///////////////////////////////// radio btn female bikes, and check checkboxes//////////////


                if ($(".radioBtnFemale").hasClass("active")) {

                    if ($(".mtb").is(':checked') &&
                        ($(".160-175cm").is(':checked') &&
                            ($(".aluminum").is(':checked') &&
                                ($(".Wheels-26inch").is(':checked'))))) {

                        showBikesDiv(smallAluFemale);

                    } else if ($(".road").is(':checked') &&
                        ($(".160-175cm").is(':checked') &&
                            ($(".aluminum").is(':checked') &&
                                ($(".Wheels-26inch").is(':checked'))))) {

                        showBikesDiv(roadAluFemale);


                    } else if ($(".road").is(':checked') &&
                        ($(".160-175cm").is(':checked') &&
                            ($(".carbon").is(':checked') &&
                                ($(".Wheels-26inch").is(':checked'))))) {

                        showBikesDiv(roadCarbonFemale);


                    } else if ($(".city").is(':checked') &&
                        ($(".160-175cm").is(':checked') &&
                            ($(".aluminum").is(':checked') &&
                                ($(".Wheels-26inch").is(':checked'))))) {

                        showBikesDiv(cityAluFemale);


                    }


                }

                /////////////////////////////////// filters for male bikes ///////////////////////

                ///////////////////////////////////// mtb //////////////////////////////

                const mtbMaleBikes = filteredMaleBikes.filter(element => {
                    return element.kind === "mtb";
                })

                const smallMtbMaleBikes = mtbMaleBikes.filter(element => {
                    return element.ramSizeSmall === "Yes";
                })

                const smallWheelsMtbMaleBikes = smallMtbMaleBikes.filter(element => {
                    return element.wheels === "26 inch";
                })

                const smallAluMale = smallWheelsMtbMaleBikes.filter(element => {
                    return element.material === "alu";
                })

                //////////////////////////////////////////////////// road ///////////////////

                const roadMaleBikes = filteredMaleBikes.filter(element => {
                    return element.kind === "road";
                })

                const smallRoadMaleBikes = roadMaleBikes.filter(element => {
                    return element.ramSizeSmall === "Yes";
                })

                const smallWheelsRoadMaleBikes = smallRoadMaleBikes.filter(element => {
                    return element.wheels === "26 inch";
                })

                const smallAluRoadMale = smallWheelsRoadMaleBikes.filter(element => {
                    return element.material === "alu";
                })




                ////////////////////////////////////// male bikes radiobtn and check checkboxes ////////////////// 



                if ($(".radioBtnMale").hasClass("active")) {
                    if ($(".mtb").is(':checked') &&
                        ($(".160-175cm").is(':checked') &&
                            ($(".aluminum").is(':checked') &&
                                ($(".Wheels-26inch").is(':checked'))))) {

                        showBikesDiv(smallAluMale);

                    } else if ($(".road").is(':checked') &&
                        ($(".160-175cm").is(':checked') &&
                            ($(".aluminum").is(':checked') &&
                                ($(".Wheels-26inch").is(':checked'))))) {

                        showBikesDiv(smallAluRoadMale);

                    } else if ($(".road").is(':checked') &&
                        ($(".175cm-190").is(':checked') &&
                            ($(".carbon").is(':checked') &&
                                ($(".Wheels-26inch").is(':checked'))))) {

                        showBikesDiv(mediumCarbonRoadMale);

                    }
                }

            })

        }



        ///////////////////////// min and max price btn ////////////////////////////////

        minPriceBtn.click(() => {
            sortingMin();



        })

        maxPriceBtn.click(() => {
            sortingMax();


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




        }

        function sortingMax() {



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


        }



        ///////////////////////////// refresh search results ////////////////////

        $("#refreshSearchingBtn").click(() => {
            location.reload();
        })




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
        

        const searchBtnByName = $("#searchByNameBtn");

        searchBtnByName.click(() => {
            
            $("#displayBikesContainer").html("");

            let inputValue = $("#searchByBrandName").val();

            let filterBikes;

           

           filterBikes = bikes.filter(function(bikes){
               
            if(bikes.model.indexOf(inputValue) > -1){
                return bikes;
               }
               
              
            });

            showBikesDiv(filterBikes);

         

        })

    })();
});