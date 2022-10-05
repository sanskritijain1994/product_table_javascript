let products = [];
function addProduct()
{
    let product = {
                    pid:document.getElementById("pid").value,
                    pname:document.getElementById("pname").value,
                    pprice:document.getElementById("pprice").value
                  }
    products.push(product);
  
}

function display()
{
  addProduct();
  var myTable = "<table>"
  myTable += '<tr><th>' + 
             'Product Id' + 
             '</th><th>' + 
             'Product Name' + 
             '</th><th>' + 
             'Product Price' + 
             '</th></tr>'
  
  products.forEach((value,i)=>{
    myTable += '<tr><td>'+ value.pid +
    '</td><td>' + value.pname +
    '</td><td>' + value.pprice + 
    '</td></tr>';
  });
  myTable += "</table>";
  console.log(myTable);
  document.getElementById('table').innerHTML = myTable;
}
function myValidation()
{
    let name = document.getElementById("pname").value;

        if(name.length == 0 ){
            throw " name field can not be empty ";
           }
        else if(!isNaN(name)){
            throw "input should be in text format";
        }
        display();
}

        