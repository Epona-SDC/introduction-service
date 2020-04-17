const {lorem:{ sentence }, commerce, image, random} = require('faker');

const path = require('path')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

//100 times

const randomNum = () => random.number({min:5, max:6});
const getRandomPhotos = () => {
  let photoUrls = "{"
  for (let i = 0, len = randomNum(); i < len ; i += 1){
    photoUrls+= 'https://imagebucketsdc.s3-us-west-1.amazonaws.com/' + random.number({min:1, max:30}) + '.jpg';
    if (i !== len -1) {
      photoUrls+= ","
    }
  }
  photoUrls += "}";
  return photoUrls;
}

const generatePhotos = (index) => {
  const fileLocation =  path.join(__dirname, `./data/photos${index}.csv`)

  const csvWriter = createCsvWriter({
  path: fileLocation,
  header: [
      {id: 'listingNumber', title: 'listingNumber'},
      {id: 'photos', title: 'photos'},
  ],
  fieldDelimiter: ';'
  });
  const generateFiveHundredThousand = (index) => {
    const records = [];
    for (let i = 1; i <= 500000; i++) {
      var listingNumber = index === 1 ? i : ((index - 1) * 500000) + i;
      // console.log(i);
      records.push({
        listingNumber, photos:getRandomPhotos(),
      })
    }
    return records;
  }

  const photos = generateFiveHundredThousand(index);
  console.time('generateFiveHundredThousandPhotos-' +index)
  console.timeLog('generateFiveHundredThousandPhotos-' +index, '- Start')
  return csvWriter.writeRecords(photos)       // returns a promise
.then(() => {
    console.timeEnd('generateFiveHundredThousandPhotos-' +index, '- End')
  });

}
const createNewListing = (index) => {

  // Write one record onto a csv file
const fileLocation =  path.join(__dirname, `./data/listing${index}.csv`)

const csvWriter = createCsvWriter({
  path: fileLocation,
  header: [
      {id: 'title', title: 'title'},
      {id: 'description', title: 'description'},
  ],
  fieldDelimiter: ','
});


const generateOneMillion = (index) => {
  const records = [];
  for (let i = 1; i <= 1000000; i++) {
    records.push({
       title: commerce.productName(), description: sentence(),
    })
  }
  return records;
}
console.time('generateOneMillionListings-' +index, )
console.timeLog('generateOneMillionListings-' +index , '- Start')
const lists = generateOneMillion(index);

 return csvWriter.writeRecords(lists)       // returns a promise
    .then(() => {
        console.timeEnd('generateOneMillionListings-' +index, '- End')
      });
}
const getData = async () =>{
  for (let i = 1 ; i <= 10 ; i++) {
    await createNewListing(i);
    await generatePhotos(i);
  }
  for (let i = 11; i <= 20; i++) {
    await generatePhotos(i);
  }
}
getData()
  .then(() => {
    console.log('10 CSV files populated');
  })
