let userCharacter = prompt("What is your character's name?");
alert("Your character's name is now: " + userCharacter);
alert(userCharacter + " is walking down the street, minding their own business when suddenly");
alert("A trash panda jumps out at " + userCharacter +  " and starts speaking to you");
alert('Trash Panda: “Do you know what is about to happen to this world?!”');

let firstOption = prompt('Option A = No, Option B = Yes');


while (firstOption){
    if (firstOption === 'A'){
    alert('Well Earth is going to be attacked, and potentially destroyed, you will need protection!!');
    } else if (firstOption === 'B'){
    alert('Well, since you know, I have a gift for you');
    } 
}


// switch(firstOption){
//     case 'A':
//     alert('Well Earth is going to be attacked, and potentially destroyed, you will need protection!!');
//     break;
//     case 'B':
//         alert('Well, since you know, I have a gift for you');
//     break;
//     default:
//         alert("Go back! That is not an option!");
// }
alert('Trash panda tells '+ userCharacter + '" It is not safe to travel alone and gives you a glove"')
let secondOption = prompt('Option A: throw it on the floor, Option B: Keep it and equip it')
function secOpt(){
switch(secondOption){
    case 'A':
    alert('The trash panda picks it back up and throws it at you and calls you an idiot. At this point you realize you should probably equip the glove');
    break;
    case 'B':
        alert( userCharacter +' thanks the trash panda and put the glove on');
    break;
     default:
}
}
secOpt();
alert('The trash panda tells ' + userCharacter + ' to keep the glove on you at all times. It is apparent that they do');
alert('Several days pass by and meteoroids come crashing down, leveling entire cities across the world');
alert(userCharacter + ' survives because of the glove the trash panda gave them, congrats for not being dumb')
alert('But now ' + userCharacter + ' is unconscious because of the blast and they hit a wall')
alert('Since ' + userCharacter +' was unconscious the meteoroids turned out to be an invasion of an alien race named Zoks')
alert('Now ' + userCharacter + ' is imprisoned on their spaceship and need to get out')
alert('A guard comes walking by, ' + userCharacter + ' notices they left the gloves on')
let thirdOption = prompt('Option A: Do you try to break free? Option B: Stay still and do nothing? Option C: Spit on the guard and call him a punk bitch')
// function trdOpt(){
// switch(thirdOption){
//     case 'A':
//         alert('While you struggle to break free, the guard notices and comes over to knock you unconscious. But in doing so you actually broke the cuffs and accidentally knocked the guard out');
//     break;
//     case 'B':
//         alert('The guard notices that you gave up and were no longer worth keeping around. So they bring you to their labortory where they performed a live autopsy on you');
//     break;
//     case 'C':
//         alert('The guard starts shooting at you but you break free and kill him. His death causes an explosion that sends you flying down to Earth, you survive');
//     break;
//      default:
//         alert("Go back! That is not an option!");
// }
// }
// trdOpt();
// function trdOpt(){
// if (thirdOption === 'A'){
// alert('While you struggle to break free, the guard notices and comes over to knock you unconscious. But in doing so you actually broke the cuffs and accidentally knocked the guard out');
// } else if (thirdOption === 'B'){
// alert('The guard notices that you gave up and were no longer worth keeping around. So they bring you to their labortory where they performed a live autopsy on you');
// } else if (thirdOption === 'C'){
//     alert ('The guard starts shooting at you but you break free and kill him. His death causes an explosion that sends you flying down to Earth, you survive');
// }
// }
// trdOpt();
while (thirdOption){
    if (thirdOption === 'A'){
    alert('While you struggle to break free, the guard notices and comes over to knock you unconscious. But in doing so you actually broke the cuffs and accidentally knocked the guard out');
    } else if (thirdOption === 'B'){
    alert('The guard notices that you gave up and were no longer worth keeping around. So they bring you to their labortory where they performed a live autopsy on you');
    } else if (thirdOption === 'C'){
        alert ('The guard starts shooting at you but you break free and kill him. His death causes an explosion that sends you flying down to Earth, you survive');
        } 
}