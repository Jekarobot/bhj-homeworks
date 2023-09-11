let tabs = document.querySelectorAll('.tab');
let arrTabs = Array.from(tabs);
let tabContents = document.querySelectorAll('.tab__content');
let arrTabContents = Array.from(tabContents);



arrTabs.forEach(function(tab, index) {
  tab.addEventListener('click', function(event){
    if(!event.target.classList.contains('tab_active')) {
        event.preventDefault();
        event.stopPropagation();

        arrTabs.forEach((t, i) => {
            t.classList.remove('tab_active');
            arrTabContents[i].classList.remove('tab__content_active');
        });

        tab.classList.add('tab_active');
        arrTabContents[index].classList.add('tab__content_active');
    }

  });
});
