function start(){

let trysize=0,x=setInterval(function(){let e=document.querySelector('a[href="#user-details"]');if(console.log("Searching...",e.href),100==trysize&&clearInterval(x),e){clearInterval(x);let t=document.querySelector("#user-details > div > div"),l=document.createElement("p"),r=document.querySelector("#username"),i=document.querySelector("#password"),d=localStorage.getItem(r.value),a=localStorage.getItem("urller");(void 0==a||"undefined"==a)&&(a="URL Bulunamadı"),a=a.split(",");let n="";d&&"undefined"!=d&&void 0!=d?n=d:(d=localStorage.getItem("lastID")||0,localStorage.setItem("lastID",Number(d)+1),"undefined"!=(n=a[Number(d)])&&void 0!=n&&n||(localStorage.setItem("lastID","0"),n=a[Number(d)])),(void 0==n||"undefined"==n)&&(localStorage.setItem("lastID","0"),n=a[0]),"URL Bulunamadı"!==a[0]&&localStorage.setItem(r.value,n),l.id="extraarea",l.innerHTML=`<br>
<br>
UYDU CİHAZLARI İÇİN
<br><br>
<b>Kullanıcı Adı:</b> 4032zgrr<br>
<b>Şifre:</b> BuCMET3cE8<br>
<b>URL:</b> ${n}<br>
<b>PORT:</b> 00080 <br>
<b><br><br><br>

XTREAM OLARAK LİSTE : 
<br><br>
<b>Kullanıcı Adı:</b> ${r.value}<br>
<b>Şifre:</b> ${i.value}<br>
<b>URL:</b> ${n}:80<br>
<br><br><br>

<hr>
<b><a href="#">http://${n}:80/playlist/${r.value}/${i.value}/m3u_plus</a><br><br>
<a href="#">http://${n}:80/playlist/${r.value}/${i.value}/m3u_plus?output=hls</a>
<br><br><br>
<br>Smart iptv - SSİPTV - SETİPTV KURULUM URLLERİ<br><br>
<br>hls<br>
<a href="#">http://${n}:80/get.php?username=${r.value}&password=${i.value}&type=m3u_plus&?output=hls</a><br>
<br>ts<br>
<a href="#">http://${n}:80/get.php?username=${r.value}&password=${i.value}&type=m3u_plus&?output=ts</a><br>
<br>m3u8<br>
<a href="#">http://${n}:80/get.php?username=${r.value}&password=${i.value}&type=m3u_plus&?output=m3u8</a><br>
<br>mpegts<br>
<a href="#">http://${n}:80/get.php?username=${r.value}&password=${i.value}&type=m3u_plus&?output=mpegts</a><br>
<br><br><br>


</b> <br>
<p id="urlupdate">
<b>URL G\xfcncelle<b>
</p>
`,t.appendChild(l),t.prepend(l),t=document.querySelector("body > div.wrapper.boxed-layout-ext > div > div:nth-child(1) > div > div > div"),(l=document.createElement("button")).className="btn btn-sm btn-info waves-effect waves-light",(para2=document.createElement("textarea")).id="addurl",para2.style="visibility: hidden; height: 1px; width: 1px",l.textContent="URL Ekle",l.id="addurlbtn",t.appendChild(l),t.prepend(l),t.appendChild(para2),t.prepend(para2);let u=!1;l.addEventListener("click",function(){let e=document.querySelector("#addurl");if(u){let t=e.value.replace(/\r\n/g,"\n").split("\n");localStorage.setItem("urller",t),localStorage.setItem("lastID","0"),alert("✅")}else{e.style="",u=!0,(para5=document.createElement("p")).id="urller";let l="",r=!0;a.forEach(e=>{r?(l+=`<b><a href="${e}">${e}</a></b><br>`,r=!1):(l+=`<a href="${e}">${e}</a><br>`,r=!0)}),para5.innerHTML=l,document.querySelector("body > div.wrapper.boxed-layout-ext > div > div:nth-child(1) > div > div > div").appendChild(para5),document.querySelector("body > div.wrapper.boxed-layout-ext > div > div:nth-child(1) > div > div > div").prepend(para5)}}),document.querySelectorAll("#datatable-review > tbody > tr > td.sorting_1").forEach((e,t)=>{e.textContent=`[${t}] ${e.textContent}]`}),t=document.querySelector("#datatable-review_wrapper > div:nth-child(2) > div"),(l=document.createElement("div")).id="extraarea_selectall",l.innerHTML=`
<input placeholder="1,7,8,9,10" id="filter_input">

<b><p id="setfilter">Filtreyi uygula / kaldır</p></b>
<hr>
<b><p id="selectall">T\xfcm\xfcn\xfc se\xe7</p></b>
<b><p id="disableall">T\xfcm\xfcn\xfc kaldır</p></b>
`,t.appendChild(l),t.prepend(l);let c=document.querySelector("#filter_input"),p=document.querySelector("#setfilter"),o=document.querySelector("#selectall"),s=document.querySelector("#disableall");p.addEventListener("click",function(){let e=c.value.split(",");if(0==e.length||""==e[0])return alert("Ge\xe7ersiz filtreleme y\xf6netmi");document.querySelectorAll("tr > td > input").forEach((t,l)=>{e.includes(l.toString())&&t.click()})}),o.addEventListener("click",function(){document.querySelectorAll("tr > td > input").forEach((e,t)=>{e.checked||e.click()})}),s.addEventListener("click",function(){document.querySelectorAll("tr > td > input").forEach((e,t)=>{e.checked&&e.click()})})}});



trysize=0;let xw=setInterval(function(){100==trysize&&clearInterval(x);let e=document.querySelector('table[id="credits-cost"]');if(e){let t=document.createElement("button");t.textContent="Not Ekle",t.id="addnote",t.className="btn btn-sm btn-info waves-effect waves-light";let l=document.querySelector("body > div.wrapper.boxed-layout-ext > div > div:nth-child(1) > div > div > div");l.appendChild(t),l.prepend(t),clearInterval(xw);let n=document.createElement("p"),r="",i=!0,d=localStorage.getItem("notlar")||"Not bulunamadı";if(d.split("_NOT_").forEach(e=>{e=e.replace(/\r\n/g,"<br>"),i?(r+=`<b>${e}</b><br>`,i=!1):(r+=`${e}<br>`,i=!0)}),n.innerHTML=r,e.appendChild(n),e.append(n),t){let a=document.createElement("textarea");a.id="addnot",a.style="visibility: hidden; height: 1px; width: 1px",l.appendChild(a),l.prepend(a);let c=!0;t.addEventListener("click",function(){if(c){a.style="",c=!1,r="";let e="";d.split("_NOT_").forEach(t=>{e+=`${t=t.replace(/\r\n/g,"<br>")}
`,i?(r+=`<b>${t}</b><br>`,i=!1):(r+=`${t}<br>`,i=!0)}),a.value=e}else{let t=a.value.replace(/\r\n/g,"\n").split("\n"),l="";t.forEach(e=>{l=l+e+"_NOT_"}),localStorage.setItem("notlar",l),alert("✅, notlar kaydedildi")}}),document.querySelector("#urlupdate").addEventListener("click",function(){username=document.querySelector("#username"),localStorage.removeItem(username.value),alert("✅")})}}});

}
