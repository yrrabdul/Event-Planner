
const menuBtn=document.querySelector('[data-menu]');
const mobileNav=document.querySelector('.mobile-nav');
if(menuBtn&&mobileNav){
  menuBtn.addEventListener('click',()=>{
    mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',mobileNav.classList.contains('open')?'true':'false');
  });
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a,.mobile-nav a').forEach(a=>{
  if(a.getAttribute('href')===current)a.classList.add('active');
});

/* Hover-expanding end-to-end experience cards */
document.querySelectorAll('[data-expand-cards]').forEach(rail=>{
  const cards=[...rail.querySelectorAll('.experience-card')];
  const activate=card=>{
    cards.forEach(c=>c.classList.remove('active'));
    card.classList.add('active');
  };
  cards.forEach(card=>{
    card.addEventListener('mouseenter',()=>activate(card));
    card.addEventListener('focusin',()=>activate(card));
    card.addEventListener('click',()=>activate(card));
  });
  rail.addEventListener('mouseleave',()=>{
    cards.forEach(c=>c.classList.remove('active'));
    if(cards[0])cards[0].classList.add('active');
  });
});

document.querySelectorAll('form[data-demo]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const msg=form.querySelector('.form-notice');
    if(msg){
      msg.style.display='block';
      msg.textContent='Thank you — this front-end demo captured your event brief. Connect this form to your email, WhatsApp, CRM or backend before publishing.';
      msg.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  });
});

const filterButtons=document.querySelectorAll('[data-filter]');
const galleryItems=document.querySelectorAll('[data-category]');
filterButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    filterButtons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    galleryItems.forEach(item=>{
      item.style.display=(filter==='all'||item.dataset.category===filter)?'block':'none';
    });
  });
});
