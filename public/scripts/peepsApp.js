var myApp = angular.module('myApp', []);
myApp.controller('WhereMyPeeps', function($http, PeepsService) {
  var vm = this;
  vm.newPeep = function() {
    console.log('in newPeep');
    var peepToAdd = {
      name:  vm.nameIn,
      location: vm.locationIn
    }; //end peepToAdd
    PeepsService.addPeep(peepToAdd);
      vm.whereMyPeepsAt();
  }; //end whereMyPeepsAt


  vm.whereMyPeepsAt = function() {
    console.log('in whereMyPeepsAt');
    PeepsService.getPeeps().then(function() {
      console.log('back in controller:', PeepsService.allMyPeeps);
      vm.thePeeps = PeepsService.allMyPeeps.data;
      console.log(vm.thePeeps);
    });
  }; //end whereMyPeepsAt

  vm.deletePeep = function(index){
      console.log('peep to delete:', index);
      PeepsService.deletePeep(index).then(function(){
        console.log('back in controller', PeepsService.deletedPeep);
        vm.delete = PeepsService.deletedPeep;
        vm.whereMyPeepsAt();
      });
  };
}); // end controller
