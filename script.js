fetch('https://github.com/coding142857/squid.tobox.io/blob/d699ddbb5145ecdef8364d68deba863d93902e47/game_info.json')
  .then((response) => {return response.json()})
  .then((data) => {
    window.game_info = data;
    console.log(game_info);
    // 你可以在這裡使用 game_info 物件
  })
  .catch(error => console.error('Error fetching game_info:', error));

