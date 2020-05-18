/*This code is extremely un usable and is only a one time thing*/





/** DATA  */
majors = ['Mathematic & Informatique','Science Technique','Science Matiere'];
specialities = ['Informatique','Mathematic'];
modules_info = ['Algorithme','Analyse','Base Des Donnes','Structure Machine'];
modules_math = ['Algebre','Analyse','calcul lineare'];
books_info = ['1st book','2nd book','3rd book'];
books_math = ['alg book','analyse','calc book'];







/** Functions to create the HTML */
function createMajorSection(){
    let sect = document.createElement("section");
    sect.classList.add("major-group");

    let searchbar = document.createElement("div");
    searchbar.classList.add("major-group__searchBar");
    searchbar.classList.add("title");

    let title = document.createElement("p");
    let text = document.createTextNode("Choose your Major");
    title.appendChild(text);

    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Search Major");
    input.id ="major-input";

    searchbar.appendChild(title);
    searchbar.appendChild(input);

    let list = document.createElement("div");
    list.classList.add("major-group__list");

    let ul = document.createElement("ul");

    for (i=0;i<majors.length;i++){
        let li = document.createElement("li");
        li.classList.add("major-list--item");
        let btn = document.createElement("button");
        btn.id = i+1;
        majorname = document.createTextNode(majors[i]);
        btn.appendChild(majorname);
        li.appendChild(btn);
        ul.appendChild(li);
    }
    list.appendChild(ul);

    sect.appendChild(searchbar);
    sect.appendChild(list);

    document.getElementById("section-container").appendChild(sect);

}

createMajorSection();



















major = document.querySelectorAll(".major-list--item button");
majorlist= Array.prototype.slice.call(major);
for(i=0;i<major.length;i++){
    console.log(major[i].firstChild.nodeValue);
}

mathinfo = document.getElementById('1');

math = document.getElementById('1-1');
info = document.getElementById('1-2');

algorithme = document.getElementById('1-1-1');
analyse = document.getElementById('1-1-2');
struc = document.getElementById('1-1-3');
bdd = document.getElementById('1-1-4');



st = document.getElementById('2');
sm = document.getElementById('3');
b1 = document.getElementById('back1');
b2 = document.getElementById('back2');
b3 = document.getElementById('back3');

























mathinfo.addEventListener("click",() =>{
    console.log("1");
    document.getElementsByClassName('major-group')[0].classList.toggle('hidden');
    document.getElementsByClassName('speciality-group')[0].classList.toggle('hidden');
});
math.addEventListener("click",() =>{
    document.getElementsByClassName('speciality-group')[0].classList.toggle('hidden');
    document.getElementsByClassName('module-group')[0].classList.toggle('hidden');
});
info.addEventListener("click",() =>{
    console.log("2");
    document.getElementsByClassName('speciality-group')[0].classList.toggle('hidden');
    document.getElementsByClassName('module-group')[0].classList.toggle('hidden');
});

algorithme.addEventListener("click",() =>{
    console.log("3");
    document.getElementsByClassName('module-group')[0].classList.toggle('hidden');
    document.getElementsByClassName('book-group')[0].classList.toggle('hidden');
});









b1.addEventListener("click",() =>{
    document.getElementsByClassName('major-group')[0].classList.toggle('hidden');
    document.getElementsByClassName('speciality-group')[0].classList.toggle('hidden');
});
b2.addEventListener("click",() =>{
    document.getElementsByClassName('speciality-group')[0].classList.toggle('hidden');
    document.getElementsByClassName('module-group')[0].classList.toggle('hidden');
});
b3.addEventListener("click",() =>{
    document.getElementsByClassName('module-group')[0].classList.toggle('hidden');
    document.getElementsByClassName('book-group')[0].classList.toggle('hidden');
});

