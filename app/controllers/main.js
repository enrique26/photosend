var args = arguments[0] || {};

// function camara(nombre, apellido){
	
	$.fotografia.addEventListener('click',function(e){
		Titanium.Media.showCamera({
		//properties of showcamera
		success:function(event){
			$.fotod.image = event.media;
			var fotom=event.media;
			var A=Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'imagen.png');
	            A.write(fotom);
	            alert(A.nativePath);
	            $.fotod.image=A.nativePath;		        
	
		},
		error:function(e){
			alert(e.error);
		},
		cancel:function(){
			
		},
		saveToPhotoGallery:true,
		
	});
	});
	
	$.labelNombre.text = args.nombre+' '+args.apellido;
	
	
	$.galeria.addEventListener('click', function(e){
		Titanium.Media.openPhotoGallery({
			success:function(event){
				var imagenf=event.media;
			    //alert(event.media.getNativePath());
			    var f=Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'imagen2.png');
	            f.write(imagenf);
	            alert(f.nativePath);
	            $.fotod.image=f.nativePath;
			},
			
		});
	});
	
// }
// 
// 
// // $.main.open();
// module.exports=camara;
