// https://github.com/patwork/trello-save-attachments/

document.location.href.match(/https:\/\/trello\.com\/card\/.*\.json$/) &&
	fetch(document.location)
		.then((res) => res.json())
		.then(
			(out) =>
				out.actions &&
				out.actions.forEach((action, idx) => {
					if (
						action.data &&
						action.data.attachment &&
						action.data.attachment.name &&
						action.data.attachment.url
					)
						setTimeout(() => {
							const link = document.createElement('a');
							link.download = action.data.attachment.name;
							link.href = action.data.attachment.url;
							link.click();
							console.log(link);
						}, idx * 500);
				})
		)
		.catch((err) => alert(err));

// EoF
