/* global $ */
function addAnimals(ans, id){
    $("#"+id).html("");
    
    ans.forEach(function(animal) {
        var mu = '<div class=animal>' +
              '<h2 class="anName">' + animal.name + '</h2>' +
              '<h3><b>Species:</b><span class="anSpecies"> ' + animal.species + "</span></h3>" +
              '<h3><b>Friends:</b></h3>' +
              '<ul>';
        if(animal.friends){  
            animal.friends.forEach(function(friend) {
                mu += "<li>" + friend + "</li>";
            });
        }
        mu += "</ul>";
        
        // check to see if the replace function is implemented. If so add save/edit buttons
        if(window.replace && typeof window.replace === "function"){
            mu += '<button class="saveBtn">save</button>';
            mu += '<button class="editBtn">edit</button>';
        }
        
        // check to see if the remove function is implemented. If so add remove X button symbol
        if(window.remove && typeof window.remove === "function"){
            mu += '<div class="remove">x</div>'
        }
        mu += "</div>";
        $("#"+id).append(mu);   // append the new animal div to the id provided
    });
}
$(function(){
    if(window.animals){
        addAnimals(window.animals, "profiles");
    }
    // SEARCH
    
    // Only works if the search function is implemented in functions.js
    if(window.search && typeof window.search === "function"){
        $("#search").show(); // reveal the search section
        $("#searchBtn").on("click", function(){ // establish click handler for search button
           $("#searchResults").show(); // reveal the searchResults section
           var an = window.search(window.animals, $("#query").val()); // search for the animal in the #query input box
           if(an === undefined || an === null){
               $("#results").html("").html("No animals with that name found!");
           } else {
               addAnimals([an], "results");
           }
        });
    }
    // REPLACE
    $('body').on('click', '.editBtn', function(){ // establish click handler for the edit button
        $(this).siblings('.saveBtn').show(); // show the save button only of the animal card that has been clicked
        $(this).hide(); // hide the clicked edit button
        
        var n = $(this).parents('.animal').find('.anName').text();
        for(var i = 0, len = window.animals.length; i < len; i++){
            if(window.animals[i].name === n){
                window.___editingAnimal = window.animals[i];
            }
        }
        // replace the name with a text box to input a new name
        $(this).siblings("h2.anName").replaceWith(
            `<h2><input type="text" class="anNameInp" value="${window.___editingAnimal.name}"></h2>`
        );
        // replace the species with a text box to input a new species
        $(this).parents(".animal").find("span.anSpecies").replaceWith(
            `<span><input type="text" class="anSpeciesInp" value="${window.___editingAnimal.species}"></span>`
        );
    });
    $('body').on('click', '.saveBtn', function(){
        $(this).hide();
        $(this).siblings('.editBtn').show();
        var oldName = window.___editingAnimal.name;
        var oldFriends = window.___editingAnimal.friends;
        window.replace(window.animals, oldName, {
            name: $(this).parents(".animal").find(".anNameInp").val(),
            species: $(this).parents(".animal").find(".anSpeciesInp").val(),
            friends: oldFriends
        });
        window.___editingAnimal = null;
        addAnimals(window.animals, "profiles");
    });
    
    $('body').on('click', '.remove', function(){
        window.remove(window.animals, $(this).parents(".animal").find(".anName").text());
        addAnimals(window.animals, "profiles");
    });
    // ADD
    if(window.add && typeof window.add === "function") {
        $("#create").show();
        $("body").on("click", "#createBtn", function() {
            var new_name = $(this).siblings("#newNameInp").val();
            var new_species = $(this).siblings("#newSpeciesInp").val();
            $(this).siblings("#newNameInp").val("");
            $(this).siblings("#newSpeciesInp").val("");
            window.add(window.animals, {name: new_name, species: new_species});
            addAnimals(window.animals, "profiles");
        });
    }
});
