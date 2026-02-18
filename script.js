// Updated showResults function
function showResults(results) {
    // Prioritize キャラ武器ルーレット results
    const prioritizedResults = results.filter(result => result.type === 'キャラ武器ルーレット');

    // Display prioritized results
    prioritizedResults.forEach(result => {
        displayWeapon(result);
    });

    // Display remaining results, excluding distribution weapon bind multiple logic
    const remainingResults = results.filter(result => result.type !== 'distribution weapon bind');
    remainingResults.forEach(result => {
        displayWeapon(result);
    });
}