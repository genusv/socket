const axios = require('axios');
//const axios = require('axios/dist/browser/axios.cjs')

const cors = require('cors');
//const router = require('express').Router();
const nodemailer = require('nodemailer'); 


  const code = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","p","Q","R","S","T","U","V","W","X","Y","Z",
"1","2","3","4","5","6","7","8","9","1","0" ]



// define a function that converts a string to hex
const stringToHex16 = (str) => {
  let hex = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const hexValue = charCode.toString(16).toUpperCase();

    // Pad with zeros to ensure two-digit representation
    hex += hexValue.padStart(2, '0');
  }
  return hex;
};
const stringToHex12 = (str) => {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      const hexValue = charCode.toString(32);
  
      // Pad with zeros to ensure two-digit representation
      hex += hexValue.padStart(2, '0');
    }
    return hex;
  };
  
  function unhex12(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 32));
    return str;
}
function unhex16(hexx) {
  var hex = hexx.toString();//force conversion
  var str = '';
  for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

//-------------------------------------------------------------------------------
      
function r(){  return(code[Math.floor(Math.random() * code.length)]) }
  function Codegen() {
  return (
    r()+r()+r()+r()+r()+r()+r()+r()+r()+r()
  )
}

//-------------------------------------------------------------------------------
function _a(i,x) {
  if(i[x] != undefined){return(i[x]+Codegen())}else{return("")}
}
function _b(i,x) {
  if(i[x] != undefined){return(i[x])}else{return("")}
}
function Prehex(i) {
return(
  _a(i,0)+_a(i,1)+_a(i,2)+_a(i,3)+_a(i,4)+_a(i,5)+_a(i,6)+_a(i,7)+_a(i,8)+_a(i,9)+_a(i,10)
  +_a(i,11)+_a(i,12)+_a(i,13)+_a(i,14)+_a(i,15)+_a(i,16)+_a(i,17)+_a(i,18)+_a(i,19)+_a(i,20)
  +_a(i,21)+_a(i,22)+_a(i,23)+_a(i,24)+_a(i,25)+_a(i,26)+_a(i,27)+_a(i,28)+_a(i,29)+_a(i,30)
  +_a(i,31)+_a(i,32)+_a(i,33)+_a(i,34)+_a(i,35)+_a(i,36)+_a(i,37)+_a(i,38)+_a(i,39)+_a(i,40)
  +_a(i,41)+_a(i,42)+_a(i,43)+_a(i,44)+_a(i,45)+_a(i,46)+_a(i,47)+_a(i,48)+_a(i,49)+_a(i,50)
  +_a(i,51)+_a(i,52)+_a(i,53)+_a(i,54)+_a(i,55)+_a(i,56)+_a(i,57)+_a(i,58)+_a(i,59)+_a(i,60)
  +_a(i,61)+_a(i,62)+_a(i,63)+_a(i,64)+_a(i,65)+_a(i,66)+_a(i,67)+_a(i,68)+_a(i,69)+_a(i,70)
  +_a(i,71)+_a(i,72)+_a(i,73)+_a(i,74)+_a(i,75)+_a(i,76)+_a(i,77)+_a(i,78)+_a(i,79)+_a(i,80)
  +_a(i,81)+_a(i,82)+_a(i,83)+_a(i,84)+_a(i,85)+_a(i,86)+_a(i,87)+_a(i,88)+_a(i,89)+_a(i,90)
  +_a(i,91)+_a(i,92)+_a(i,93)+_a(i,94)+_a(i,95)+_a(i,96)+_a(i,97)+_a(i,98)+_a(i,99)+_a(i,100)
)
}

function _unhasher(i){
return(
  _b(i,0)+_b(i,11)+_b(i,22)+_b(i,33)+_b(i,44)+_b(i,55)+_b(i,66)+_b(i,77)+_b(i,88)+_b(i,99)+_b(i,110)
+_b(i,121)+_b(i,132)+_b(i,143)+_b(i,154)+_b(i,165)+_b(i,176)+_b(i,187)+_b(i,198)+_b(i,209)+_b(i,220)
+_b(i,231)+_b(i,242)+_b(i,253)+_b(i,264)+_b(i,275)+_b(i,286)+_b(i,297)+_b(i,308)+_b(i,319)+_b(i,330)
+_b(i,341)+_b(i,352)+_b(i,363)+_b(i,374)+_b(i,385)+_b(i,396)+_b(i,407)+_b(i,418)+_b(i,429)+_b(i,440)
+_b(i,451)+_b(i,462)+_b(i,473)+_b(i,484)+_b(i,495)+_b(i,506)+_b(i,517)+_b(i,528)+_b(i,539)+_b(i,550)
+_b(i,561)+_b(i,572)+_b(i,583)+_b(i,594)+_b(i,605)+_b(i,616)+_b(i,627)+_b(i,638)+_b(i,649)+_b(i,660)
+_b(i,671)+_b(i,682)+_b(i,693)+_b(i,704)+_b(i,715)+_b(i,726)+_b(i,737)+_b(i,748)+_b(i,759)+_b(i,770)
+_b(i,781)+_b(i,792)+_b(i,803)+_b(i,814)+_b(i,825)+_b(i,836)+_b(i,847)+_b(i,858)+_b(i,869)+_b(i,880)
+_b(i,891)+_b(i,902)+_b(i,913)+_b(i,924)+_b(i,935)+_b(i,946)+_b(i,957)+_b(i,968)+_b(i,979)+_b(i,990)
+_b(i,1001)+_b(i,1012)+_b(i,1023)+_b(i,1034)+_b(i,1045)+_b(i,1056)+_b(i,1067)+_b(i,1078)+_b(i,1089)+_b(i,1100)
)
}
//-------------------------------------------------------------------------------

function _Encrypt(i) {  return(Prehex(Codegen()+stringToHex16(stringToHex12(i)))) }
function _Dencrypt(i) { return(unhex16(_unhasher(i).slice(10,i.length))) }

function _ANural(DB,i) {if(_Dencrypt(DB) === stringToHex12(i) ){return(true)}else{return(false)} }

//-------------------------------------------------------------------------------

      async function sendmail(i) {
        const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.email",
        port: 587,
        secure:false,
        auth: {
            user: "pubmail700@gmail.com",
            pass: 'domo rpcr rfts dslv'
        }
    });
        const infro = await transporter.sendMail({
            from: "pubmail700@gmail.com",
            to: i.email.toString(),
            subject:"Code",
            html:i.code,
        })
        console.log("message sent:" + infro.messageId );
    }


//---------------------------------------------------------

const io = require("socket.io")(5000,{
  cors: {origin: "*",// methods: ["GET", "POST"],
  },    
},console.log("Server running on 5000"))




io.on("connection",socket =>  {
  console.log(socket.id)
  socket.on("remote", a=> {
    console.log(a)
      //io.emit("sever", a)
      //console.log(a)
      _Prodata(a) 


      
    function _Prodata(i) {
      io.emit(i.key, i)
    }
      

  })})

//---------------------------------------------------------

  
