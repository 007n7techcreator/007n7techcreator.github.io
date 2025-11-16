const terminal = document.getElementById('terminal');
const bar = document.getElementById('bar');
const meta = document.getElementById('meta');
const warning = document.getElementById('warning');
const reveal = document.getElementById('reveal');
const startBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart');

function randomIP(){ 
  return [
    Math.floor(Math.random()*255),
    Math.floor(Math.random()*255),
    Math.floor(Math.random()*255),
    Math.floor(Math.random()*255)
  ].join('.');
}

function randomHex(len){ 
  let s=''; 
  const chars='abcdef0123456789'; 
  for(let i=0;i<len;i++) s+=chars[Math.floor(Math.random()*chars.length)]; 
  return s; 
}

let running=false;

function typeLines(lines, i=0, cb){
  if(i>=lines.length){ cb && cb(); return }
  const line = lines[i];
  let pos=0;
  const el = document.createElement('div'); 
  el.className='line'; 
  terminal.appendChild(el);

  const cursor = document.createElement('span'); 
  cursor.className='cursor';

  const typer = setInterval(()=>{
    if(pos<line.length){ 
      el.textContent += line[pos++]; 
    }
    else{ 
      clearInterval(typer); 
      el.appendChild(cursor); 
      setTimeout(()=>{ 
        el.removeChild(cursor); 
        typeLines(lines,i+1,cb); 
      }, 500);
    }
  }, 18 + Math.random()*40);

  terminal.scrollIntoView({behavior:'smooth',block:'end'});
}

function runDemo(){
  if(running) return; 
  running=true;

  startBtn.style.display='none';
  restartBtn.style.display='none';

  terminal.textContent='';
  meta.textContent='Establishing connection...';
  bar.style.width='0%';
  warning.style.display='none';
  reveal.style.display='none';

  const session = [
    `> sudo init_connection --target ${randomIP()}`,
    `> handshake: OK`,
    `> retrieving system info...`,
    `> host: server-${randomHex(6)}`,
    `> user: admin`,
    `> permission: root`,
    `> downloading payload: 0%`
  ];

  typeLines(session,0,()=>{
    let p=0;
    const step = setInterval(()=>{
      p += Math.floor(Math.random()*8)+3;
      if(p>100) p=100;

      bar.style.width = p + '%';
      meta.textContent = `Downloading payload: ${p}% — ${randomHex(4)}.bin`;

      if(p===100){
        clearInterval(step);

        setTimeout(()=>{
          meta.textContent = 'Failed to download payload: checksum mismatch';
          warning.style.display='block';

          let ecount=0;
          const expl = setInterval(()=>{
            const l = document.createElement('div');
            l.className='line';
            l.textContent = 
              `!!! CRITICAL ERROR [CODE: ${randomHex(8)}] — initiating catastrophic failover (${ecount+1}/4)`;
            terminal.appendChild(l);

            ecount++;
            if(ecount>=4){
              clearInterval(expl);
              const end = document.createElement('div');
              end.className='line';
              end.innerHTML = `<strong>*** SYSTEM OBLITERATED ***</strong>`;
              terminal.appendChild(end);

              setTimeout(()=>{
                reveal.style.display='block';
                running=false;
                restartBtn.style.display='inline-block';
              }, 900);
            }
          }, 650);
        }, 700);
      }
    }, 250);
  });
}

startBtn.addEventListener('click', runDemo);

restartBtn.addEventListener('click', ()=>{
  running=false;
  terminal.textContent='';
  bar.style.width='0%';
  meta.textContent='Ready.';
  warning.style.display='none';
  reveal.style.display='none';
  startBtn.style.display='inline-block';
  restartBtn.style.display='none';
});

window.addEventListener('load', ()=>{
  meta.textContent='Ready.';
});
  const session = [
    `> sudo init_connection --target ${randomIP()}`,
    `> handshake: OK`,
    `> retrieving system info...`,
    `> host: server-${randomHex(6)}`,
    `> user: admin`,
    `> permission: root`,
    `> downloading payload: 0%`
  ];

  typeLines(session,0,()=>{
    let p=0;
    const step = setInterval(()=>{
      p += Math.floor(Math.random()*8)+3;
      if(p>100) p=100;

      bar.style.width = p + '%';
      meta.textContent = `Downloading payload: ${p}% — ${randomHex(4)}.bin`;

      if(p===100){
        clearInterval(step);
        setTimeout(()=>{
          meta.textContent = 'Failed to download payload: checksum mismatch';
          warning.style.display='block';

          // Explosion sequence
          let ecount=0;
          const expl = setInterval(()=>{
            const l = document.createElement('div');
            l.className='line';
            l.textContent = `!!! CRITICAL ERROR [CODE: ${randomHex(8)}] — initiating catastrophic failover (${ecount+1}/4)`;
            terminal.appendChild(l);
            ecount++;
            if(ecount>=4){
              clearInterval(expl);
              const end = document.createElement('div');
              end.className='line';
              end.innerHTML = `<strong>*** SYSTEM OBLITERATED ***</strong>`;
              terminal.appendChild(end);

              setTimeout(()=>{
                reveal.style.display='block';
                running=false;
                restartBtn.style.display='inline-block';
              }, 900);
            }
          }, 650);
        }, 700);
      }
    }, 250);
  });
}

startBtn.addEventListener('click', runDemo);

restartBtn.addEventListener('click', ()=>{
  running=false;
  terminal.textContent='';
  bar.style.width='0%';
  meta.textContent='Ready.';
  warning.style.display='none';
  reveal.style.display='none';
  startBtn.style.display='inline-block';
  restartBtn.style.display='none';
});

window.addEventListener('load', ()=>{
  meta.textContent='Ready.';
});
