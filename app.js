(function(){
'use strict';
angular.module('shoppingApp', [])
.controller('ToBuylist', ToBuylist)
.controller('alreadyBought', alreadyBought)
.service('modifyListService', modifyListService)

ToBuylist.$inject = ['modifyListService'];
function ToBuylist(modifyListService){
    var tobuy = this;
    tobuy.items = modifyListService.gettobuyList();
    tobuy.addtoBought = function(index){
        modifyListService.addtoBought(index);
        tobuy.count = modifyListService.getcountList();
    };
}

alreadyBought.$inject = ['modifyListService'];
function alreadyBought(modifyListService){
    var bought = this;
    bought.items = modifyListService.getboughtList();
}

function modifyListService(){
    var service = this;
    var counttobuyItems = 5;
    var BoughtItems = [];
    var tobuyItems = [{name: "Cookies", quantity : 10}, {name: "Chips", quantity: 5}, {name: "Cola", quantity: 2}, 
    {name: "Candies", quantity:100}, {name: "Lays", quantity: 10}];

    service.addtoBought = function(index){
        BoughtItems.push(tobuyItems[index])
        tobuyItems.splice(index, 1);
        counttobuyItems--;
    };
    service.gettobuyList = function(){
        return tobuyItems;
    };
    service.getboughtList = function(){
        return BoughtItems;
    };
    service.getcountList = function(){
        return counttobuyItems;
    }
}
})();