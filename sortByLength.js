function sortByLength(){
    const kuroko = ["kagami", "atsuchi-murasakibara", "seijuro_akashi", "mudorima", "daiki-kise", "jumpe-yuga" ];
    kuroko.sort((a,b)=> a.length - b.length);
    console.log(kuroko);
}
sortByLength();
module.exports = sortByLength