## Starting the server
Run `npm start`

## Using the server
Server routes:
  - `GET /scoops` and `GET /toppings` return sundae options (array of objects with keys `name` and `imagePath`)
  - `POST /order` returns a random order number (does not process order)
  - images via static `/images` directory.

## Testing
To test, run `npm test`.
