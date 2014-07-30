var cloud=require('ti.cloud');

$.login.addEventListener('click',function(){
	if($.username.value ==''&& $.password.value==''){
		alert('el campo estan vacio');
	}else{
	cloud.Users.login({
    login:$.username.value,
    password: $.password.value
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        /*alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);*/
            // function nombre (nombreU,appellidoU){
            	// this.nombreU=user.first_name;
            	// this.appellidoU=user.last_name;
            // }
                       
            // var Camara=require('main', user.first_name ,user.last_name);
            // var camara=new Camara();
           
           var camara = Alloy.createController('main', {'nombre':user.first_name, 'apellido':user.last_name}).getView();
           camara.open();
            
            
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
}
});
$.index.open();
