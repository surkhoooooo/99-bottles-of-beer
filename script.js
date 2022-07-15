const generateSingleStanza = (number) => {

  if (number % 10 == 1) {
    return (`${number} бутылка`);
  } else if (number % 10 == 2 && number !== 12 || number % 10 == 3 && number !== 13 || number % 10 == 4 && number !== 14) {
    return (`${number} бутылки`);
  } else if (number == 0) {
    return (`Нет больше бутылок пива на стене! Нет бутылок пива на стене!\n Нет бутылок пива! Пойди в магазин и купи ещё`);

  } else {
    return (`${number} бутылок`);
  }

}


const generateSongText = (number) => {
  for (let i = 0; i < number; number--) {
    let text = `${generateSingleStanza(number)} пива на стене, ${generateSingleStanza(number)} пива!\n  Возьми одну, пусти по кругу, ${generateSingleStanza(number - 1)} пива на стене`;
    console.log(text);
  }
}

generateSongText(49)
