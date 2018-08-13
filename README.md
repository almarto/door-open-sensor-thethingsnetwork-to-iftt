# TheThingsNetwork to IFTTT connector

This app will be listening for requests from TheThingsNetwork and send a request to IFTTT after parse the data.

## Why?

Neither TheThingsNetwork nor IFTTT are able to convert the digital values from Arduino to a human language

## Configuration

Please replace the value of `iftttKey` in `config.json` with the key which you'll find in your IFTTT WebHook Service

![Webhooks setting API key](Webhooks_setting-Place_API_Key.png "Webhooks setting -- Locate API-Key")

## Want to help?

Feel free to fork the project and create a Pull Request with you changes.

### TODOS

app.js [40] => When requesting to ifttt we should do something about the answer, especially if there's an error.

app.js [42] => We should add a logger instead of use the console.log
