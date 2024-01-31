
/*
<header >
<nav class="top-menu">
<ul>
    <li><a href="javascript:openPage('/pages/home.html');">Home</a></li>
    <li class="dropdown">
        <a href="#">Catrias</a>
        <div class="dropdown-content">
            <ul>
                <li><a href=>C 14444411184544yh~çlu2341251wwww11111111 11123232111111111 11111111</a></li>
                <li><a href=>C 222 </a></li>
                <li><a href="javascript:openPage(12);">aaa</li>
            </ul>
            

            
        </div>
    </li>
    <li><a href="javascript:openPage('/pages/contato.html');">Contato</li>
</ul>
</nav>
</header>
*/

function createMenu(){
    var menu = "<header><nav class='top-menu'><ul>" // início
    menu += "<li><a href='index.html'>Home</a></li>" // home
    menu += "<li class='dropdown'><a href='#'>Cursos</a><div class='dropdown-content'><ul>" // início do dropdown
    menu += "<li><a href=pages/Html.html>Html</a></li>"
    menu += "<li><a href=pages/CSS.html>CSS</a></li>"
    menu += "<li><a href=pages/JavaScript.html>JavaScript</a></li>"
    menu += "</ul></div></li>" // fim do dropdown
    menu += "<li><a href='pages/contato.html'>Contato</a></li>" // contato
    menu += "</ul></nav></header>" // fim
    document.getElementById("menu").innerHTML = menu;
}




function openPage(page) {
    //window.open("https://www.w3schools.com");
    window.alert(page + 10);
    document.getElementById('pagina').src=page
  
  }

