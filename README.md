# trello-save-attachments

Javascript snippet for automatically save all attachments in trello card

Usage:

1. click share button in a card with attachments
2. click export JSON
3. url should look like https://trello.com/card/xxxxxxx.json
4. open dev console (F12)
5. paste and run snippet

`
document.location.href.match(/https:\/\/trello\.com\/card\/.*\.json$/) && fetch(document.location) .then((res) => res.json()) .then( (out) => out.actions && out.actions.forEach((action, idx) => { if ( action.data && action.data.attachment && action.data.attachment.name && action.data.attachment.url) setTimeout(() => { const link = document.createElement('a'); link.download = action.data.attachment.name; link.href = action.data.attachment.url; link.click(); console.log(link); }, idx * 500); })) .catch((err) => alert(err));
`

Alternatively, you can make a bookmark with the code entered in the url field as "javascript: (code)"

There is a deliberate 500 millisecond delay without which not all files are added to the download queue (web browser self protection?).

Tested in Chrome v102 in Linux.
