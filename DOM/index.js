let x;
let y;
let z;
let a;
let b;
y=document.getElementsByClassName('items');
x=document.getElementById('text');
z=document.getElementsByTagName('h1');
a=document.querySelector('.items');
b=document.createElement('li');
b.className='items';
b.innerText='beast';
b.style.color='green';
let ul=document.getElementById('list');
ul.append(b);
console.log(x);
console.log(y);
console.log(z);

var items=getElementsByTagName('li');
for(let i=0; i<items.length; i++){
    const item=items[i];

    let link=item.querySelector('a');
    link.setAttribute('href','www.google.com/search?q'+link.innerText);
    console.log(items);
}