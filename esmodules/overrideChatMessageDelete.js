Hooks.on("renderChatMessage", (chatMessage, html) => {
    const deleteButton = html.find(".message-delete");
    deleteButton.on('click', async (e) => {
        e.stopPropagation();
        const isToBeDeleted = await Dialog.confirm({
            title: game.i18n.localize("MOD.DIALOG.Title"),
            content: `<h3>${game.i18n.localize("MOD.DIALOG.Content")}</h3>`
        });

        if (isToBeDeleted) {
            chatMessage.delete();
        }

    })
})