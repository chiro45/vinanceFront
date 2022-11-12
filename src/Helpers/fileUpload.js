//tenemos la funcion que nos ayuda a enviar la foto a  cloudinary

import Swal from "sweetalert2";

export const fileUpload = async (file)=>{

    const cloudUrl = ' https://api.cloudinary.com/v1_1/dka1fqaps/upload'
    

    const formData = new FormData(); // permite compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest

    formData.append('upload_preset','react-journal') // esto va en la url
    formData.append('file',file)    //  mas datos de la url y el file 
    
    try{
        //realizamos el fetch y le mandamos el metodo y el formData
        const respuesta = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        })
        // si respuesta da el ok o status 200 esta todo okey
        if(respuesta.ok){
            const cloudResp =  await respuesta.json();// esperamos la respuesta de cloudinary
            return cloudResp.secure_url;
        }else{
            throw  await respuesta.json();
        }

    }catch(error){
        console.error(error)
    }
        
}
export const startUploading = async(file,setImagesWines, imagesWine) =>{
   

        Swal.fire({
            title: 'Subiendo...',
            text: 'Por Favor Espere...',
            allowOutsideClick: false,
            didOpen:()=>{
                Swal.showLoading()
            }
            
        });
       
        const fileUrl = await fileUpload(file)
        console.log(fileUrl)
        setImagesWines([...imagesWine, {image: fileUrl}])
        Swal.close();
       return fileUrl
        
    
}