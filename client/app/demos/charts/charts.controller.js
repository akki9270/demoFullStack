angular.module('testfullstackApp')
       .controller('ChartsCtrl',['$scope','$interval','$timeout',function($scope,$interval,$timeout){

        var vm = this;
        vm.chartType='line';

    vm.fnGenerateChart = function(type){
        vm.chartType = type;
        chart.transform(type);
      };

    vm.fnGenerateData = function(dataSize){
      if(!vm.chartData){
        vm.chartData = {data1:[],data2:[]};
      }
      var multiplyArr = [100,200,300,400,500,600,700,800,900,1000];
      if(dataSize) {
        vm.chartData = {};
        for (var k = 1; k <= dataSize; k++) {
          vm.chartData['data' + k] = [];
        }
      }
      vm.chartDataLength = Object.keys(vm.chartData).length ;
      for(var i=0 ; i <=12; i++) {
        for(var j = 1; j <= vm.chartDataLength ; j++) {
          var num = Math.floor(Math.random() * multiplyArr[Math.floor(Math.random() * multiplyArr.length)]);
          vm.chartData['data' + j].push(num);
        }
      }
    };
vm.fnGenerateData();
    var chart = c3.generate({
      bindto: '#chartView',
      padding:{top:40,right:30},
      data: {
        json: vm.chartData,
        types: {
          data2: vm.chartType,
          data1:vm.chartType
        }
      },
      axis: {
        x: {
          type: 'category',
          tick: {
            culling: {
              max: 20 // the number of tick texts will be adjusted to less than this value
            }
            // for normal axis, default on
            // for category axis, default off
          }
        }
      },
      transition:{
        duration:500
      },
      tooltip: {
        //title: function (x) {
        //
        //  return x;
        //},
        //position:function(data, width, height, element){return{top:-100,left:0}}
      },
      onrendered:function(){
        if(!$scope.$$phase){
          $scope.$apply();
        }
      }
    });

    $interval(function(){
       vm.fnGenerateData( Object.keys(vm.chartData).length);
      chart.load({
        bindto:'#chartView',
        json:vm.chartData,
        type:vm.chartType
      });
    },5000);


    vm.fnAddData = function(){
      vm.chartDataLength = Object.keys(vm.chartData).length ;
      if(vm.chartDataLength <= 10){
        vm.fnGenerateData(vm.chartDataLength + 1);
          chart.load({
            bindto:'#chartView',
            json:vm.chartData,
            type:vm.chartType
          });
      }
    };
    vm.fnDeleteData = function(){
      vm.chartDataLength = Object.keys(vm.chartData).length ;
      if(vm.chartDataLength > 2){
        delete vm.chartData['data'+vm.chartDataLength];
        chart.unload({
          bindto:'#chartView',
          ids:['data'+vm.chartDataLength]
        });
        vm.chartDataLength = Object.keys(vm.chartData).length ;
      }

    }
  }]);
