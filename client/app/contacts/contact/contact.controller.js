angular.module('testfullstackApp')
  .controller('ContactCtrl', ContactController);

ContactController.$inject = ['$mdDialog', 'Contacts', 'user', 'contact'];

function ContactController($mdDialog, Contacts, user, contact) {

  var vm = this;
  vm.contact = contact;
  vm.fnCloseModal = function () {
    $mdDialog.cancel();
  };

  vm.fnSaveContact = function () {
    if (vm.contact._id) {
      Contacts.update(vm.contact, function () {
        //toastr.success('Contact updated Successfully');
        vm.fnCloseModal();
      }, function () {
        //toastr.error(error.message);
        vm.fnCloseModal();
      })
    } else {
      (vm.contact).userId = user._id;
      Contacts.save(vm.contact, function () {
        vm.fnCloseModal();
      });
    }

  }
}
