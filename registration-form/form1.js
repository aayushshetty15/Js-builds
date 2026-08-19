function Validation(){
   let name=document.getElementById("name").value;
   let number=document.getElementById("number").value;
   let email=document.getElementById("email").value;
   let usn=document.getElementById("usn").value;
   let gender=document.querySelector('input[name="Gender"]:checked');
   let course=document.querySelector('select[name="course"]').value;
   if(name == ""){
    alert("Invalid Name");
    return false;
   }
   let usnPattern= /^[0-9][A-Za-z]{2}[0-9]{2}[A-Za-z]{2}[0-9]{3}$/;
   if(!usnPattern.test(usn)){
    alert("Invalid USN");
    return false;
   }
   if(number.length != 10 || isNaN(number)){
    alert("Invalid number");
    return false;
   }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!emailPattern.test(email)){
    alert("Invalid Email");
    return false;
   }
   if(!gender){
      alert("please Select your gender");
      return false;
   }
   if(course==""){
      aler("Please select a course");
   }
   alert("Form submitted succesfully");
   return true;
}