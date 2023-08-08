import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";



inquirer.prompt({
    message:"type your URL: ",
    name:"URL"

}).then((answer)=>{

    const url= answer.URL;
    var qr_svg= qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));

}).catch((error)=>{
    if(error.isTtyError){

    }else{

    }
});

