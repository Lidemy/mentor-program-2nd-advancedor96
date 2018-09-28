let url = 'https://api.twitch.tv/kraken/streams/?client_id=taqgkzs6he7fw6opbsb1dqjvdz9gyu&limit=20&game=League%20of%20Legends'
fetch(url)
.then(function(res){
  return res.json();
})
.then(function(myJson){
  let {streams} = myJson

  for(let i=0;i<streams.length;i++){
    let preview_img = streams[i].preview.medium;
    let channel_logo = streams[i].channel.logo;
    let channel_status = streams[i].channel.status;
    let channel_name = streams[i].channel.name;

    let new_html = getHtml(preview_img, channel_logo, channel_status, channel_name)
    $('.container').append(new_html);

  }
})

function getHtml(preview_img, channel_logo, channel_status, channel_name) {
  return `<div class="item">
           <div class="preview"><img src="${preview_img}" alt=""></div>
           <div class="bottom">
              <div class="owner"><img src="${channel_logo}" alt=""></div>
              <div class="description">
                 <div class="channel">${channel_status}</div>
                 <div class="name">${channel_name}</div>
              </div>
           </div>
        </div>
        `;
}

