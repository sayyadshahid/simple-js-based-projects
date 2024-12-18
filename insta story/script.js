var arr = [
  {
    dp: "https://images.unsplash.com/photo-1627392690614-39bcadf6d2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
  },

  {
    dp: "https://images.unsplash.com/photo-1627392690614-39bcadf6d2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
  },

  {
    dp: "https://images.unsplash.com/photo-1627392690614-39bcadf6d2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1627392690614-39bcadf6d2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1627392690614-39bcadf6d2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1627392690614-39bcadf6d2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
    story:
      "https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXIlMjBjYXJzfGVufDB8fDB8fHww",
  },
];

var cltr = "";
arr.forEach(function (e, indx) {
  cltr += `  <div class="story"> <img  id="${indx}" src="${e.dp}"  alt="" >   </div>`;
});

document.querySelector(".scroller").innerHTML = cltr;

document.querySelector(".scroller").addEventListener("click", function (dets) {
  document.querySelector("#full-scr").style.display = "block";
  document.querySelector("#full-scr").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(() => {
    document.querySelector("#full-scr").style.display = "none";
  }, 2000);
});
