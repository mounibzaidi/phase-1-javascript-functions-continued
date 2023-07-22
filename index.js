function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}
function wrapAdjective(adj = '"*"') {
    return function (name = 'special') {
        return `You are ${adj}${name}${adj}!`;
    }
}