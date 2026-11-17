(function(){
  var BP=900;
  var btn=document.getElementById('menubtn'),menu=document.getElementById('mobilemenu');
  if(btn&&menu){
    btn.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    window.addEventListener('resize',function(){
      if(window.innerWidth>BP){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');}
    });
  }
  var drops=document.querySelectorAll('.has-drop');
  Array.prototype.forEach.call(drops,function(d){
    var b=d.querySelector('.navbtn');
    if(!b)return;
    b.addEventListener('click',function(e){
      e.preventDefault();
      var o=d.classList.toggle('open');
      b.setAttribute('aria-expanded',o?'true':'false');
    });
    d.addEventListener('mouseenter',function(){b.setAttribute('aria-expanded','true');});
    d.addEventListener('mouseleave',function(){d.classList.remove('open');b.setAttribute('aria-expanded','false');});
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      Array.prototype.forEach.call(drops,function(d){d.classList.remove('open');});
      if(menu&&menu.classList.contains('open')){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus();}
    }
  });
})();
