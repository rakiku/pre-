function encodeImagePath(type) {
    const folderMap = {
        boss: 'files/boss',
        character: 'files/characters',
        weapon: 'files/weapons'
    };
    return `${folderMap[type] || ''}/${type}`;
}