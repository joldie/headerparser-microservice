# Header Parser Microservice

REST API which parses the HTTP request header and returns useful information.

## Description

The API endpoint is:

`GET [site_url]/api/whoami`

#### Output

A JSON object with the following structure:

```json
{
  "ipaddress": "159.20.14.100",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

## Contributing

All contributions are welcome, particularly feedback on code quality, bug reports, tips and ideas for improvement.

## License

All code dedicated to the world-wide public domain under a [Creative Commons Zero v1.0 Universal License](https://creativecommons.org/publicdomain/zero/1.0/)
