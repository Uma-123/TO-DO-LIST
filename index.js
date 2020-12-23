const btn = document.getElementById("btn");
const input = document.getElementById("newitem");
const newitem = document.getElementById("newitem").value

btn.addEventListener('mouseover',over)
btn.addEventListener('mouseout',out)



btn.addEventListener('click',add)
function add(e){
    document.getElementById("newitem").value = '';
}

function over(e){
    btn.style.backgroundColor = '#21cdde';
    btn.style.fontSize = '15px';
    btn.style.borderRadius = '10px';
    
    // input.style.display = 'block';
    // input.style.marginLeft = '43%';
    // input.style.marginRight = '30%';
    // input.style.marginTop = '1%';
    // input.style.marginBottom = '1%';
    
}
function out(e){
    btn.style.backgroundColor = '#EFEFEF';
    btn.style.fontSize = '13.3333px';
    btn.style.borderRadius = '0px';
}

