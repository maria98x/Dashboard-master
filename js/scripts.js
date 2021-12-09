    
    
    // Toggle the side navigation  
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    // const toggleDiv = document.querySelector(".sideNav")
    // sidebarToggle.addEventListener("click",function(){
    //     toggleDiv.classList.toggle("toggleNav");

    // })

  
    $(document).ready(function() {
        $('#myTable').DataTable( {
            "ajax": "../json/data.json",
            "columns": [
                { "data": "name" },
                { "data": "address" },
                { "data": "city" },
                { "data": "age" },
                { "data": "last visit" },
                { "data": "orders" }
            ]
        } );
    } );