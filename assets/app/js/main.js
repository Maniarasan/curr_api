var source   = $("#entry-template").html();
var template = Handlebars.compile(source);





$(document).ready(function(){ $.ajax({
    async: true,
    crossDomain: true,
    url: 'https://currencyconverter.p.mashape.com/availablecurrencies/',
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function (data) {



var s="";      
      for(i in data)
      {
      	var a= data[i];


s=s+"<option value='"+data[i].id+"'>"+data[i].id+"</option>"

var context = {id:s};

var html    = template(context);

      }
      console.log(html);

$('#curr_id').html("<select>"+s+"</select>");
$('#curr_to_id').html("<select>"+s+"</select>");
     // console.log(JSON.stringify(data));
    },
    error: function (err) {
      console.log(err);
      //alert(err);
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'Bs5BvTwMeNmshIVgyxatfWRfPMkNp1Dmi30jsnLUNZ8zyDyBW8');
    }
  });




});


$( "#c_val" ).change(function(){
$.ajax({
    async: true,
    crossDomain: true,
    url: 'https://currencyconverter.p.mashape.com/?from='+$('#curr_id option:selected').val()+'&from_amount='+$('#c_val').val()+'&to='+$('#curr_to_id option:selected').val(),
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function (data) {
$('#val').html(JSON.stringify(data));
      console.log(data);

var abc=$("#curr_id option:selected").val();

console.log(abc);      
    },
    error: function (err) {
      console.log(err);
      //alert(err);
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'Bs5BvTwMeNmshIVgyxatfWRfPMkNp1Dmi30jsnLUNZ8zyDyBW8');
    }

 })



});




