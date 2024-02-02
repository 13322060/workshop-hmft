// Program Pendataan Mahasiswa Nabil Rashid M | 13322060
console.log("Please Wait...")

// Declare Intial Value, (just so it's defined)
var Nama = "mantap"
var Kelas = "mantap"
var NIM = "mantap"
var Index = 0
var Stopper = 0
var DataMahasiswa = [""]

// Pull in input module 
const prompt = require('prompt-sync')();

// Set delay for Aesthetic XD
setTimeout(function(){
    
        // Title
        console.log("PROGRAM PENDATAAN MAHASISWA")
        console.log(" ")
        
        // Loop for infinite amount of input until "STOP"
        while(Stopper == Index){
            
            // Essentially, these "try", "catch", and "throw" are being use as a 'breaker' for .forEach Loop
            try{
                DataMahasiswa.forEach(Script_Pendataan); // Calling the input script function 
            }
            catch (error) {
            console.error(error.message);
            }
        }
        console.log(" ")

        //Output Total Data
        console.log("DATA MAHASISWA YANG TERKUMPUL")
        console.log(DataMahasiswa)
        console.log(" ")



},1000) // 1 Sec 

// THE INPUT SCRIPT FUNCTION
function Script_Pendataan(){
    
    // STOPPER AND INDEX CONSTANT - When there's a "STOP" input, this function will only be half-processed, 
    // Therefore Stopper != Index and break the While loop
    Stopper++
    console.log("Mahasiswa "+(Index+1))

        // Input and Checkers
        var Nama = prompt('>> Masukkan Nama : ');
        if (Nama == "STOP") { throw new Error(""); }
        var Kelas = prompt('>> Masukkan Kelas : ');
        if (Kelas == "STOP") { throw new Error(""); }
        var NIM = prompt('>> Masukkan NIM : ');
        if (NIM == "STOP") { throw new Error(""); }

        // The Output
        console.log("Ada mahasiswa bernama "+Nama+", kelas "+Kelas+", dengan nim "+NIM+".") 
        console.log("")

        // Archiving Process
        DataMahasiswa[Index] = {
            "Nama ":Nama,
            "Kelas ":Kelas,
            "NIM ":NIM
        };     
    
    Index++
}


