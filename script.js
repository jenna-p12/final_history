function handleEmail() {
  var n = document.getElementById('email-name').value.trim();
  var e = document.getElementById('email-addr').value.trim();
  var m = document.getElementById('email-msg').value.trim();
  if (!n || !e || !m) { alert('Please fill in all fields.'); return; }
  document.getElementById('email-name').value = '';
  document.getElementById('email-addr').value = '';
  document.getElementById('email-msg').value = '';
  document.getElementById('email-confirm').style.display = 'block';
}

var chatResponses = {
  'stonewall': 'The Stonewall Riots of June 1969 were a series of protests by the LGBTQ+ community in New York City after a police raid on the Stonewall Inn. They are considered the pivotal moment that launched the modern gay rights movement and led to the first Pride marches in 1970.',
  'harvey milk': 'Harvey Milk (1930–1978) was the first openly gay man elected to public office in California. He won a seat on the San Francisco Board of Supervisors in 1977 and believed deeply in the power of coming out as political action. He was assassinated in 1978.',
  'kameny': 'Frank Kameny (1925–2011) was a Harvard-trained astronomer fired for being gay. He became one of the movement\'s most important legal minds, filing one of the first legal challenges to anti-gay discrimination and coining the phrase "Gay is Good."',
  'harry hay': 'Harry Hay (1912–2002) is often called the "father of gay liberation." He founded the Mattachine Society in 1950, one of the first sustained gay rights organizations in the United States.',
  'marsha': 'Marsha P. Johnson (1945–1992) was a Black transgender activist who fought in the Stonewall Uprising and co-founded STAR (Street Transvestite Action Revolutionaries) in 1970, one of the first organizations to shelter homeless transgender youth.',
  'gittings': 'Barbara Gittings (1932–2007), known as the "Mother of the Gay Rights Movement," founded the New York chapter of the Daughters of Bilitis in 1958 — the nation\'s first lesbian civil rights organization.',
  'compton': 'The Compton\'s Cafeteria Riot of 1966 in San Francisco was one of the first recorded instances of the transgender and queer community militantly fighting back against police harassment.',
  'goals': 'The movement\'s goals included repealing sodomy laws, ending police harassment, gaining constitutional recognition of gay rights, and achieving social acceptance — including the removal of homosexuality from the APA\'s list of mental disorders.',
  'default': 'Great question! This site covers leaders like Harvey Milk, Frank Kameny, Harry Hay, Marsha P. Johnson, and Barbara Gittings, as well as key events including Stonewall, the Sip-In, and Compton\'s Cafeteria Riot. Try asking about any of them specifically!'
};

function sendChat() {
  var input = document.getElementById('chat-input');
  var q = input.value.trim();
  if (!q) return;
  var msgs = document.getElementById('chat-msgs');
  var userDiv = document.createElement('div');
  userDiv.className = 'chat-msg user';
  userDiv.textContent = q;
  msgs.appendChild(userDiv);
  input.value = '';
  var lower = q.toLowerCase();
  var reply = chatResponses['default'];
  for (var key in chatResponses) {
    if (lower.indexOf(key) !== -1) { reply = chatResponses[key]; break; }
  }
  setTimeout(function() {
    var botDiv = document.createElement('div');
    botDiv.className = 'chat-msg bot';
    botDiv.textContent = reply;
    msgs.appendChild(botDiv);
    msgs.scrollTop = msgs.scrollHeight;
  }, 400);
}