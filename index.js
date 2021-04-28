import Uwuifier from 'uwuifier';
import propertiesReader from 'properties-reader';
const uwuifier = new Uwuifier();

function makeUwUProperty(file){
    var properties = propertiesReader(file);
    properties.each((key, value) => {
        properties.set(key, uwuifier.uwuifySentence(value))
        console.log(`Key ${key}, Value: ${value}`);
    });
    properties.save(file);
}

makeUwUProperty("context.properties");
