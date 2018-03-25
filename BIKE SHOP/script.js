$(document).ready(function () {
    const bikeShopGeneral = (function () {
     $.getJSON("https://raw.githubusercontent.com/marioBagwell/bikeShop/master/BIKE%20SHOP/bikes.json", (bikes) => {
        
        const filteredMaleBikes = bikes.filter(element => element.genre === "male");

        const filteredFemaleBikes = bikes.filter(element => element.genre === "female");

        const filteredChildBikes = bikes.filter(element => element.genre === "child");

        const mtbFemale = filteredFemaleBikes.filter(element => element.kind === "mtb");

        const roadFemale = filteredFemaleBikes.filter(element => element.kind === "road");

        const cityFemale = filteredFemaleBikes.filter(element => element.kind === "city");

        const roadMaleBikes = filteredMaleBikes.filter(el => el.kind === "road");

        const mtbMaleBikes = filteredMaleBikes.filter(el => el.kind === "mtb");

        const cityMaleBikes = filteredMaleBikes.filter(el => el.kind === "city");





        let searchedUserBikesArray = [];


        function showBikesDiv(filteredMaleBikes, filteredFemaleBikes, filteredChildBikes) {
            ////////////////////////// function for male bikes to show in div //////////////////////
            $("#displayBikesContainer").html("");

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

            $(".radioBtnText").show();

           
            

            $("<input type='radio' name='opt-radio'> ")
                .addClass("radioBtnMale")
                .appendTo("#mtbRoadCity");
                
               
                
                
                

            $("<input type='radio' name='opt-radio'>")
                .addClass("radioBtnFemale")
                .appendTo("#mtbRoadCity");

                
                

            $(".radioBtnMale").click(() => {
                $(".radioBtnFemale").removeClass("active").hide();
                $(".radioBtnMale").addClass("active").hide();
                $(".radioBtnText").hide();


                bikesCheckBox();
                $(".labelCheckBox").show();
                $("#steel").hide();

                $(".steel").hide();

            });

            $(".radioBtnFemale").click(() => {
                $(".radioBtnMale").removeClass("active").hide();
                $(".radioBtnFemale").addClass("active").hide();
                $(".radioBtnText").hide();


                bikesCheckBox();
                $(".labelCheckBox").show();
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



            const aluMtbFemale = mtbFemale.filter(element => element.material === "alu");

            const inch26MtbFemale = aluMtbFemale.filter(element => element.wheels === "26 inch");

            const inch27_5MtbFemale = aluMtbFemale.filter(element => element.wheels === "27.5 inch");

            const inch29MtbFemale = aluMtbFemale.filter(element => element.wheels === "29 inch");

            const smallMtbFemale = inch26MtbFemale.filter(element => element.ramSizeSmall === "Yes");

            const mediumMtbFemale = inch26MtbFemale.filter(element => element.ramSizeMedium === "Yes");

            const bigMtbFemale = inch26MtbFemale.filter(element => element.ramSizeBig === "Yes");

            const aluRoadFemale = roadFemale.filter(element => element.material === "alu");

            const smallAluRoadFemale = roadFemale.filter(element => element.ramSizeSmall === "Yes");

            const mediumAluRoadFemale = roadFemale.filter(element => element.ramSizeMedium === "Yes");

            const bigAluRoadFemale = roadFemale.filter(element => element.ramSizeBig === "Yes");

            const smallRoadAlu26inch = smallAluRoadFemale.filter(element => element.wheels === "26 inch");

            const mediumRoadAlu26inch = mediumAluRoadFemale.filter(element => element.wheels === "26 inch");

            const bigRoadAlu26inch = bigAluRoadFemale.filter(element => element.wheels === "26 inch");

            const aluCityFemale = cityFemale.filter(element => element.material === "alu");

            const smallAluCityFemale = aluCityFemale.filter(element => element.ramSizeSmall === "Yes");

            const mediumAluCityFemale = aluCityFemale.filter(element => element.ramSizeMedium === "Yes");

            const bigAluCityFemale = aluCityFemale.filter(element => element.ramSizeBig === "Yes");

            const small26inchCityFemale = smallAluCityFemale.filter(element => element.wheels === "26 inch");

            const medium26inchCityFemale = mediumAluCityFemale.filter(element => element.wheels === "26 inch");

            const big26inchCityFemale = bigAluCityFemale.filter(element => element.wheels === "26 inch");


            ////////////////////////////////////// filters for male bikees //////////////////////




            const smallMaleMtbBikes = mtbMaleBikes.filter(el => el.ramSizeSmall === "Yes");

            const mediumMaleMtbBikes = mtbMaleBikes.filter(el => el.ramSizeMedium === "Yes");

            const bigMaleMtbBikes = mtbMaleBikes.filter(el => el.ramSizeBig === "Yes");

            const small26inchMtbMaleBikes = smallMaleMtbBikes.filter(el => el.wheels === "26 inch");

            const small27_5inchMtbMaleBikes = smallMaleMtbBikes.filter(el => el.wheels === "27.5 inch");

            const small29inchMtbMaleBikes = smallMaleMtbBikes.filter(el => el.wheels === "29 inch");

            const medium29inchMtbMaleBikes = mediumMaleMtbBikes.filter(el => el.wheels === "29 inch");

            const big29inchMtbMaleBikes = bigMaleMtbBikes.filter(el => el.wheels === "29 inch");

            const carbonRoadMaleBikes = roadMaleBikes.filter(el => el.material === "carbon");

            const inch26RoadCarbonMaleBikes = carbonRoadMaleBikes.filter(el => el.wheels === "26 inch");

            const smallInch26RoadCarbonMaleBikes = inch26RoadCarbonMaleBikes.filter(el => el.ramSizeSmall === "Yes");

            const mediumInch26RoadCarbonMaleBikes = inch26RoadCarbonMaleBikes.filter(el => el.ramSizeMedium === "Yes");

            const bigInch26RoadCarbonMaleBikes = inch26RoadCarbonMaleBikes.filter(el => el.ramSizeBig === "Yes");

            const smallCityMale = cityMaleBikes.filter(el => el.ramSizeSmall === "Yes");

            const mediumCityMale = cityMaleBikes.filter(el => el.ramSizeMedium === "Yes");

            const bigCityMale = cityMaleBikes.filter(el => el.ramSizeBig === "Yes");



            ///////////////////////////////// radio btn female,male bikes, and check checkboxes//////////////




            if ($(".radioBtnFemale").hasClass("active")) {




                if ($(".mtb").is(':checked')) {
                    showBikesDiv(mtbFemale);
                    if ($(".160-175cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(smallMtbFemale);
                        }

                    }

                    if ($(".175-190cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(mediumMtbFemale);
                        }

                    }
                    if ($(".190-210cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(bigMtbFemale);
                        }
                    }



                }

                if ($(".road").is(':checked')) {
                    showBikesDiv(roadFemale);
                    if ($(".160-175cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(smallRoadAlu26inch);
                        }

                    }

                    if ($(".175-190cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(mediumRoadAlu26inch);
                        }

                    }
                    if ($(".190-210cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(bigRoadAlu26inch);
                        }
                    }
                }

                if ($(".city").is(':checked')) {
                    showBikesDiv(cityFemale);
                    if ($(".160-175cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(small26inchCityFemale);
                        }
                    }
                    if ($(".175-190cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(medium26inchCityFemale);
                        }
                    }
                    if ($(".190-210cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(big26inchCityFemale);
                        }
                    }
                }
            }


            if ($(".radioBtnMale").hasClass("active")) {
                if ($(".mtb").is(':checked')) {
                    showBikesDiv(mtbMaleBikes);
                    if ($(".160-175cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(small26inchMtbMaleBikes);
                        }
                    }
                    if ($(".175-190cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-29inch").is(':checked'))) {
                            showBikesDiv(medium29inchMtbMaleBikes);

                        }
                    }
                    if ($(".190-210cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".aluminum").is(':checked')) &&
                            ($(".Wheels-29inch").is(':checked'))) {
                            showBikesDiv(big29inchMtbMaleBikes);
                        }


                    }

                }

                if ($(".road").is(':checked')) {
                    showBikesDiv(roadMaleBikes);
                    if ($(".160-175cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".carbon").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(smallInch26RoadCarbonMaleBikes);
                        }
                    }
                    if ($(".175-190cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".carbon").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(mediumInch26RoadCarbonMaleBikes);

                        }
                    }
                    if ($(".190-210cm").is(':checked')) {
                        $("#displayBikesContainer").html("");
                        if (($(".carbon").is(':checked')) &&
                            ($(".Wheels-26inch").is(':checked'))) {
                            showBikesDiv(bigInch26RoadCarbonMaleBikes);
                        }


                    }
                }

                if ($(".city").is(':checked')) {
                    showBikesDiv(cityMaleBikes);
                    if ($(".160-175cm").is(':checked')) {
                        {
                            $("#displayBikesContainer").html("");
                            showBikesDiv(smallCityMale);
                        }
                    }
                    if ($(".175-190cm").is(':checked')) {
                        {
                            $("#displayBikesContainer").html("");
                            showBikesDiv(mediumCityMale);
                        }
                    }
                    if ($(".190-210cm").is(':checked')) {
                        {
                            $("#displayBikesContainer").html("");
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
            } 
            else {
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

            else if($(".radioBtnFemale").hasClass("active")){
                if($(".mtb").is(':checked')){
                    let minPriceMtbFemale = mtbFemale.sort((a, b) => a.price - b.price);
                    showBikesDiv(minPriceMtbFemale);
                }
            if($(".road").is(':checked')){
                    let minPriceRoadFemale = roadFemale.sort((a, b) => a.price - b.price);
                    showBikesDiv(minPriceRoadFemale);
                }
            if($(".city").is(':checked')){
                    let minPriceCityFemale = cityFemale.sort((a, b) => a.price - b.price);
                    showBikesDiv(minPriceCityFemale);
                }
            
            }

            else if($(".radioBtnMale").hasClass("active")){
                if($(".mtb").is(':checked')){
                    let minPriceMtbMale = mtbMaleBikes.sort((a, b) => a.price - b.price);
                    showBikesDiv(minPriceMtbMale);
                }
            if($(".road").is(':checked')){
                    let minPriceRoadMale = roadMaleBikes.sort((a, b) => a.price - b.price);
                    showBikesDiv(minPriceRoadMale);
                }
            if($(".city").is(':checked')){
                    let minPriceCityMale = cityMaleBikes.sort((a, b) => a.price - b.price);
                    showBikesDiv(minPriceCityMale); 
                }
            
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

            else if($(".radioBtnFemale").hasClass("active")){
                if($(".mtb").is(':checked')){
                    let minPriceMtbFemale = mtbFemale.sort((a, b) => b.price - a.price);
                    showBikesDiv(minPriceMtbFemale);
                }
            if($(".road").is(':checked')){
                    let minPriceRoadFemale = roadFemale.sort((a, b) => b.price - a.price);
                    showBikesDiv(minPriceRoadFemale);
                }
            if($(".city").is(':checked')){
                    let minPriceCityFemale = cityFemale.sort((a, b) => b.price - a.price);
                    showBikesDiv(minPriceCityFemale);
                }
            
            }

            else if($(".radioBtnMale").hasClass("active")){
                if($(".mtb").is(':checked')){
                    let minPriceMtbMale = mtbMaleBikes.sort((a, b) => b.price - a.price);
                    showBikesDiv(minPriceMtbMale);
                }
            if($(".road").is(':checked')){
                    let minPriceRoadMale = roadMaleBikes.sort((a, b) => b.price - a.price);
                    showBikesDiv(minPriceRoadMale);
                }
            if($(".city").is(':checked')){
                    let minPriceCityMale = cityMaleBikes.sort((a, b) => b.price - a.price);
                    showBikesDiv(minPriceCityMale); 
                }
            
            }



        };



        ///////////////////////////// refresh search results ////////////////////

        $("#refreshSearchingBtn").click(() => {
            $(".labelCheckBox").html("");
            $("#startSearchingBtn").show();
            $(".radioBtnText").hide();

            $(".radioBtnMale").hide();
            $(".radioBtnFemale").hide();
            $(".labelCheckBox").hide();
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

            if (inputValue === "") {
                searchedUserBikesArray = [];
                return;
            }

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

        const bikesModels = bikes.map(el => el.model);

        let bikesModelsNames = [];
        $.each(bikesModels, function(i, el){
        if($.inArray(el, bikesModelsNames) === -1) bikesModelsNames.push(el);
        });

        

        $( "#searchByBrandName" ).autocomplete({
            source: bikesModelsNames
        });
       
    });
   

    window.onload = () => $("#searchByBrandName").focus();
    window.onload = () => $(".labelCheckBox").hide();


    })();
});
