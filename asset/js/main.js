

const nevClick = document.getElementById("TopIcon");
nevClick.addEventListener('click',()=>{
    const leftitem = document.querySelector(".ShowOnMobile");
    leftitem.style.display = "block";
})

function MobileTopCros(){
    const leftitem = document.querySelector(".ShowOnMobile");
    leftitem.style.display = "none";
}

// add new users
// const addnewUser = document.getElementById("addnewUser");
function addnewUser(){
    document.querySelector('.ManageUsers').style.display = "none";
    document.querySelector(".addUser").style.display = "block";
};

// add new  save
// const userSave = document.getElementById("userSave");
function userSave(){
    document.querySelector('.ManageUsers').style.display = "block";
    document.querySelector(".addUser").style.display = "none";
}

